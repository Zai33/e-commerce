import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import MyCart from "../pages/MyCart";
import ProductDetail from "../pages/ProductDetail";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "my-cart",
        element: <MyCart />,
      },
      {
        path: "product-detail/:productId",
        element: <ProductDetail />,
      },
    ],
  },
]);

export default router;
