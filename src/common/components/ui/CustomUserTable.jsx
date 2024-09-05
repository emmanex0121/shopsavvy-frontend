import { useState } from "react";
import { Table, Button, Space } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import "../../../index.css";
import useFetchUsers from "../../../customeHooks/useFetchUsers";
import { toTitleCase } from "../../../utils/formatters";
import "../../../index.css";
// import CustomButton from "./CustomButton";

const columns = [
  {
    title: "First Name",
    dataIndex: "firstName",
    render: (text) => <a className="text-link">{toTitleCase(text)}</a>,
  },
  {
    title: "Last Name",
    dataIndex: "lastName",
    render: (text) => <a className="text-link">{toTitleCase(text)}</a>,
  },
  {
    title: "Email",
    dataIndex: "email",
    render: (text) => (
      <a href={`mailto:${text}`} className="email-link">
        {text}
      </a>
    ),
  },
  {
    title: "Username",
    dataIndex: "userName",
  },
];

// const data = [
//   {
//     key: "1",
//     firstName: "John",
//     lastName: "Doe",
//     email: "john.doe@email.com",
//     username: "j.micheal121",
//     // createdDate: "2024-08-18T10:20:30Z",
//   },
//   {
//     key: "2",
//     firstName: "Green",
//     price: 42,
//     lastName: "Kheed",
//     email: "john.doe@email.com",
//     username: "j.micheal121",
//   },
//   {
//     key: "3",
//     firstName: "Black",
//     lastName: "Bullion",
//     email: "john.doe@email.com",
//     username: "j.micheal121",
//   },
//   {
//     key: "4",
//     firstName: "Michael",
//     lastName: "Bullion",
//     email: "john.doe@email.com",
//     username: "j.micheal121",
//   },
//   {
//     key: "5",
//     firstName: "Michael",
//     lastName: "Bullion",
//     email: "john.doe@email.com",
//     username: "j.micheal121",
//   },
//   {
//     key: "6",
//     firstName: "Michael",
//     lastName: "Bullion",
//     email: "john.doe@email.com",
//     username: "j.micheal121",
//   },
//   {
//     key: "7",
//     firstName: "Michael",
//     lastName: "Bullion",
//     email: "john.doe@email.com",
//     username: "j.micheal121",
//   },
// ];

const CustomUserTable = () => {
  const { users, loading, error, setUsers } = useFetchUsers();

  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  // Handlers for edit and delete actions
  const handleEdit = () => {
    console.log("Edit clicked");
    alert("Edit button clicked!");
  };

  const handleDelete = () => {
    console.log("Delete clicked");
    alert("Delete button clicked!");
  };

  // Row selection configuration
  const rowSelection = {
    selectedRowKeys,
    onChange: (newSelectedRowKeys) => {
      setSelectedRowKeys(newSelectedRowKeys); // Update selected row keys
    },
  };

  return (
    <div>
      <div className="flex flex-wrap items-center gap-5 justify-between mb-4">
        <Space>
          <Button
            type="primary"
            className="custom-button"
            icon={<EditOutlined />}
            onClick={handleEdit}
            disabled={selectedRowKeys.length === 0} // Disable only when no rows are selected
          >
            Edit
          </Button>
          <Button
            type="danger"
            className="custom-button"
            icon={<DeleteOutlined />}
            onClick={handleDelete}
            disabled={selectedRowKeys.length === 0} // Disable only when no rows are selected
          >
            Delete
          </Button>
        </Space>
        {/* <div>
          <CustomButton value="Add a new user" onClick={handleAddUser} />
        </div> */}
      </div>

      <Table
        className="custom-checkbox"
        rowSelection={{
          type: "checkbox", // Force checkbox type
          ...rowSelection,
        }}
        columns={columns}
        dataSource={users}
        rowKey="_id"
      />
    </div>
  );
};

export default CustomUserTable;
