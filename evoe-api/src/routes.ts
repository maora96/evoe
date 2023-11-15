import { Router } from "express";
import { UsersController } from "./controllers/UsersController";

const routes = Router();

routes.post("/user", new UsersController().create);

routes.get("/user", new UsersController().findAll);

routes.delete("/user/:id", new UsersController().delete);

routes.get("/user/:id", new UsersController().findOne);

routes.patch("/user/:id", new UsersController().edit);

export default routes;
