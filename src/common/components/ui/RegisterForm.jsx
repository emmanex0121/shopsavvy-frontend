import { Checkbox, Form, Input } from "antd";
import { Link } from "react-router-dom";
import ButtonLogin from "./ButtonLogin";
import "../../../index.css";
import PropTypes from "prop-types";
import useRegister from "../../../customeHooks/useCustomAuth";

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const RegisterForm = ({ bgColor = "bg-customGrey" }) => {
  const { onAuth, loading } = useRegister();

  return (
    <Form
      className={`w-full max-w-lg ${bgColor} p-4 rounded-2xl`}
      layout="vertical"
      labelCol={{ span: 24 }} // Full width for label
      wrapperCol={{ span: 24 }} // Full width for input
      style={{
        maxWidth: 600,
      }}
      onFinish={onAuth}
      onFinishFailed={onFinishFailed}>
      <h1 className="text-center text-2xl font-bold mb-10">Welcome Back</h1>
      <p className="text-center mb-10">Please enter your details to sign in</p>

      <div className="flex flex-wrap gap-x-6">
        <Form.Item
          className="flex-1 min-w-[200px]"
          name="firstName"
          label="FirstName"
          rules={[
            {
              required: true,
              message: "First Name required!",
            },
          ]}>
          <Input
            className={`mt-1 ${bgColor} border-black`}
            placeholder="First Name"
          />
        </Form.Item>

        <Form.Item
          className="flex-1 min-w-[200px]"
          name="lastName"
          label="Last Name"
          rules={[
            {
              required: true,
              message: "Last Name Required!",
            },
          ]}>
          <Input
            className={`mt-1 ${bgColor} border-black`}
            placeholder="Last Name"
          />
        </Form.Item>
      </div>

      <Form.Item
        className=""
        name="userName"
        label="Username"
        rules={[
          {
            required: true,
            message: "User Name required!",
          },
        ]}>
        {/* <label className="block text-sm font-bold text-gray-700">
          User Name <span className="text-customOrange">*</span>
        </label> */}
        <Input className={`mt-1 ${bgColor} border-black`} placeholder="" />
      </Form.Item>

      <Form.Item
        className=""
        name="email"
        label="Email"
        rules={[
          {
            required: true,
            // type: "email",
            message: "Email is required!",
          },
          {
            type: "email",
            message: "Invalid email Address",
          },
        ]}>
        <Input
          className={`mt-1 ${bgColor} border-black`}
          placeholder="email@example.com"
        />
      </Form.Item>

      <Form.Item
        // label="Password"
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: "Password required!",
          },
        ]}>
        <Input.Password
          className={`mt-1 ${bgColor} border-black`}
          placeholder="*****************"
        />
      </Form.Item>

      <div className="flex justify-between items-center mt-10 mb-6">
        {/* <Form.Item name="remember" valuePropName="checked" noStyle> */}
        <Checkbox>Remember me</Checkbox>
        {/* </Form.Item> */}
        <a className="text-blue-500 hover:text-blue-700" href="#">
          Forgot Password?
        </a>
      </div>

      <Form.Item
        wrLoginFormerCol={{
          offset: 8,
          span: 16,
        }}>
        <ButtonLogin
          loading={loading}
          btnColor="bg-customPurple"
          btnText="Sign Up"
        />
      </Form.Item>

      <div className="text-center">
        <p>
          Already have an account?{" "}
          <Link className="text-blue-500 hover:text-blue-700" to="/">
            Sign In
          </Link>
        </p>
      </div>
    </Form>
  );
};

RegisterForm.propTypes = {
  bgColor: PropTypes.string,
};

export default RegisterForm;
