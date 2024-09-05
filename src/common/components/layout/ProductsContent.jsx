import { useContext } from "react";
import { ProductUserContext } from "../../../contexts/ProductUserContext";
import CustomButton from "../ui/CustomButton";
import CustomTable from "../ui/CustomTable";
import CreateProduct from "./CreateProduct";

const ProductsContent = () => {
  const { showCreateProduct, setShowCreateProduct } =
    useContext(ProductUserContext);

  // Handler to show CreateProduct when the button is clicked
  const handleClick = () => {
    setShowCreateProduct(true);
    // alert("Input button clicked!");
  };
  return (
    <div>
      {showCreateProduct ? (
        // Render CreateProduct component when showCreateProduct is true
        <CreateProduct />
      ) : (
        // Render the original content when showCreateProduct is false
        <div>
          <div className="flex flex-wrap items-center justify-between gap-6 mb-10 mt-6">
            <h1 className="text-3xl font-bold">Products</h1>
            <CustomButton value="Create a product" onClick={handleClick} />
          </div>
          <div>
            <CustomTable />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductsContent;
