import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const ProductUserContext = createContext();

const ProductUserProvider = ({ children }) => {
  const [showCreateProduct, setShowCreateProduct] = useState(false);
  const [showUsers, setShowUsers] = useState(false);

  return (
    <ProductUserContext.Provider
      value={{
        showCreateProduct,
        setShowCreateProduct,
        showUsers,
        setShowUsers,
      }}>
      {children}
    </ProductUserContext.Provider>
  );
};

ProductUserProvider.propTypes = {
  children: PropTypes.node,
};
export default ProductUserProvider;
