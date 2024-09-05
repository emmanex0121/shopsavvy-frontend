// import React from "react";
import "../../../index.css";
import { Select } from "antd";
const DropDownSelect = () => (
  <Select
    style={{
      height: "1.5rem",
      background: "#D3C4FC",
      cursor: "pointer",
      borderRadius: "1rem",
    }}
    // dropdownClassName="custom-select-dropdown"
    showSearch
    placeholder="This Month"
    filterOption={(input, option) =>
      (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
    }
    options={[
      {
        value: "1",
        label: "Week 1",
      },
      {
        value: "2",
        label: "Week 2",
      },
      {
        value: "3",
        label: "Week 3",
      },
      {
        value: "4",
        label: "Week 4",
      },
    ]}
  />
);
export default DropDownSelect;
