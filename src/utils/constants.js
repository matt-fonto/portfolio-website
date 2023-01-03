import {
  AiFillYoutube,
  AiFillCheckCircle,
  AiFillStar,
  AiOutlineStar,
  AiFillHtml5,
} from "react-icons/ai";
import {
  BsCheckCircle,
  BsSpotify,
  BsFillBootstrapFill,
  BsBootstrap,
} from "react-icons/bs";
import { SiNetflix, SiRedux, SiReactrouter } from "react-icons/si";
import { MdLocalGroceryStore } from "react-icons/md";
import { DiReact, DiCss3 } from "react-icons/di";
import {
  SiTailwindcss,
  SiJavascript,
  SiMaterialui,
  SiNetlify,
  SiFirebase,
  SiTypescript,
  SiNextdotjs,
} from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io";
import { TbBrandNextjs } from "react-icons/tb";
import YoutubeImage from "./resources/images/youtube-clone.png";
import NetflixImage from "./resources/images/netflix-clone.png";
import SpotifyImage from "./resources/images/spotify-clone.png";

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
    techUsed: "React, Axios, MUI5, React Router, Netlify, Git, GitHub",
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
    techUsed: "React, Axios, MUI5, React Router, Netlify, Git, GitHub",
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
  },
  {
    id: "2",
    title: "Grocery List",
    icon: <MdLocalGroceryStore />,
    description:
      "A grocery list built using React. The user can add to, edit, and delete items from the grocery list. The app stores data locally, so that the user can retrieve it after.",
    gitHubLink: "https://github.com/softEngMatthew/grocery-list",
  },
  {
    id: "3",
    title: "To-Do App",
    icon: <BsCheckCircle />,
    description:
      "A pretty straightforward To-Do app created with React Native and Expo.",
    gitHubLink: "https://github.com/softEngMatthew/to-do-app-react-native",
  },
];

export const skills = [
  {
    id: "1",
    title: "React",
    icon: <DiReact />,
    skillLevel: [
      <AiFillStar />,
      <AiFillStar />,
      <AiFillStar />,
      <AiFillStar />,
      <AiOutlineStar />,
    ],
  },
  {
    id: "2",
    title: "JavaScript",
    icon: <SiJavascript />,
    skillLevel: [
      <AiFillStar />,
      <AiFillStar />,
      <AiFillStar />,
      <AiFillStar />,
      <AiFillStar />,
    ],
  },
  {
    id: "3",
    title: "Typescript",
    icon: <SiTypescript />,
    skillLevel: [
      <AiFillStar />,
      <AiFillStar />,
      <AiFillStar />,
      <AiOutlineStar />,
      <AiOutlineStar />,
    ],
  },
  {
    id: "4",
    title: "Node.js",
    icon: <IoLogoNodejs />,
    skillLevel: [
      <AiFillStar />,
      <AiFillStar />,
      <AiFillStar />,
      <AiOutlineStar />,
      <AiOutlineStar />,
    ],
  },
  {
    id: "5",
    title: "Next.js",
    icon: <SiNextdotjs />,
    skillLevel: [
      <AiFillStar />,
      <AiFillStar />,
      <AiOutlineStar />,
      <AiOutlineStar />,
      <AiOutlineStar />,
    ],
  },
  {
    id: "6",
    title: "Tailwind",
    icon: <SiTailwindcss />,
    skillLevel: [
      <AiFillStar />,
      <AiFillStar />,
      <AiFillStar />,
      <AiFillStar />,
      <AiOutlineStar />,
    ],
  },
  {
    id: "7",
    title: "HTML",
    icon: <AiFillHtml5 />,
    skillLevel: [
      <AiFillStar />,
      <AiFillStar />,
      <AiFillStar />,
      <AiFillStar />,
      <AiFillStar />,
    ],
  },
  {
    id: "8",
    title: "CSS",
    icon: <DiCss3 />,
    skillLevel: [
      <AiFillStar />,
      <AiFillStar />,
      <AiFillStar />,
      <AiFillStar />,
      <AiOutlineStar />,
    ],
  },
  {
    id: "9",
    title: "Redux",
    icon: <SiRedux />,
    skillLevel: [
      <AiFillStar />,
      <AiFillStar />,
      <AiFillStar />,
      <AiFillStar />,
      <AiOutlineStar />,
    ],
  },
  {
    id: "10",
    title: "Firebase",
    icon: <SiFirebase />,
    skillLevel: [
      <AiFillStar />,
      <AiFillStar />,
      <AiFillStar />,
      <AiFillStar />,
      <AiOutlineStar />,
    ],
  },
  {
    id: "11",
    title: "MUI5",
    icon: <SiMaterialui />,
    skillLevel: [
      <AiFillStar />,
      <AiFillStar />,
      <AiFillStar />,
      <AiFillStar />,
      <AiOutlineStar />,
    ],
  },
  {
    id: "12",
    title: "Netlify",
    icon: <SiNetlify />,
    skillLevel: [
      <AiFillStar />,
      <AiFillStar />,
      <AiFillStar />,
      <AiFillStar />,
      <AiOutlineStar />,
    ],
  },
  {
    id: "13",
    title: "Boostrap",
    icon: <BsBootstrap />,
    skillLevel: [
      <AiFillStar />,
      <AiFillStar />,
      <AiFillStar />,
      <AiFillStar />,
      <AiFillStar />,
    ],
  },
  {
    id: "14",
    title: "React Router",
    icon: <SiReactrouter />,
    skillLevel: [
      <AiFillStar />,
      <AiFillStar />,
      <AiFillStar />,
      <AiFillStar />,
      <AiFillStar />,
    ],
  },
  // Add POSTMAN
];

export const about = [];

export const contact = [];
