// ./src/common/components/CustomTable.jsx
import { useState } from "react";
import { Table, Button, Space } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import useFetchProducts from "../../../customeHooks/useFetchproducts";
import useDeleteProduct from "../../../customeHooks/useDeleteProducts";
import useNotification from "../../../customeHooks/useNotification";
import { toTitleCase } from "../../../utils/formatters";
import "../../../index.css";
import PopConfirmDelete from "./PopConfirmDelete";

const productTableColumns = [
  {
    title: "Image",
    dataIndex: "images",
    render: (images) => (
      <img
        src={images[0] || "https://via.placeholder.com/50"} // Show the first image or placeholder
        alt="Product"
        style={{ width: 50, height: 50 }}
      />
    ),
  },
  {
    title: "Name",
    dataIndex: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Price",
    dataIndex: "price",
    render: (price) =>
      new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(price),
  },
  {
    title: "Product Description",
    dataIndex: "description", // Ensure this matches the API response
  },
  {
    title: "Created By",
    dataIndex: "createdBy",
    render: (text) => toTitleCase(text),
  },
  {
    title: "Created Date",
    dataIndex: "createdAt",
    render: (date) => dayjs(date).format("MMMM D, YYYY"),
  },
];

const CustomTable = () => {
  const { products, loading, error, setProducts } = useFetchProducts();
  const { deleteProduct, deleting, deleteError } = useDeleteProduct();
  const { onNotify } = useNotification();
  const [selectedProductIds, setSelectedProductIds] = useState([]);

  // Handlers for edit and delete actions
  const handleEdit = () => {
    console.log("Edit clicked");
    alert("Edit button clicked!");
  };

  const handleDelete = async () => {
    try {
      await Promise.all(
        selectedProductIds.map((key) =>
          deleteProduct(key, () => {
            // Optionally refresh the product list or perform other actions
          })
        )
      );

      // Show success notification
      onNotify(
        "success",
        "Product deleted",
        "Selected products have been deleted."
      );

      // Clear the selection after successful deletion
      setSelectedProductIds([]);

      // Update products state by filtering out deleted products
      setProducts((prevProducts) =>
        prevProducts.filter(
          (product) => !selectedProductIds.includes(product._id)
        )
      );

      //end
    } catch (error) {
      console.log(error);
      onNotify(
        "error",
        "Deletion failed",
        deleteError || "An error occurred while deleting products."
      );
    }
  };

  // Row selection configuration
  const rowSelection = {
    selectedRowKeys: selectedProductIds,
    onChange: (newSelectedProductIds) => {
      setSelectedProductIds(newSelectedProductIds); // Update selected row keys
    },
    getCheckboxProps: (record) => ({
      disabled: record.name === "Disabled User", // Disable checkbox for 'Disabled User'
      name: record.name,
    }),
  };

  // Create a reversed copy of products without mutating the original array
  const reversedProducts = [...products].reverse();

  return (
    <div>
      <Space style={{ marginBottom: 16 }}>
        <Button
          type="primary"
          className="custom-button"
          icon={<EditOutlined />}
          onClick={handleEdit}
          disabled={
            selectedProductIds.length === 0 || selectedProductIds.length > 1
          } // Disable if 0 or >1 rows checked
        >
          Edit
        </Button>
        {/* Integrating PopConfirmDelete with the Delete button */}
        <PopConfirmDelete onConfirm={handleDelete}>
          <Button
            type="primary"
            className="custom-button"
            icon={<DeleteOutlined />}
            disabled={selectedProductIds.length === 0 || deleting}>
            Delete
          </Button>
        </PopConfirmDelete>
      </Space>

      {error ? (
        <div className="error-message">
          {/* Render error message */}
          <p>Error fetching products: {error.message}</p>
        </div>
      ) : (
        <Table
          className="custom-checkbox"
          rowSelection={{
            type: "checkbox", // Force checkbox type
            ...rowSelection,
          }}
          columns={productTableColumns}
          dataSource={reversedProducts} // Use the data from the hook
          loading={loading}
          rowKey="_id" // Set the row key to ensure unique rows
        />
      )}
    </div>
  );
};

export default CustomTable;
