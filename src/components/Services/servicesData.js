import { RiCodeView } from "react-icons/ri";
import { IoIosApps } from "react-icons/io";
import { FaPaintBrush } from "react-icons/fa";
import { MdOutlineDevices } from "react-icons/md";
import { ImUserCheck } from "react-icons/im";
import { VscExpandAll } from "react-icons/vsc";

const servicesData = [
  {
    id: 1,
    icon: <RiCodeView size={35} color="#002f87" />,
    title: "Web Development",
    body: "Be it a simple single static page or complex web applications, we've got you covered",
  },
  {
    id: 2,
    icon: <IoIosApps size={35} color="#002f87" />,
    title: "Web Apps",
    body: "The user interface of your web application is built according to your specifications. The web apps are compatible across browsers as well as viewports",
  },
  {
    id: 3,
    icon: <FaPaintBrush size={35} color="#002f87" />,
    title: "Branding",
    body: "The outlook of you website is tailored to suit your requirement and needs.",
  },
  {
    id: 4,
    icon: <MdOutlineDevices size={35} color="#002f87" />,
    title: "Responsive layout",
    body: "Webpages automatically adjust and adapt to the screen size and viewport of any device.",
  },
  {
    id: 5,
    icon: <VscExpandAll size={35} color="#002f87" />,
    title: "Scalable websites",
    body: "No matter the number of expected visits to your website, you can get a scalable website to accomodate existing users and the ones to come",
  },
  {
    id: 6,
    icon: <ImUserCheck size={35} color="#002f87" />,
    title: "User friendly",
    body: "Users can easily understand and navigate through the application in an efficient way",
  },
];
export default servicesData;
