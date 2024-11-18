import { createBrowserRouter } from "react-router-dom";
import React, { lazy } from "react";

import Layout from "../layout/Layout";

const Home = lazy(() => import("../page/home/Home"));
const CheckIn = lazy(() => import("../page/checkin/CheckIn"));
const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "checkIn",
        element: <CheckIn />,
      },
      {
        path: "consultation",
      },
    ],
  },
]);
export default router;
