import { memo } from "react";
import { posts } from "../data/posts";
import Post from "./Post";

const PostList = () => {
  return (
    <section>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </section>
  );
};

export default memo(PostList);