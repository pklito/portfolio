export type ProjectCategory = "graphics" | "robotics" | "games";

export type Project = {
  title: string;
  year: string;
  tools: string;
  description: string;
  image: string;
  featured?: boolean;
};

// This file is the portfolio's content hub. Edit text and projects here first.
export const profile = {
  name: "Paulo Khayat",
  role: "Computer graphics master’s student",
  intro:
    "I build visual systems at the intersection of graphics, robotics, and games.",
  email: "hello@example.com",
  aboutPoints: [
    "Master’s student focused on computer graphics",
    "Interested in real-time rendering and physical simulation",
    "Building interactive work across graphics, robotics, and games",
    "Always learning through prototypes and visual experiments",
  ],
};

// Keep this object short: it drives the “Currently working on” card on Home.
export const currentProject = {
  status: "In progress · Spring 2025",
  title: "Interactive Soft-Body Playground",
  category: "Graphics + simulation",
  description:
    "A real-time sandbox for sculpting and interacting with deformable objects. I’m currently refining GPU performance and the interaction model.",
  nextMilestone: "Next: stable collisions and a public web demo",
  image:
    "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?auto=format&fit=crop&w=1800&q=85",
};

export const categoryInfo: Record<
  ProjectCategory,
  { label: string; title: string; intro: string; skills: string[] }
> = {
  graphics: {
    label: "01 / Graphics",
    title: "Images built from code.",
    intro:
      "Rendering, simulation, shaders, and procedural systems that explore how computation can create expressive visual behavior.",
    skills: ["OpenGL / GLSL", "C++", "Houdini", "Blender"],
  },
  robotics: {
    label: "02 / Robotics",
    title: "Systems that sense and move.",
    intro:
      "Experiments connecting perception, planning, and physical interaction—with an emphasis on understandable, visual tools.",
    skills: ["Python / C++", "ROS", "Computer vision", "Rapid prototyping"],
  },
  games: {
    label: "03 / Games",
    title: "Playable ideas and worlds.",
    intro:
      "Small games and interactive prototypes where mechanics, atmosphere, and technical systems develop together.",
    skills: ["Unity", "Unreal", "Gameplay systems", "Technical art"],
  },
};

export const projects: Record<ProjectCategory, Project[]> = {
  graphics: [
    {
      title: "Soft Bodies",
      year: "2025",
      tools: "C++ · OpenGL · Simulation",
      description:
        "A real-time deformation system exploring tactile interactions between soft objects.",
      image:
        "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?auto=format&fit=crop&w=1800&q=85",
      featured: true,
    },
    {
      title: "Chromatic Flow",
      year: "2024",
      tools: "GLSL · Fluid dynamics",
      description:
        "GPU-driven fluid experiments visualizing turbulence as an evolving field of color.",
      image:
        "https://images.unsplash.com/photo-1620421680010-0766ff230392?auto=format&fit=crop&w=1200&q=85",
    },
    {
      title: "Synthetic Matter",
      year: "2024",
      tools: "Houdini · Procedural systems",
      description:
        "A study in procedural form, material behavior, and controlled computational chance.",
      image:
        "https://images.unsplash.com/photo-1671519821564-ced7e41ee7ae?auto=format&fit=crop&w=1200&q=85",
    },
  ],
  robotics: [
    {
      title: "Visual Robot Lab",
      year: "2025",
      tools: "ROS · Python · Control",
      description:
        "A visual interface for testing robot-arm trajectories and inspecting control states.",
      image:
        "https://images.unsplash.com/photo-1784821856280-401b76b03266?auto=format&fit=crop&w=1800&q=85",
      featured: true,
    },
    {
      title: "Scene Perception",
      year: "2024",
      tools: "Python · Computer vision",
      description:
        "Experiments in turning camera observations into simple, useful spatial representations.",
      image:
        "https://images.unsplash.com/photo-1671519821564-ced7e41ee7ae?auto=format&fit=crop&w=1200&q=85",
    },
    {
      title: "Motion Studies",
      year: "2024",
      tools: "C++ · Planning",
      description:
        "A collection of small motion-planning studies focused on readable robot behavior.",
      image:
        "https://images.unsplash.com/photo-1690127137880-1ad0871a83bd?auto=format&fit=crop&w=1200&q=85",
    },
  ],
  games: [
    {
      title: "Lumen",
      year: "2025",
      tools: "Unity · C# · Technical art",
      description:
        "An atmospheric exploration prototype where light is both a navigation tool and a mechanic.",
      image:
        "https://images.unsplash.com/photo-1768141728185-c14bdfe90f91?auto=format&fit=crop&w=1800&q=85",
      featured: true,
    },
    {
      title: "Color Passage",
      year: "2024",
      tools: "Unreal · Blueprint",
      description:
        "A movement study built around shifting architecture and color-driven wayfinding.",
      image:
        "https://images.unsplash.com/photo-1761403889267-d84d181db828?auto=format&fit=crop&w=1200&q=85",
    },
    {
      title: "Signal Garden",
      year: "2023",
      tools: "Unity · Generative audio",
      description:
        "A small systemic game about growing a landscape through sound and rhythm.",
      image:
        "https://images.unsplash.com/photo-1632520997139-08f352d9ec53?auto=format&fit=crop&w=1200&q=85",
    },
  ],
};
