import CustomButton from "../ui/CustomButton";
import InputCurrency from "../ui/InputCurrency";
import PicturesWall from "../ui/PicturesWall";
import { Form, Input } from "antd";
import ScrollableSection from "./ScrollableSection";
import "../../../index.css";
import { useState, useContext } from "react";
import useNotification from "../../../customeHooks/useNotification";
import useAddProduct from "../../../customeHooks/useAddProducts";
import { ProductUserContext } from "../../../contexts/ProductUserContext";

const { TextArea } = Input;

const CreateProduct = () => {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const { onNotify } = useNotification();
  const { addProduct } = useAddProduct();
  const { setShowCreateProduct } = useContext(ProductUserContext); // Get the context to manage visibility

  const onFinish = async (values) => {
    setLoading(false);

    // Clean and parse the price
    const numericValue = values.price.replace(/[^\d.]/g, ""); // Remove non-numeric characters
    const cleanPrice = parseFloat(numericValue) * 10;

    // Structure the data to match the backend
    const productData = {
      name: values.name,
      description: values.description,
      images: values.images, // This should be an array of image URLs
      price: cleanPrice,
    };

    try {
      // console.log(productData);
      await addProduct(productData);
      // onNotify("success", "Successful", "Products Added Successfully");

      // Clear the form fields
      form.resetFields();

      //clear everything and render a different component
      // Reset to show the product list page by setting showCreateProduct to false
      // Add a delay of 2 seconds before updating the context
      setTimeout(() => {
        setShowCreateProduct(false); // Update the context to show the product list
      }, 2000); // 2000 milliseconds = 2 seconds
    } catch (error) {
      onNotify("error", error, "Failed to add product");
    }
  };

  const onFinishFailed = (errorInfo) => {
    setLoading(false);
    console.log("Failed:", errorInfo);
    onNotify("error", "Failed", "Something went wrong");
  };

  const handleImagesChange = (urls) => {
    form.setFieldsValue({ images: urls }); // Update form values with image URLs
  };

  return (
    <>
      <Form
        form={form}
        className="max-w-[50rem]"
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}>
        <h1 className="text-3xl font-bold mt-6 mb-8">Create Product</h1>

        <div className="flex items-center gap-2 wrap-at-400px">
          <Form.Item
            name="images"
            rules={[
              { required: true, message: "Please upload product images!" },
            ]}
            className="flex-1">
            <PicturesWall onChange={handleImagesChange} />
          </Form.Item>

          <Form.Item
            name="price"
            rules={[{ required: true, message: "Please add a price!" }]}
            className="self-start">
            <div>
              <h1 className="text-xl">Price</h1>
              <InputCurrency />
            </div>
          </Form.Item>
        </div>

        <div className="w-full flex flex-wrap gap-x-10 gap-y-5 items-center my-6">
          <Form.Item
            name="name"
            rules={[{ required: true, message: "Product Name is required!" }]}
            className="flex-1">
            <div className="max-w-[20rem]">
              <h1 className="mb-2">Product Name</h1>
              <Input
                className="bg-transparent border-customBlack"
                placeholder="Turbo Sneakers Shoe"
                type="text"
              />
            </div>
          </Form.Item>
        </div>

        <Form.Item
          name="description"
          rules={[
            { required: true, message: "Product Description is required!" },
          ]}>
          <div className="mb-6">
            <h1 className="mb-2">Product Description</h1>
            <TextArea
              className="bg-transparent border-customBlack"
              rows={6}
              placeholder="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, repellendus."
            />
          </div>
        </Form.Item>

        <Form.Item>
          <div className="mb-7">
            <CustomButton
              value="Submit"
              onClick={() => {
                setLoading(true);
                // form.submit();
              }}
              loading={loading}
            />
          </div>
        </Form.Item>
      </Form>

      <div>
        <h1 className="text-xl mb-2">Added Products</h1>
        <ScrollableSection />
      </div>
    </>
  );
};

export default CreateProduct;
