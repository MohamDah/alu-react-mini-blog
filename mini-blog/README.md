## Mini Blog - Documentation and Setup Guide

### Setup & Run
1. Clone the repo: `git clone <repo-url>`
2. `cd mini-blog`
3. `npm install`
4. `npm run dev` (Vite dev server, default: http://localhost:5173)
5. `npm run build` to produce a production build; `npm run dev` to serve it locally.

### Component Design Choices
- **Header, PostList, Post, App**: all implemented as functional components using hooks,
  consistent with modern React practices and simpler state/lifecycle handling via `useEffect`.
- Chose functional over class components because hooks (useEffect) cover lifecycle needs
  without the boilerplate of `class` syntax, and the codebase stays consistent.

### Styling
- External CSS (`src/styles/Header.css`, `Post.css`) for the Header and badge.
- Inline styles (via `style={{ ... }}`) for per-post conditional coloring in `Post.tsx`.
- Conditional styling: posts by "Amina Cisse" get a highlighted background; posts
  published within the last 24 hours show a "New!" badge.

### Optimization & HOC
- `PostList` wrapped in `React.memo` to avoid unnecessary re-renders.
- Each list item uses a stable unique `key` (`post.id`).
- `withLogger` HOC logs mount/unmount to the console; applied to `Header`.

### Challenges & Reflection
I haven't extensively used Higher Order Components before, so it was a little tough figuring out a how to implement it well. I tried to research a good way to do it and I went with this and went with the current method.

I also had an issue with the React IDE rules because I wasn't technically exporting a component (in this component `Header.tsx`). I had to add a comment to turn off that rule for that one file.

### External Libraries
- None beyond Vite/React/TypeScript defaults