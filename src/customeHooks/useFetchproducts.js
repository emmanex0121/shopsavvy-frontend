// src/hooks/useFetchProducts.js
import { useState, useEffect } from "react";
import { axiosInstance } from "../api/axiosinstance.config";
import { endpoints } from "../api/endpoints";

const useFetchProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);

      try {
        const token = sessionStorage.getItem("***");
        const response = await axiosInstance.get(endpoints.get.products, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        // console.log("hehehhe");

        // Extract the base URL from axiosInstance and remove `/api` if necessary
        const backendUrl = axiosInstance.defaults.baseURL.replace("/api", "");
        // console.log(backendUrl); // Debug: Check the backend URL

        // Update image URLs to include the full path
        const updatedProducts = response.data.data.map((product) => ({
          ...product,
          images: product.images.map((image) => `${backendUrl}${image}`),
        }));

        // Set updated products with correct image URLs
        setProducts(updatedProducts);
        // console.log(updatedProducts);
      } catch (err) {
        setError(err);
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    };

    // initial fetch
    fetchProducts();
  }, []);

  return { products, loading, error, setProducts };
};

export default useFetchProducts;
