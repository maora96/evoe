import { useQuery } from "react-query";
import { getUserClient, getUsersClient } from "../api/evoe/client";

export const useGetUsers = () => {
  return useQuery("users", async () => getUsersClient(), {
    refetchOnWindowFocus: false,
  });
};

export const useGetUser = (id: string) => {
  return useQuery("users", async () => getUserClient(id), {
    refetchOnWindowFocus: false,
  });
};
