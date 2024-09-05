import UserForm from "./UserForm";
// import { ProductUserContext } from "../../../contexts/ProductUserContext";
// import { useContext } from "react";
// import UsersContent from "./UsersContent";

const CreateUser = () => {
  // const { showUsers, setShowUsers } = useContext(ProductUserContext);
  const handleClick = () => {
    alert("Has been submitted");
    // setShowUsers(false);
  };
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-lg">
        <UserForm handleClick={handleClick} />
        
      </div>
    </div>
    // <div>
    //   {showUsers ? (
    //     <UsersContent />
    //   ) : (
    //     <div className="flex items-center justify-center min-h-screen">
    //       <div className="w-full max-w-lg">
    //         <UserForm handleClick={handleClick} />
    //       </div>
    //     </div>
    //   )}
    // </div>
  );
};

export default CreateUser;
