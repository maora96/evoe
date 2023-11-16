import bcrypt from "bcrypt";
import { usersRepository } from "../repositories/usersRepository";
import { User } from "../entities/User";

interface CreateUserDTO {
  name: string;
  username: string;
  password: string;
}

interface EditUserDTO {
  name: string;
  username: string;
  cpf: string;
  birthdate: string;
  bio: string;
  twitter: string;
  instagram: string;
  facebook: string;
  tiktok: string;
  website: string;
  profile_pic: string;
}

export class UsersService {
  async create(user: CreateUserDTO) {
    const { name, username, password } = user;

    if (!name || !username || !password) {
      return {
        status: 400,
        message: "Todos os campos são requeridos.",
      };
    }

    try {
      const user = await usersRepository.findOneBy({ username });

      if (user) {
        return {
          status: 500,
          message: "Usuário já existente.",
        };
      }

      const salt = await bcrypt.genSalt();
      const hashedPassword = await bcrypt.hash(password, salt);

      const newUser = usersRepository.create({
        name,
        username,
        password: hashedPassword,
      });

      await usersRepository.save(newUser);

      return {
        status: 200,
        message: {
          id: newUser.id,
          name: newUser.name,
          username: newUser.username,
        },
      };
    } catch (error) {
      return {
        status: 500,
        message: "Internal server error.",
      };
    }
  }

  async edit(id: string, userDTO: EditUserDTO) {
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
    } = userDTO;
    try {
      const user = await usersRepository.findOneBy({ id: id });

      if (!user) {
        return {
          status: 500,
          message: "Usuário não encontrado.",
        };
      }

      user.name = name ?? user.name;
      user.username = username ?? user.username;
      user.cpf = cpf ?? user.cpf;
      user.birthdate = new Date(birthdate) ?? user.birthdate;
      user.bio = bio ?? user.bio;
      user.twitter = twitter ?? user.twitter;
      user.instagram = instagram ?? user.instagram;
      user.facebook = facebook ?? user.facebook;
      user.tiktok = tiktok ?? user.tiktok;
      user.website = website ?? user.website;
      user.profile_pic = profile_pic ?? user.profile_pic;

      await usersRepository.save(user);

      return {
        status: 201,
        message: {
          id: user.id,
          name: user.name,
          username: user.username,
        },
      };
    } catch (error) {
      return {
        status: 500,
        message: "Internal server error.",
      };
    }
  }

  async findAll() {
    try {
      const users = await usersRepository.find();

      return users.map((user: User) => {
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
          avatar: user.profile_pic,
        };
      });
    } catch (error) {
      console.log(error);
    }
  }

  async delete(id: string) {
    try {
      const user = await usersRepository.findOneBy({ id: id });

      if (!user) {
        return {
          status: 500,
          message: "Usuário não encontrado.",
        };
      }

      await usersRepository.delete(user);

      return {
        status: 200,
        message: "Usuário deletado",
      };
    } catch (error) {
      return {
        status: 500,
        message: "Internal server error.",
      };
    }
  }

  async findOne(id: string) {
    try {
      const user = await usersRepository.findOneBy({ id: id });

      if (!user) {
        return {
          status: 500,
          message: "Usuário não encontrado.",
        };
      }

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
        avatar: user.profile_pic,
      };
    } catch (error) {
      return {
        status: 500,
        message: "Internal server error.",
      };
    }
  }
}
