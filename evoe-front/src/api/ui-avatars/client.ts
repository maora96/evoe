import { api } from ".";

export const getAvatarClient = async (name: string) => {
  return api.get(`?background=000&color=FFF&name=${name}`);
};
