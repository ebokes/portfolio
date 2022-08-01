import surftweb from "../../assets/project1.jpg";
import nailBoutique from "../../assets/project2.jpg";
import quizbee from "../../assets/project3.jpg";
import crypto from "../../assets/project4.jpg";

const projectData = [
  {
    id: 1,
    img: nailBoutique,
    title: "Nail Boutique",
    text: "Nail Boutique is a beauty brand that offers nail, hair and skin care services to her clients.",
    text1:
      "This web application was built to include location selection, shopping cart, appointment scheduling features that enables a new client or returning client create reservation for an appointment at a specified date.",
    stack: ["React", "MUI", "Styled-Components", "Context-API"],
    code: "https://github.com/Meldy2503/nail-boutique",
    live: "https://nail-boutique.netlify.app/",
  },
  {
    id: 2,
    img: surftweb,
    title: "Surftweb",
    text: "Surftweb is a simple multiple page website that is a front for a web development company that renders digital products & services to small, medium and large scale businesses.",
    text1:
      "It is implemented with Reactjs and has some features like toggles, routing, animation. It has a responsive layout.",
    stack: ["React", "Styled-Components", "MUI"],
    code: "https://github.com/ebokes/surftweb",
    live: "https://surftweb.netlify.app/",
  },
  {
    id: 3,
    img: quizbee,
    title: "QuizBee",
    text: "A simple web game application with questions and answers to these questions.",
    text1:
      "Five random questions are displayed to the user at the beginning of every session, four options are provided for each questions. Each question has a correct answer, which when selected, adds up to a total score. The total score is returned after all questions have been answered. ",
    stack: ["HTML", "CSS", "React"],
    code: "https://github.com/ebokes/quiz_bee",
    live: "https://ebokes.github.io/quiz_bee/",
  },
  {
    id: 4,
    img: crypto,
    title: "Crypto App",
    text: "A crypto app tracker that displays current prices of crypto currencies.",
    text1:
      "This project fetches data through an API to update the table and hence display logo, name, price, volume, etc of these currencies. It also has a responsive layout.",
    stack: ["HTML", "CSS", "React"],
    code: "https://github.com/ebokes/crypto_app",
    live: "https://deft-gelato-c67e98.netlify.app/",
  },
];
export default projectData;
