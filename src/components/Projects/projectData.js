import surftweb from "../../assets/project1.jpg";
import nailBoutique from "../../assets/project2.jpg";
import chitchat from "../../assets/chitchat.webp";
import githubProfile from "../../assets/githubProfile.webp";

const projectData = [
  {
    id: 1,
    img: chitchat,
    title: "ChitChat Social Media Web App",
    intro:
      "ChitChat is a social media web app that helps you can stay connected with the people who matter to you the most as well as meet new people.",
    features: [
      "The app includes a landing page, a login page, a sign-up page and a page for joining an existing chat room.",
      " User authentication is handled using Firebase Authentication",
      "Posts, likes and comments are handled by firestore database",
      "Media files are handled by firebase storage.",
    ],
    stack: ["React", "Chakra UI", "React-Icons", "Firebase"],
    code: "https://github.com/ebokes/chitchat",
    live: "https://chitchat-tau.vercel.app/",
  },
  {
    id: 2,
    img: githubProfile,
    title: "Github Profile",
    intro:
      "This is a vuejs application that allows users to search for and view GitHub profiles. The application fetches user data from the GitHub API and displays it in a responsive UI.",
    features: [
      "Built using Vue.js, a popular JavaScript framework for building user interfaces",
      "Integrates with the GitHub API to fetch user data and display it in a user-friendly way",
    ],
    stack: ["Vue", "TailwindCSS", "React-Icons"],
    code: "https://github.com/ebokes/gihub-profile-vue",
    live: "https://gihub-profile-vue.vercel.app/",
  },
  {
    id: 3,
    img: nailBoutique,
    title: "Nail Boutique",
    intro:
      "Nail Boutique is a beauty brand that offers nail, hair and skin care services to her clients.",
    features: [
      "Service catalog that allows users to browse nail care services by category",
      "Search functionality that enables users to search for service providers by keyword",
      "Appointment booking system that allows users to book appointments for their preferred services and service providers",
    ],
    stack: ["React", "MUI", "Styled-Components", "Context-API"],
    code: "https://github.com/Meldy2503/nail-boutique",
    live: "https://nail-boutique.netlify.app/",
  },
  {
    id: 4,
    img: surftweb,
    title: "Surftweb",
    intro:
      "Surftweb is a simple multiple page website that is a front for a web development company that renders digital products & services to small, medium and large scale businesses.",
    features: [
      "Responsive and user-friendly design that works across different devices and screen sizes",
      "Modular and reusable codebase that promotes maintainability and scalability",
    ],
    stack: ["React", "Styled-Components", "MUI"],
    code: "https://github.com/ebokes/surftweb",
    live: "https://surftweb.netlify.app/",
  },
];
export default projectData;
