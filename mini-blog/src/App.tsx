import Header from "./components/Header"
import Post from "./components/Post"
import type { Post as PostType } from "./types/Post"

function App() {
  return (
    <>
      <Header />
      <Post post={{id: 1, author: "auth", content: "some content", date: "", title: "amogus"} satisfies PostType} />
    </>
  )
}

export default App
