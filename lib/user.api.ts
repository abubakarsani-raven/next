import { PostsType, UsersTypes } from "@/types/types";
import axios from "axios";

const getAllUsers = async (): Promise<UsersTypes[]> => {
  //   const res = await fetch(`https://jsonplaceholder.typicode.com/users`);

  const res = await axios.get(`https://jsonplaceholder.typicode.com/users`);
  return res.data;
};

const getUser = async (id: string): Promise<UsersTypes> => {
  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  return res.data;
};

const getUserPost = async (id: string): Promise<PostsType> => {
  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  return res.data;
};

export { getAllUsers, getUser, getUserPost };
