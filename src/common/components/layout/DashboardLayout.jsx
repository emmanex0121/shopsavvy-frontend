import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useContext,
} from "react";
import PlatformPerformance from "./PlatformPerfomance";
import SettingsContent from "./SettingsContent";
import UsersContent from "./UsersContent";
import ProductsContent from "./ProductsContent";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook

import PropTypes from "prop-types"; // Import PropTypes
import "../../../index.css";
import {
  MenuFoldOutlined,
  AppstoreOutlined,
  LogoutOutlined,
  SlidersOutlined,
  TeamOutlined,
  ShopOutlined,
  BellOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme, Grid, Flex } from "antd";
import CircleDot from "../ui/CircleDot"; // Import your CircleDot component
import SavyyLogo from "../ui/SavyyLogo";
import SearchBar from "../ui/Searchbar";
import DashProfileInfo from "../ui/DashProfileInfo";
import { ProductUserContext } from "../../../contexts/ProductUserContext";

const { Header, Content, Footer, Sider } = Layout;
const { useBreakpoint } = Grid;

const items = [
  { key: "1", icon: <AppstoreOutlined />, label: "Dashboard" },
  { key: "2", icon: <ShopOutlined />, label: "Products" },
  { key: "3", icon: <TeamOutlined />, label: "Users" },
  { key: "4", icon: <SlidersOutlined />, label: "Settings" },
  { key: "5", icon: <LogoutOutlined />, label: "Logout" },
];

const DashboardLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKey, setSelectedKey] = useState("1"); // Track selected menu item
  const sidebarRef = useRef(null);
  const screens = useBreakpoint();
  const isLargeScreen = screens.lg;
  const navigate = useNavigate(); // Initialize useNavigate

  const { setShowCreateProduct, setShowUsers } = useContext(ProductUserContext);

  const actions = {
    1: () => {},
    2: () => {
      setShowCreateProduct(false);
    },
    3: () => {
      setShowUsers(true);
    },
    4: () => {},
    5: () => {
      sessionStorage.removeItem("***");
      sessionStorage.clear();
      navigate("/");
    },
  };

  const {
    token: { borderRadiusLG },
  } = theme.useToken();

  useEffect(() => {
    if (isLargeScreen) {
      setCollapsed(false);
    }
  }, [isLargeScreen]);

  // Memoized function to handle clicks outside the sidebar
  const handleClickOutside = useCallback(
    (event) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        !isLargeScreen &&
        !collapsed
      ) {
        setCollapsed(true);
      }
    },
    [collapsed, isLargeScreen]
  );

  const handleMenuClick = (e) => {
    setSelectedKey(e.key); // Update selected key on menu click
    if (!isLargeScreen) {
      setCollapsed(true);
    }
  };

  const renderContent = () => {
    switch (selectedKey) {
      case "1":
        return <PlatformPerformance />;
      case "2":
        return <ProductsContent />;
      case "3":
        return <UsersContent />;
      case "4":
        return <SettingsContent />;
      default:
        return null;
    }
  };

  useEffect(() => {
    if (!isLargeScreen && !collapsed) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [collapsed, isLargeScreen, handleClickOutside]);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        ref={sidebarRef}
        collapsed={collapsed}
        onCollapse={(collapsed) => setCollapsed(collapsed)}
        breakpoint="lg"
        collapsedWidth={0}
        width={250}
        style={{
          position: "fixed",
          height: "100vh",
          zIndex: 1000,
          background: "#FFFFFF",
          top: 0,
          left: 0,
          transition: "transform 0.2s ease",
          transform: collapsed ? "translateX(-100%)" : "translateX(0)",
        }}
        trigger={null}>
        <div className="w-full flex items-center justify-center">
          <SavyyLogo />
        </div>
        <div className="flex justify-center mb-5">
          <DashProfileInfo />
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          selectedKeys={[selectedKey]} // Use selectedKey to determine current item
          onClick={handleMenuClick}
          style={{
            marginTop: "60px",
            background: "#FFFFFF",
            // overflow: "visible",
          }}>
          {items.map((item, index) => (
            <React.Fragment key={item.key}>
              <Menu.Item
                key={item.key}
                icon={item.icon}
                className={`menu-item ${
                  selectedKey === item.key ? "menu-item-selected" : ""
                }`}>
                <div
                  className="relative flex items-center justify-between w-full"
                  onClick={actions[item.key]}>
                  <span>{item.label}</span>
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                    {selectedKey === item.key && (
                      <CircleDot className="circle-dot" />
                    )}
                  </div>
                </div>
              </Menu.Item>
              {index === 2 && (
                <div className="w-4/5 mx-auto h-[1px] bg-gray-500 my-2" />
              )}
            </React.Fragment>
          ))}
        </Menu>
      </Sider>

      <Layout
        style={{
          marginLeft: isLargeScreen ? 250 : 0,
          transition: "margin-left 0.2s ease",
          position: "relative",
          background: "#ECECEC",
        }}>
        <Header
          style={{
            padding: 0,
            paddingInline: "1rem",
            background: "#ECECEC",
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}>
          <div className="flex items-center w-full">
            {!isLargeScreen && collapsed && (
              <Button
                className="mr-2"
                icon={<MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)}
                type="text"
                style={{ zIndex: 1100 }}
              />
            )}
            <div className="w-full max-w-[1000px]">
              <SearchBar />
            </div>
          </div>
          <BellOutlined className="text-2xl ml-2" />
        </Header>

        <Content
          style={{
            margin: "0 16px 0",
            padding: 0,
            minHeight: 360,
            // background: "#ECECEC",
            borderRadius: borderRadiusLG,
            position: "relative",
            zIndex: 1,
          }}>
          {/* {children} */}
          {renderContent()}
        </Content>

        <Footer
          style={{
            textAlign: "center",
            background: "#ECECEC",
          }}>
          {/* Ant Design ©{new Date().getFullYear()} Created by Ant UED */}
        </Footer>
      </Layout>
    </Layout>
  );
};

// Add PropTypes to validate the props
DashboardLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DashboardLayout;
