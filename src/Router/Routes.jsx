import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Root from "../Layout/Root";
import AllReviews from "../pages/AllReviews/AllReviews";

import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import Error404 from "../pages/Error404";
import AddReview from "../pages/AddReview/AddReview";
import PrivateRoute from "./PrivateRoute";
import MyReviews from "../pages/MyReviews/MyReviews";
import ReviewDetails from "../pages/ReviewDetails/ReviewDetails";
import EditReview from "../pages/UpdateReview/EditReview";
import Loading from "../Component/Loading";
import Favorites from "../pages/MyFavorite/Favorites";



export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Error404></Error404>,
    children: [
      {
        index: true,
        Component: Home,
        loader:()=>fetch('https://local-food-lover-reviews-server.vercel.app/latest-review'),
        hydrateFallbackElement:<Loading></Loading>
      },
      {
        path: '/allreviews',
        Component: AllReviews,
        loader: () => fetch('https://local-food-lover-reviews-server.vercel.app/allreviews'),
        hydrateFallbackElement:<Loading></Loading>
      },
      {
        path: '/review-details/:id',
        element: <PrivateRoute>
          <ReviewDetails></ReviewDetails>
        </PrivateRoute>
      },
      {
        path: '/add-review',
        element: (<PrivateRoute>
          <AddReview></AddReview>
        </PrivateRoute>)
      },
      {
        path: '/my-reviews',
        element: (<PrivateRoute>
          <MyReviews></MyReviews>
        </PrivateRoute>)
      },
      {
        path: '/my-favorites',
        element: (<PrivateRoute>
          <Favorites></Favorites>
        </PrivateRoute>)
      },
      {
        path: '/update-review/:id',
        element: <PrivateRoute>
          <EditReview></EditReview>
        </PrivateRoute>,
        loader: ({ params }) => fetch(`https://local-food-lover-reviews-server.vercel.app/allreviews/${params.id}`),
        hydrateFallbackElement:<Loading></Loading>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      }
    ]
  },
]);