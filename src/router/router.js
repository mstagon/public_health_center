import { createBrowserRouter } from "react-router-dom";
import React, { lazy, Suspense } from "react";
import Loading from "../components/Loading";
import Layout from "../layout/Layout";
const Home = lazy(() => import("../page/home/Home"));

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "",
        element: (
          <Suspense fallback={<Loading />}>
            <Home />
          </Suspense>
        ),
      },
    ],
  },
]);
export default router;
