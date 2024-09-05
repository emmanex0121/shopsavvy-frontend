import React from "react";
import PropTypes from "prop-types";
import { Form, Input } from "antd";
import CustomButton from "./CustomButton";
// import CustomButton from "./CustomButton";
const MyFormItemContext = React.createContext([]);
function toArr(str) {
  return Array.isArray(str) ? str : [str];
}

const MyFormItem = ({ name, ...props }) => {
  const prefixPath = React.useContext(MyFormItemContext);
  const concatName =
    name !== undefined ? [...prefixPath, ...toArr(name)] : undefined;
  return <Form.Item name={concatName} {...props} />;
};
const handleClick = () => {
  alert("Password Updated");
};
const PasswordUpdateForm = () => {
  const onFinish = (value) => {
    console.log(value);
  };
  return (
    <Form
      className="p-6 bg-customWhite mx-8"
      name="form_item_path"
      layout="vertical"
      onFinish={onFinish}>
      <MyFormItem name="password" label="Old Password">
        <Input type="password" placeholder="***********************" />
      </MyFormItem>
      <MyFormItem name="password1" label="New Password">
        <Input type="password" placeholder="***********************" />
      </MyFormItem>
      <MyFormItem name="password2" label="New Password">
        <Input type="password" placeholder="***********************" />
      </MyFormItem>
      <div className="flex items-center justify-center mt-5">
        <CustomButton value="Update" onClick={handleClick} />
      </div>
    </Form>
  );
};

PasswordUpdateForm.propTypes = {
  handleClick: PropTypes.func,
  name: PropTypes.string,
};
export default PasswordUpdateForm;
