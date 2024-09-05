import { useState } from "react";
import { axiosInstance } from "../api/axiosinstance.config";
import { endpoints } from "../api/endpoints";

const useDeleteProduct = () => {
  const [deleting, setDeleting] = useState(false);
  const [deleteError, setDeleteError] = useState(null);

  const deleteProduct = async (productId, onSuccess) => {
    setDeleting(true);
    setDeleteError(null);
    try {
      const token = sessionStorage.getItem("***");
      await axiosInstance.delete(`${endpoints.del.products}/${productId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      onSuccess(); // Callback to reload products or handle UI updates
    } catch (err) {
      setDeleteError(
        err.message || "An error occurred while deleting the product."
      );
    } finally {
      setDeleting(false);
    }
  };

  return { deleteProduct, deleting, deleteError };
};

export default useDeleteProduct;
