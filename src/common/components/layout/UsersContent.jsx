import CustomUserTable from "../ui/CustomUserTable";
import CustomButton from "../ui/CustomButton";
import { useContext } from "react";
import { ProductUserContext } from "../../../contexts/ProductUserContext";
import CreateUser from "./CreateUser";

const UsersContent = () => {
  const { showUsers, setShowUsers } = useContext(ProductUserContext);

  // What happend when the add user button is clicked
  const handleAddUser = () => {
    setShowUsers(false);
    // alert("Added user has been clicked");
  };

  return (
    <div className="">
      {showUsers ? (
        // Render CreateProduct component when showCreateProduct is true
        <div>
          <div className="flex gap-6 items-center justify-between mt-6 mb-10">
            <h1 className="text-3xl font-bold">Users</h1>
            <CustomButton value="Add a new user" onClick={handleAddUser} />
          </div>
          <CustomUserTable />
        </div>
      ) : (
        <CreateUser />
      )}
    </div>
  );
};

export default UsersContent;
