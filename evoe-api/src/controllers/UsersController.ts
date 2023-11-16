import { Request, Response } from "express";
import { UsersService } from "../services/UsersService";

export class UsersController {
  async create(req: Request, res: Response) {
    try {
      const response = await new UsersService().create(req.body);
      res.status(response.status).json({ message: response.message });
    } catch (error) {
      res.status(500).json({ message: "Internal service error." });
    }
  }

  async edit(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const response = await new UsersService().edit(id, req.body);
      res.status(response.status).json({ message: response.message });
    } catch (error) {
      res.status(500).json({ message: "Internal service error." });
    }
  }

  async findAll(req: Request, res: Response) {
    try {
      const users = await new UsersService().findAll();

      return res.status(200).json({
        users,
      });
    } catch (error) {
      return res.status(500).json({ message: "Internal server error." });
    }
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const response = await new UsersService().delete(id);
      res.status(response.status).json({ message: response.message });
    } catch (error) {
      return res.status(500).json({ message: "Internal server error." });
    }
  }

  async findOne(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const response = await new UsersService().findOne(id);
      res.status(200).json({ ...response });
    } catch (error) {
      return res.status(500).json({ message: "Internal server error." });
    }
  }
}
