import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import User from "../pages/user";

export function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user/:id" element={<User />} />
    </Routes>
  );
}
