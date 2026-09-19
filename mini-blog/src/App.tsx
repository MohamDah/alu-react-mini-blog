import Header from "./components/Header";
import PostList from "./components/PostList";

function App() {
  return (
    <>
      <Header />
      <main style={{ padding: "1rem 2rem" }}>
        <PostList />
      </main>
    </>
  );
}

export default App;