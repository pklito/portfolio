# Paulo Khayat — Portfolio

A personal portfolio built with React, TypeScript, Vite, Tailwind CSS, React
Router, and a small editable WebGL shader. The site is organized so that most
content changes happen in one data file rather than inside page layouts.

## Quick start

The Figma Make preview server starts automatically. If you run this project
elsewhere:

```bash
pnpm install
pnpm dev
```

Create a production build with:

```bash
pnpm run build
```

## The most important file: `src/data/site.ts`

Start here when personalizing the portfolio. This file stores:

- `profile`: your name, role, introduction, email, and short-about bullets.
- `currentProject`: the featured “currently working on” section on Home.
- `homepageProjects`: the three friendly cards linking directly to GitHub.
- `categoryInfo`: titles, introductions, and skills for each project field.
- `projects`: all graphics, robotics, and games projects.

For example, changing the current project does not require editing a component:

```ts
export const currentProject = {
  status: "In progress · Fall 2025",
  title: "My New Project",
  category: "Robotics",
  description: "A short explanation of what I am building.",
  nextMilestone: "Next: test the first hardware prototype",
  image: "/images/my-project.jpg",
};
```

Project images can be remote URLs or local files. For local images, put the
file in `public/images/` and reference it as `/images/filename.jpg`.

## Project structure

```text
src/
├── app/
│   ├── App.tsx                 # Mounts React Router
│   └── routes.tsx              # Maps URLs to page components
├── components/
│   ├── Arrow.tsx               # Shared arrow icon
│   ├── Footer.tsx              # Shared footer
│   ├── Header.tsx              # Name and five navigation links
│   ├── ProjectCard.tsx         # Reusable project presentation
│   └── VoronoiShader.tsx       # WebGL setup and editable fragment shader
├── data/
│   └── site.ts                 # Personal text and project data
├── pages/
│   ├── AboutPage.tsx           # Detailed biography
│   ├── HomePage.tsx            # Hero, current project, short about
│   ├── NotFoundPage.tsx        # 404 page
│   └── ProjectsPage.tsx        # Shared layout for all project categories
├── index.css                   # Tailwind import and theme tokens only
└── main.tsx                    # React entry point
```

## How routing works

`src/app/routes.tsx` uses React Router. Each route connects a URL to a
component:

```tsx
export const router = createBrowserRouter([
  { path: "/", Component: HomePage },
  { path: "/about", Component: AboutPage },
  { path: "/graphics", element: <ProjectsPage category="graphics" /> },
]);
```

Graphics, robotics, and games use the same `ProjectsPage` component. The
`category` property tells the component which content to read from
`src/data/site.ts`. This is a useful React pattern: reuse one layout and pass it
different data with **props**.

Use React Router's `Link` or `NavLink` for internal pages instead of a plain
HTML link:

```tsx
<Link to="/about">About</Link>
```

`NavLink` is used in the header because it can detect the current page and
style the active navigation item.

## How the React components work

A React component is a TypeScript function that returns JSX:

```tsx
function Greeting({ name }: { name: string }) {
  return <p>Hello, {name}</p>;
}
```

Curly braces switch from JSX into JavaScript. The project pages use `.map()` to
turn arrays from `site.ts` into repeated cards:

```tsx
projects.map((project) => (
  <ProjectCard key={project.title} project={project} />
));
```

The `key` lets React track each item efficiently.

## Styling with Tailwind CSS

Nearly all styles are utility classes directly in JSX:

```tsx
<h1 className="text-6xl font-medium tracking-tight">
  Project title
</h1>
```

Responsive prefixes apply a class at a breakpoint:

```tsx
<div className="grid grid-cols-1 md:grid-cols-2">
```

This uses one column by default and two columns on medium screens and larger.

`src/index.css` defines reusable Tailwind theme names such as `ink`, `paper`,
`acid`, and `violet`. That is why classes like `bg-ink` and `text-paper` work.
Change those theme values to recolor the entire site.

## Editing the WebGL shader

Open `src/components/VoronoiShader.tsx`. The visual code is the exported
`FRAGMENT_SHADER` string:

```ts
export const FRAGMENT_SHADER = `
  // GLSL code lives here
`;
```

Useful values available to the shader:

- `u_resolution`: canvas width and height in pixels.
- `u_mouse`: pointer position over the section.
- `u_time`: continuously increasing time in seconds.

The rest of the component:

1. Gets a WebGL context from the canvas.
2. Compiles the vertex and fragment shaders.
3. Creates a rectangle covering the canvas.
4. Updates resolution, pointer, and time uniforms every frame.
5. Draws the shader and cleans resources up when React removes the component.

Shader compiler errors appear in the browser console. When experimenting, make
small changes and check the console if the canvas becomes blank.

## Adding a new project

Add an object to the appropriate array in `src/data/site.ts`:

```ts
{
  title: "Project Name",
  year: "2025",
  tools: "C++ · OpenGL",
  description: "What the project explores and why it matters.",
  image: "/images/project-name.jpg",
}
```

Set `featured: true` to make that card span the full project grid width.

## Adding another page

1. Create `src/pages/NewPage.tsx` and export its component as default.
2. Import it in `src/app/routes.tsx`.
3. Add `{ path: "/new-page", Component: NewPage }` to the router.
4. Add a `NavLink` in `src/components/Header.tsx` if it belongs in navigation.

## What to personalize next

- Replace `hello@example.com` and social URLs with your real links.
- Replace placeholder project titles, descriptions, and images.
- Expand the About page with your university, research area, and experience.
- Update the current project whenever your focus changes.
- Add project-detail routes when you have longer case studies to share.
