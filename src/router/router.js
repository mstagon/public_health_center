import { createBrowserRouter } from "react-router-dom";
import React, { lazy } from "react";

import Layout from "../layout/Layout";

const Inquiry = lazy(() => import("../page/reservation/Inquiry"));
const CheckInThreeStep = lazy(() => import("../page/checkin/CheckInThreeStep"));
const CheckInTwoStep = lazy(() => import("../page/checkin/CheckInTwoStep"));
const ReservationDetails = lazy(() =>
  import("../page/reservation/ReservationDetails")
);
const Home = lazy(() => import("../page/home/Home"));
const CheckIn = lazy(() => import("../page/checkin/CheckInOneStep"));
const Reservation = lazy(() => import("../page/reservation/Reservation"));
const Appointment = lazy(() => import("../page/reservation/Appointment"));
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
        path: "checkInTwoStep",
        element: <CheckInTwoStep />,
      },
      {
        path: "checkInThreeStep",
        element: <CheckInThreeStep />,
      },
      {
        path: "consultation",
      },
      {
        path: "acceptance",
      },
      {
        path: "healthProgram",
      },
      {
        path: "floorInformation",
      },
      {
        path: "reservation",
        element: <Reservation />,
      },
      {
        path: "inquiry",
        element: <Inquiry />,
      },
      {
        path: "reservationDetails",
        element: <ReservationDetails />,
      },

      {
        path: "appointment",
        element: <Appointment />,
      },
    ],
  },
]);
export default router;
