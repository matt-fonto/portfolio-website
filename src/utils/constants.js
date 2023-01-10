import { AiFillYoutube } from "react-icons/ai";
import { BsCheckCircle, BsSpotify, BsBootstrap } from "react-icons/bs";
import {
  SiNetflix,
  SiRedux,
  SiReactrouter,
  SiExpress,
  SiNpm,
  SiPostman,
  SiAndroidstudio,
  SiNotion,
  SiMiro,
  SiZapier,
  SiClickup,
} from "react-icons/si";
import { MdLocalGroceryStore } from "react-icons/md";
import {
  DiReact,
  DiCss3,
  DiPython,
  DiHtml5,
  DiNodejs,
  DiGit,
  DiTrello,
} from "react-icons/di";
import {
  SiJavascript,
  SiMaterialui,
  SiNetlify,
  SiFirebase,
  SiTypescript,
  SiNextdotjs,
} from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io";
import {
  TbBrandNextjs,
  TbBrandReactNative,
  TbBrandTailwind,
} from "react-icons/tb";
import YoutubeImage from "./resources/images/youtube-clone.png";
import NetflixImage from "./resources/images/netflix-clone.png";
import SpotifyImage from "./resources/images/spotify-clone.png";
import { FiFigma } from "react-icons/fi";

// navlinks
export const navlinks = [
  {
    num: 1,
    name: "Projects",
    to: "projects",
  },
  {
    num: 2,
    name: "Skills",
    to: "skills",
  },
  {
    num: 3,
    name: "Experience",
    to: "skills",
  },
  {
    num: 4,
    name: "About",
    to: "about",
  },
  {
    num: 5,
    name: "Contact",
    to: "contact",
  },
];

export const bigProjects = [
  {
    id: "1",
    title: "Youtube Clone",
    icon: <AiFillYoutube />,
    image: YoutubeImage,
    description:
      "Developed a full-featured YouTube clone, including a dynamic homepage with categorization, search functionality, and recommendations based on the current videos. Implemented in-app video playback for a seamless user experience.",
    projectLink: "https://enchanting-sopapillas-14f13d.netlify.app/",
    gitHubLink: "https://github.com/softEngMatthew/youtube-clone",
    techUsed: [
      "React",
      "Axios",
      "MUI5",
      "React Router",
      "Netlify",
      "Git",
      "GitHub",
    ],

    // techUsed: "React, Axios, MUI5, React Router, Netlify, Git, GitHub",
  },
  {
    id: "2",
    title: "Spotify Clone",
    icon: <BsSpotify />,
    image: SpotifyImage,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil dolores tempora doloremque? Laboriosam soluta delectus voluptates architecto veritatis est nobis nihil dolorem deleniti quaerat quidem iste commodi dolorum sunt ex error ipsa, beatae perferendis atque qui placeat! Dicta veniam eveniet voluptatum nesciunt sapiente quam, blanditiis eaque, a aliquid voluptatibus dolores.",
    projectLink: "in progress",
    gitHubLink: "in progress",
    techUsed: [
      "React",
      "Axios",
      "MUI5",
      "React Router",
      "Netlify",
      "Git",
      "GitHub",
    ],
  },
  {
    id: "3",
    title: "Netflix Clone",
    icon: <SiNetflix />,
    image: NetflixImage,
    description:
      "A Netflix clone featuring dynamic movie and TV show listings, a main header with popular content, and rows for Netflix originals, trending shows, top-rated options, and various categories. Utilized an API to fetch and display data in real time.",
    projectLink: "https://netflix-clone-8da19.web.app/",
    gitHubLink: "https://github.com/softEngMatthew/netflix-clone",
    techUsed: [
      "React",
      "Axios",
      "MUI5",
      "React Router",
      "Netlify",
      "Git",
      "GitHub",
    ],
  },
];

export const smallProjects = [
  {
    id: "1",
    title: "Redux Cart",
    icon: <SiRedux />,
    description:
      "A cart created with the objective of practicing Redux Toolkit.",
    projectLink: "https://sage-dieffenbachia-472fb0.netlify.app/",
    gitHubLink: "https://github.com/softEngMatthew/redux-cart-project",
    techUsed: ["React", "Axios", "MUI5", "React Router"],
  },
  {
    id: "2",
    title: "Grocery List",
    icon: <MdLocalGroceryStore />,
    description:
      "A grocery list built using React. The user can add to, edit, and delete items from the grocery list. The app stores data locally, so that the user can retrieve it after.",
    gitHubLink: "https://github.com/softEngMatthew/grocery-list",
    techUsed: ["React", "Axios", "MUI5", "React Router"],
  },
  {
    id: "3",
    title: "To-Do App",
    icon: <BsCheckCircle />,
    description:
      "A pretty straightforward To-Do app created with React Native and Expo.",
    gitHubLink: "https://github.com/softEngMatthew/to-do-app-react-native",
    techUsed: ["React", "Axios", "MUI5", "React Router"],
  },
];

export const languageSkills = [
  {
    id: "py",
    icon: <DiPython />,
    name: "Python",
  },
  {
    id: "ts",
    icon: <SiTypescript />,
    name: "TypeScript",
  },
  {
    id: "js",
    icon: <SiJavascript />,
    name: "JavaScript (ES6)",
  },

  {
    id: "html",
    icon: <DiHtml5 />,
    name: "HTML",
  },
  {
    id: "css",
    icon: <DiCss3 />,
    name: "CSS",
  },
];

export const librarySkills = [
  {
    id: "re",
    icon: <DiReact />,
    name: "React",
  },
  {
    id: "no",
    icon: <DiNodejs />,
    name: "Node.js",
  },
  {
    id: "ex",
    icon: <SiExpress />,
    name: "Express.js",
  },
  {
    id: "rena",
    icon: <TbBrandReactNative />,
    name: "React Native",
  },
  {
    id: "ne",
    icon: <SiNextdotjs />,
    name: "Next.js",
  },
  {
    id: "red",
    icon: <SiRedux />,
    name: "Redux",
  },
  {
    id: "rou",
    icon: <SiReactrouter />,
    name: "React Router",
  },
  {
    id: "tail",
    icon: <TbBrandTailwind />,
    name: "Tailwind",
  },
  {
    id: "boot",
    icon: <BsBootstrap />,
    name: "Boostrap",
  },
  {
    id: "mui",
    icon: <SiMaterialui />,
    name: "MUI5",
  },
];

export const toolsSkills = [
  {
    id: "1",
    icon: <DiGit />,
    name: "Git",
  },
  {
    id: "2",
    icon: <SiNpm />,
    name: "NPM",
  },
  {
    id: "3",
    icon: <SiFirebase />,
    name: "Firebase",
  },
  {
    id: "4",
    icon: <SiNetlify />,
    name: "Netlify",
  },
  {
    id: "5",
    icon: <SiPostman />,
    name: "Postman",
  },
  {
    id: "6",
    icon: <SiAndroidstudio />,
    name: "Android Studio",
  },
  {
    id: "7",
    icon: <SiNotion />,
    name: "Notion",
  },
  {
    id: "8",
    icon: <DiTrello />,
    name: "Trello",
  },
  {
    id: "9",
    icon: <SiMiro />,
    name: "Miro",
  },
  {
    id: "10",
    icon: <FiFigma />,
    name: "Figma",
  },
  {
    id: "11",
    icon: <SiZapier />,
    name: "Zapier",
  },
  {
    id: "12",
    icon: <SiClickup />,
    name: "ClickUp",
  },
];
