import surftweb from "../../images/project1.png";
import nailBoutique from "../../images/project2.png";
import quizbee from "../../images/project3.png";
const projectData = [
  {
    id: 1,
    img: nailBoutique,
    title: "Nail Boutique",
    text: "Nail Boutique is a beauty brand that offers nail, hair and skin care services to her clients.",
    text1:
      "This web application includes location selection, shopping cart, appointment scheduling features that enables a new client or returning client create reservation for an appointment at a specified date",
    stack: ["HTML", "CSS", "React", "MUI", "Styled-Components", "Context-API"],
    code: "https://github.com/Meldy2503/nail-boutique",
    live: "https://nail-boutique.netlify.app/",
  },
  {
    id: 2,
    img: surftweb,
    title: "Surftweb",
    text: "Surftweb is a simple multiple page website that is a front for a web development company that renders digital products & services to small, medium and large scale businesses.",
    text1:
      "It is implemented with Reactjs and has some features like toggles, routing, animation and it has a responsive layout",
    stack: ["HTML", "CSS", "React", "Styled-Components", "MUI"],
    code: "https://github.com/ebokes/surftweb",
    live: "https://confident-murdock-227ea6.netlify.app/",
  },

  {
    id: 3,
    img: quizbee,
    title: "QuizBee",
    text: "A simple web game application with questions and answers to these questions.",
    text1:
      'There are 5 random questions displayed to the user at the beginning of every session, as well as 4 options for each questions. Each question has a correct answer, which when selected, adds up to a total score. The total score is returned after all questions have been answered. A "play again" button restarts the game.',
    stack: ["HTML", "CSS", "React"],
    code: "https://github.com/ebokes/quiz_bee",
    live: "https://ebokes.github.io/quiz_bee/",
  },
];
export default projectData;
