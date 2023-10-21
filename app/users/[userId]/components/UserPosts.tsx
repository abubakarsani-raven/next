import { PostsType } from "@/types/types";

type Props = {
  promise: Promise<PostsType>;
};

const UserPosts = async (props: Props) => {
  const posts: PostsType = await props.promise;

  return (
    <div>
      <h2>{posts.title}</h2>
      <br />
      <p>{posts.body}</p>
    </div>
  );
};

export default UserPosts;
