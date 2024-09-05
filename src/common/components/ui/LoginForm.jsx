import { Checkbox, Form, Input } from "antd";
import { Link } from "react-router-dom";
import ButtonLogin from "./ButtonLogin";
import PropTypes from "prop-types";
import "../../../index.css";
import useRegister from "../../../customeHooks/useCustomAuth";

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const LoginForm = ({ bgColor = "bg-customGrey" }) => {
  const { onAuth, loading } = useRegister();

  return (
    <Form
      layout="verical"
      labelCol={{ span: 24 }} // Full width for label
      wrapperCol={{ span: 24 }} // Full width for input
      className={`w-full max-w-lg ${bgColor} p-4 rounded-2xl`}
      style={{
        maxWidth: 600,
      }}
      onFinish={onAuth}
      onFinishFailed={onFinishFailed}>
      <h1 className="text-center text-2xl font-bold mb-10">Welcome Back</h1>
      <p className="text-center mb-10">Please enter your details to sign in</p>

      <Form.Item
        className=""
        name="email"
        label="Email"
        rules={[
          {
            required: true,
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
        className="flex-1 min-w-[200px]"
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}>
        {/* <label className="block text-sm font-bold text-gray-700">
          User Name <span className="text-customOrange">*</span>
        </label> */}
        <Input.Password
          className={`mt-1 ${bgColor} border-black`}
          placeholder="*****************"
        />
      </Form.Item>

      <div className="flex justify-between items-center mt-10 mb-6">
        <Checkbox>Remember me</Checkbox>
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
          btnText="Sign In"
        />
      </Form.Item>

      <div className="text-center">
        <p>
          Don&apos;t have an account yet?{" "}
          <Link className="text-blue-500 hover:text-blue-700" to="/register">
            Sign Up
          </Link>
        </p>
      </div>
    </Form>
  );
};

LoginForm.propTypes = {
  bgColor: PropTypes.string,
};
export default LoginForm;
