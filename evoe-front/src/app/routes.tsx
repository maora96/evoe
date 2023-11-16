import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import User from "../pages/user";
import Example from "../pages/example";
import EditExample from "../pages/edit-example";
import Edit from "../pages/edit";

export function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/perfil/:id" element={<User />} />
      <Route path="/exemplo" element={<Example />} />
      <Route path="/exemplo/editar" element={<EditExample />} />
      <Route path="/editar/:id" element={<Edit />} />
    </Routes>
  );
}
