// src/hooks/useAddProduct.js
import { useState } from "react";
import { axiosInstance } from "../api/axiosinstance.config";
import { endpoints } from "../api/endpoints";
import useNotification from "./useNotification";
// import { Navigate } from "react-router-dom";

const useAddProduct = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { onNotify } = useNotification();

  const token = sessionStorage.getItem("***");
  const addProduct = async (productData) => {
    setLoading(true);
    setError(null);

    try {
      //   console.log(getToken());
      const response = await axiosInstance.post(
        `${endpoints.add.products}`,
        productData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // console.log("muhehehe");
      //   Handle success response if needed
      onNotify("success", "Successful", "Product added successfully");

      // console.log("Product added successfully:", response.data);
      // console.log(response.data);
    } catch (err) {
      // Handle error response
      onNotify("error", "Failed", "Failed to add products");
      console.error("Failed to add product:", err);
      setError(err);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { addProduct, loading, error };
};

export default useAddProduct;
