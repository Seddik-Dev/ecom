import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";


function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        {/* <Route path="/" element={<Home />} /> */}
      </Route>
    </Routes>
  );
}

export default AppRoutes;