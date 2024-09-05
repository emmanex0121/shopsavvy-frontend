import React, { useState } from "react";
import { Collapse, Select } from "antd";
import PasswordUpdateForm from "./PasswordUpdateForm";

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const CustomCollapse = () => {
  const [expandIconPosition] = useState("end");

  const onChange = (key) => {
    console.log(key);
  };

  const items = [
    {
      key: "1",
      label: "Change Your Password",
      children: <div>{<PasswordUpdateForm />}</div>,
      //   extra: genExtra(),
    },
    {
      key: "2",
      label: "Update Profile",
      children: <div>{text}</div>,
      //   extra: genExtra(),
    },
    // {
    //   key: "3",
    //   label: "This is panel header 3",
    //   children: <div>{text}</div>,
    //   //   extra: genExtra(),
    // },
  ];
  return (
    <>
      <Collapse
        className="mx-8"
        defaultActiveKey={["0"]}
        onChange={onChange}
        expandIconPosition={expandIconPosition}
        items={items}
      />
      {/* <br /> */}
      {/* <span>Expand Icon Position: </span>
      <Select
        value={expandIconPosition}
        style={{
          margin: "0 8px",
        }}
        onChange={onPositionChange}>
        <Option value="start">start</Option>
        <Option value="end">end</Option>
      </Select> */}
    </>
  );
};
export default CustomCollapse;
