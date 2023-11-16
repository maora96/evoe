import { api } from ".";

export const getUserClient = async (id: string) => {
  return api.get(`user/${id}`);
};

export const getUsersClient = async () => {
  return api.get("user");
};
