// src/hooks/useFetchProducts.js

import { useState, useEffect } from "react";
import { axiosInstance } from "../api/axiosinstance.config";
import { endpoints } from "../api/endpoints";

const useFetchUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      setError(null);

      try {
        const token = sessionStorage.getItem("***");
        const response = await axiosInstance.get(endpoints.get.users, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        // console.log("hehehhe", response);

        // Set updated users
        setUsers(response.data.data);
        // console.log(response.data.data);
      } catch (error) {
        setError(error);
        // console.log("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    // Initial fetch
    fetchUsers();
  }, []);

  return { users, loading, error, setUsers };
};

export default useFetchUsers;
