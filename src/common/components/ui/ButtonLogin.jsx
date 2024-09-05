import PropTypes from "prop-types";
import { Button } from "antd";

const ButtonLogin = ({
  btnText = "Button",
  btnColor = "bg-customPurple",
  btnTextColor = "",
  loading = false,
}) => {
  return (
    <div>
      <Button
        loading={loading}
        type="primary"
        htmlType="submit"
        className={`w-full ${btnColor} ${btnTextColor}`}>
        {btnText}
      </Button>
    </div>
  );
};

// Defining Proptypes
ButtonLogin.propTypes = {
  btnText: PropTypes.string,
  btnColor: PropTypes.string,
  btnTextColor: PropTypes.string,
  loading: PropTypes.bool,
};

export default ButtonLogin;
