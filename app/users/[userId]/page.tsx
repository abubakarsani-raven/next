import { getUser, getUserPost } from "@/lib/user.api";
import { UsersTypes } from "@/types/types";
import { Suspense } from "react";
import UserPosts from "./components/UserPosts";
import type { Metadata, ResolvingMetadata } from "next";

type Params = {
  params: { userId: string };
};

export async function generateMetadata(
  { params: { userId } }: Params,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const user: Promise<UsersTypes> = getUser(userId);
  const users: UsersTypes = await user;

  return {
    title: users.name,
    description: `This is the page of ${users.name}`,
    openGraph: {
      images: ["/vercel.svg"],
    },
  };
}

const UserSinglePage = async ({ params: { userId } }: Params) => {
  const user: Promise<UsersTypes> = getUser(userId);
  const userPostsData = getUserPost(userId);
  //   const [users, userPost] = await Promise.all([user, userPostsData]);
  const users = await user;

  return (
    <div>
      <h2>{users.name}</h2>
      <br />
      <Suspense fallback={<h2>Loading....</h2>}>
        <UserPosts promise={userPostsData} />
      </Suspense>
    </div>
  );
};

export default UserSinglePage;
