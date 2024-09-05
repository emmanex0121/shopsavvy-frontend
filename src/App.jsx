import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { App as AntdApp } from "antd";
import Login from "./views/Login/Login";
import Register from "./views/Register/Register";
import Dashboard from "./views/Dashboard/Dashboard";
import NotFound from "./views/NotFound/NotFound";
import ProductUserProvider from "./contexts/ProductUserContext";
import ProtectedRoutes from "./ProtectedRoutes";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      Component: Login,
    },
    {
      path: "/register",
      Component: Register,
    },
    {
      path: "/dashboard",
      Component: () => {
        return (
          <ProtectedRoutes>
            <ProductUserProvider>
              <Dashboard />
            </ProductUserProvider>
          </ProtectedRoutes>
        );
      },
    },
    {
      path: "*",
      Component: NotFound,
    },
  ]);

  return (
    <AntdApp>
      <RouterProvider router={router} />;
    </AntdApp>
  );
};

export default App;
