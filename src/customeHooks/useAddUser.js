import { useState } from "react";
import { axiosInstance } from "../api/axiosinstance.config";
import { endpoints } from "../api/endpoints";
import useNotification from "./useNotification";

const useAddUser = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { onNotify } = useNotification();

  const addUser = async (userData) => {
    // console.log(userData);
    setLoading(true);
    setError(null);

    try {
      const token = sessionStorage.getItem("***");
      const response = await axiosInstance.post(
        `${endpoints.add.users}`,
        userData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      onNotify("success", "Successful", "User added successfully");
      // console.log("User added successfully:", response.data);
      //   console.log(response.data);
    } catch (error) {
      setError(error);
      if (error.response) {
        console.error("Error adding user:", error.response.data);
        onNotify(
          "error",
          "Failed",
          error.response.data.message || "Unable to add user"
        );
      } else {
        console.error("Error adding user:", error.message);
        onNotify("error", "Failed", "Unable to add user");
      }
    } finally {
      setLoading(false);
    }
  };

  return { addUser, loading, error };
};

export default useAddUser;
