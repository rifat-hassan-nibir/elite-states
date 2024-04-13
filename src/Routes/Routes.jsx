import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ErrorPage from "../Pages/ErrorPage";
import EstateDetails from "../Pages/EstateDetails";
import Blogs from "../Pages/Blogs";
import BlogDetails from "../Components/HomePage/BlogDetails";
import UpdateProfile from "../Pages/UpdateProfile";
import ProtectedRoute from "./ProtectedRoute";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/estates-data.json"),
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
        loader: () => fetch("/blogs-data.json"),
      },
      {
        path: "/blogs/:id",
        element: <BlogDetails></BlogDetails>,
        loader: () => fetch("/blogs-data.json"),
      },
      {
        path: "/update-profile",
        element: (
          <ProtectedRoute>
            <UpdateProfile></UpdateProfile>
          </ProtectedRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/estate-details/:id",
        loader: () => fetch("/estates-data.json"),
        element: (
          <ProtectedRoute>
            <EstateDetails></EstateDetails>
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

export default Routes;
