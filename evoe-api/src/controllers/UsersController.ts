import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { usersRepository } from "../repositories/usersRepository";
import { User } from "../entities/User";

export class UsersController {
  async encryptPassword(password: string) {
    const salt = await bcrypt.genSalt();
    return bcrypt.hash(password, salt);
  }

  async create(req: Request, res: Response) {
    const { name, username, password } = req.body;

    if (!name || !username || !password) {
      res.status(400).json({ message: "Todos os campos são requeridos." });
    }

    try {
      const user = await usersRepository.findOneBy({ username });

      if (user) {
        return res.status(500).json({ message: "Usuário já existente." });
      }

      const salt = await bcrypt.genSalt();
      const hashedPassword = await bcrypt.hash(password, salt);

      const newUser = usersRepository.create({
        name,
        username,
        password: hashedPassword,
      });

      await usersRepository.save(newUser);

      return res.status(201).json({
        id: newUser.id,
        name: newUser.name,
        username: newUser.username,
      });
    } catch (error) {
      return res.status(500).json({ message: "Internal server error." });
    }
  }

  async edit(req: Request, res: Response) {
    const { id } = req.params;
    const {
      name,
      username,
      cpf,
      birthdate,
      bio,
      twitter,
      instagram,
      facebook,
      tiktok,
      website,
      profile_pic,
    } = req.body;
    try {
      const user = await usersRepository.findOneBy({ id: id });

      if (!user) {
        return res.status(404).json({ message: "Usuário não encontrado." });
      }

      user.name = name ?? user.name;
      user.username = username ?? user.username;
      user.cpf = cpf ?? user.cpf;
      user.birthdate = birthdate ?? user.birthdate;
      user.bio = bio ?? user.bio;
      user.twitter = twitter ?? user.twitter;
      user.instagram = instagram ?? user.instagram;
      user.facebook = facebook ?? user.facebook;
      user.tiktok = tiktok ?? user.tiktok;
      user.website = website ?? user.website;
      user.profile_pic = profile_pic ?? user.profile_pic;

      await usersRepository.save(user);

      return res.status(201).json({
        id: user.id,
        name: user.name,
        username: user.username,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal server error." });
    }
  }

  async findAll(req: Request, res: Response) {
    try {
      const users = await usersRepository.find();

      return res.status(200).json({
        users: users.map((user: User) => {
          return {
            id: user.id,
            name: user.name,
            username: user.username,
            cpf: user.cpf,
            birthdate: user.birthdate,
            bio: user.bio,
            twitter: user.twitter,
            instagram: user.instagram,
            facebook: user.facebook,
            tiktok: user.tiktok,
            website: user.website,
          };
        }),
      });
    } catch (error) {
      return res.status(500).json({ message: "Internal server error." });
    }
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const user = await usersRepository.findOneBy({ id: id });

      if (!user) {
        return res.status(404).json({ message: "Usuário não encontrado." });
      }

      await usersRepository.delete(user);

      return res.status(200).json({ message: "Usuário deletado" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal server error." });
    }
  }

  async findOne(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const user = await usersRepository.findOneBy({ id: id });

      if (!user) {
        return res.status(404).json({ message: "Usuário não encontrado." });
      }

      return res.status(200).json({
        id: user.id,
        name: user.name,
        username: user.username,
        cpf: user.cpf,
        birthdate: user.birthdate,
        bio: user.bio,
        twitter: user.twitter,
        instagram: user.instagram,
        facebook: user.facebook,
        tiktok: user.tiktok,
        website: user.website,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal server error." });
    }
  }
}
