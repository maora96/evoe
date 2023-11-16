import { api } from ".";

export const getUserClient = async (id: string) => {
  return api.get(`user/${id}`);
};

export const getUsersClient = async () => {
  return api.get("user");
};

export const editProfileClient = async (data: User) => {
  return api.patch(`/user/${data.id}`, {
    ...data,
  });
};

export const createProfileClient = async (data: any) => {
  return api.post("/user", {
    ...data,
  });
};
