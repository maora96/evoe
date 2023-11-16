import { useQuery } from "react-query";
import { getAvatarClient } from "../api/ui-avatars/client";

export const useGetAvatar = (name: string) => {
  return useQuery("avatar", async () => getAvatarClient(name), {
    refetchOnWindowFocus: false,
  });
};
