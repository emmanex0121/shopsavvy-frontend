import PropTypes from "prop-types";
import { Button } from "antd";
// import "../../../index.css"

const CustomButton = ({ value, loading, onClick }) => {
  return (
    // <input
    //   type="submit"
    //   value={value}
    //   onClick={onClick}
    //   style={{
    //     padding: "0.1rem 1.5rem",
    //     backgroundColor: "#7D54F3",
    //     color: "#fff",
    //     border: "none",
    //     borderRadius: "0.5rem",
    //     cursor: "pointer",
    //     fontSize: "1rem",
    //   }}
    // />

    <Button
      htmlType="submit"
      loading={loading}
      type="primary"
      onClick={onClick}
      className="bg-customPurple">
      {value}
    </Button>
  );
};

CustomButton.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func,
  loading: PropTypes.bool,
};

export default CustomButton;
