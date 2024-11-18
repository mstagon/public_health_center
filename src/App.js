import React, { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./router/router.js";
import Loading from "./components/Loading.jsx";

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
