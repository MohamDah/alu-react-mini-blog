import type { Post as PostType } from "../types/Post";
import "../styles/Post.css";

interface PostProps {
  post: PostType;
}

const isNew = (dateStr: string) => {
  const diffMs = Date.now() - new Date(dateStr).getTime();
  return diffMs < 24 * 60 * 60 * 1000;
};

const Post = ({ post }: PostProps) => {
  const highlight = post.author === "Amina Cisse";

  const cardStyle: React.CSSProperties = {
    border: "1px solid #e2e8f0",
    borderRadius: "8px",
    padding: "1rem",
    marginBottom: "1rem",
    backgroundColor: highlight ? "#fef9c3" : "#ffffff",
  };

  return (
    <article style={cardStyle}>
      <h2>
        {post.title} {isNew(post.date) && <span className="badge">New!</span>}
      </h2>
      <p><strong>{post.author}</strong> - {new Date(post.date).toLocaleDateString()}</p>
      <p>{post.content.split(" ").slice(0, 12).join(" ")}...</p>
    </article>
  );
};

export default Post;