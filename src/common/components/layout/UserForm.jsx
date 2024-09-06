import "../../../index.css";
import { Form, Input } from "antd";
import CustomButton from "../ui/CustomButton";
import PropTypes from "prop-types";
import useAddUser from "../../../customeHooks/useAddUser";
import { useState, useContext } from "react";
import { ProductUserContext } from "../../../contexts/ProductUserContext";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
};
/* eslint-enable no-template-curly-in-string */

const UserForm = () => {
  // const [form] = Form.useForm();
  const { showUsers, setShowUsers } = useContext(ProductUserContext);
  const [submitLoading, setSubmitLoading] = useState(false);
  const { addUser, loading } = useAddUser();

  // console.log(showUsers);

  const onFinish = async (values) => {
    // Structure the data to match the backend
    // console.log(values);
    const userData = {
      firstName: values.user.firstName,
      lastName: values.user.lastName,
      userName: values.user.userName, // This should be an array of image URLs
      email: values.user.email,
      password: values.user.password,
    };
    // console.log(userData);

    setSubmitLoading(true);
    try {
      await addUser(userData);
      setTimeout(() => {
        setShowUsers(true);
      }, 2000);
    } catch (error) {
      console.error("Error adding user:", error);
    } finally {
      setSubmitLoading(false); // Reset loading state after submission
    }
  };

  return (
    <Form
      {...layout}
      name="addUserForm"
      onFinish={onFinish}
      style={{
        maxWidth: 600,
        background: "#FBFBFB",
        padding: "1rem 3rem",
        borderRadius: "0.7rem",
      }}
      validateMessages={validateMessages}>
      <h1 className="text-center text-2xl font-bold mb-10">
        Create a new user
      </h1>
      <Form.Item
        name={["user", "firstName"]}
        label="First Name"
        rules={[
          {
            required: true,
          },
        ]}>
        <Input className="hover:border-customPurple" placeholder="John" />
      </Form.Item>
      <Form.Item
        name={["user", "lastName"]}
        label="Last Name"
        rules={[
          {
            required: true,
          },
        ]}>
        <Input className="hover:border-customPurple" placeholder="Doe" />
      </Form.Item>
      <Form.Item
        name={["user", "userName"]}
        label="User Name"
        rules={[
          {
            required: true,
          },
        ]}>
        <Input
          className="hover:border-customPurple"
          placeholder="Uusername24"
        />
      </Form.Item>
      <Form.Item
        name={["user", "email"]}
        label="Email"
        rules={[
          {
            type: "email",
            required: true,
          },
        ]}>
        <Input
          className="hover:border-customPurple"
          placeholder="john.doe@example.com"
          type="email"
        />
      </Form.Item>
      <Form.Item
        name={["user", "password"]}
        label="Password"
        rules={[
          {
            required: true,
            type: "password",
          },
        ]}>
        <Input
          className="hover:border-customPurple"
          placeholder="*****************"
          type="password"
        />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          ...layout.wrapperCol,
          offset: 8,
        }}>
        {/* <Button
        className="bg-customPurple !hover:bg-customPurpleLight"
        type="primary"
        htmlType="submit">
        Submit
      </Button> */}
        <CustomButton value="Submit" loading={submitLoading} />
      </Form.Item>
    </Form>
  );
};

UserForm.propTypes = {
  handleClick: PropTypes.func,
};
export default UserForm;
