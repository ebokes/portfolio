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
    body: "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
  },
  {
    id: 2,
    icon: <IoIosApps size={35} color="#002f87" />,
    title: "Web Apps",
    body: "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
  },
  {
    id: 3,
    icon: <FaPaintBrush size={35} color="#002f87" />,
    title: "Branding",
    body: "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
  },
  {
    id: 4,
    icon: <MdOutlineDevices size={35} color="#002f87" />,
    title: "Responsive layout",
    body: "Be it a desktop, laptop, tablet or mobile device, I build responsive websites to adapt to the size of your devices. ",
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
    body: "I build websites that is easily accessible and understandable for any user",
  },
];
export default servicesData;
