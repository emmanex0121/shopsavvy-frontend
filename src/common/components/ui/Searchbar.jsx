import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
import "../../../index.css";
const SearchBar = () => (
  <Input
    className="custom-input"
    size="large"
    placeholder="Search"
    prefix={<SearchOutlined />}
  />
);
export default SearchBar;
