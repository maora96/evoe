import express from "express";
import { AppDataSource } from "./data-source";
import routes from "./routes";
const cors = require("cors");

AppDataSource.initialize().then(() => {
  const app = express();

  app.use(express.json());
  app.use(cors());
  app.use(routes);

  return app.listen(process.env.PORT, () =>
    console.log("listening on port " + process.env.PORT)
  );
});
