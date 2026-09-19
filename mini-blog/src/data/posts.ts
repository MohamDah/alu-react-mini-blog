import type { Post } from "../types/Post";

export const posts: Post[] = [
  {
    id: 1,
    title: "Getting Started with TypeScript",
    author: "Amina Cisse",
    content: "TypeScript adds static typing to JavaScript, making your code more predictable and easier to refactor...",
    date: new Date().toISOString(), // "today" -> triggers "New!" badge
  },
  {
    id: 2,
    title: "Why Vite is Fast",
    author: "John Doe",
    content: "Vite uses native ES modules during development, skipping the bundling step entirely...",
    date: "2026-09-01T10:00:00.000Z",
  },
  {
    id: 3,
    title: "Understanding React Hooks",
    author: "Amina Cisse",
    content: "Hooks let you use state and other React features without writing a class...",
    date: "2026-08-20T10:00:00.000Z",
  },
];