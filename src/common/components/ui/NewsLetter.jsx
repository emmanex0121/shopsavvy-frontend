import React from "react";
import PropTypes from "prop-types";
import { Button, Form, Input } from "antd";
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
const NewsLetter = () => {
  const onFinish = (value) => {
    console.log(value);
  };
  return (
    <Form
      className="p-6 bg-customWhite mx-8"
      name="form_item_path"
      layout="vertical"
      onFinish={onFinish}>
      <h1 className="text-center text-2xl font-bold">NewsLetter</h1>
      <MyFormItem name="name" label="Name">
        <Input />
      </MyFormItem>
      <MyFormItem name="email" label="Email">
        <Input type="email" />
      </MyFormItem>
    </Form>
  );
};

NewsLetter.propTypes = {
  handleClick: PropTypes.func,
  name: PropTypes.string,
};
export default NewsLetter;
