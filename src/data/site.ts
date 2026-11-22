export type ProjectCategory = "graphics" | "robotics" | "games";
import jamsPh from "../assets/projects/jams.png"
import fireBallGif from "../assets/projects/fireball.gif";
export type Project = {
  title: string;
  year: string;
  tools: string;
  description: string;
  image: string;
  featured?: boolean;
  url?: string;
  category: string;
};

// This file is the portfolio's content hub. Edit text and projects here first.
export const profile = {
  name: "Paulo Khayat",
  role: "Computer graphics master's student",
  intro:
    "",
  email: "paulokhayat@gmail.com",
};

// Keep this object short: it drives the “Currently working on” card on Home.
export const currentProject = {
  status: "October 2026",
  title: "This website! (&HW)",
  category: "Web dev",
  description:
    "Learning React+Vite in order to make a better portfolio. I put something together quickly in order to not bottleneck, but I want to spend the time to really personalize this site to my best efforts.",
  nextMilestone: "",
  image:
    "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?auto=format&fit=crop&w=1800&q=85",
};

export const categoryColors: Record<string, string> = {
  "Computer vision": "bg-blue-500/20 border-blue-500/40",
  "Graphics": "bg-purple-500/20 border-purple-500/40",
  "Game dev": "bg-green-500/20 border-green-500/40",
  "Tools": "bg-amber-500/20 border-amber-500/40",
};

export const defaultCategoryColor =
  "bg-gray-500/20 border-gray-500/40";
// These three cards appear directly on the Home page and link to GitHub.
export const homepageProjects = [
  {
    title: "Cube Image Recognition",
    category: "Computer vision",
    description:
      "An image-processing project that detects and recognizes cube faces from photographs.",
    image:
      "https://raw.githubusercontent.com/pklito/cube-image-detection/refs/heads/main/docs/solution.png",
    url: "https://github.com/pklito/cube-image-detection",
  },
  {
    title: "ARMP Paired Pathing",
    category: "Robotics",
    description:
      "Two robot arms coordinate their paths while one balances a ball and the other observes it with a camera.",
    image: "https://i.postimg.cc/SKjdwjpW/image.png",
    url: "https://github.com/pklito/ARMP-Project/tree/main",
  },
  {
    title: "Twitter Bookmark Sorter",
    category: "Web · UX",
    description:
      "A browser tool for tagging, filtering, organizing, and locally backing up large Twitter bookmark collections.",
    image:
      "https://github.com/user-attachments/assets/f066910a-94c5-4d92-8736-53f07eb5855f",
    url: "https://github.com/pklito/x-storer",
  },
  {
    title: "Game jams",
    category: "Gamedev",
    description:
      "A collection of some game jam games I made under time pressure!\nThese ones are all playable in browser.",
    image:
      jamsPh,
    url: "https://itch.io/c/8391890/games-ive-made",
  },
  {
    title: "Firewall Shader",
    category: "Shaders",
    description:
      "Shader homework to come up with and create a stylized fireball",
    image:
      fireBallGif,
  },
];
