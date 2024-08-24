// import images
import Hero_person from "./assets/images/Hero/person.png";

import figma from "./assets/images/Skills/figma.png";
import sketch from "./assets/images/Skills/sketch.png";
import ps from "./assets/images/Skills/ps.png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import python from "./assets/images/Skills/python.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import project1 from "./assets/images/projects/img1.png";
import project2 from "./assets/images/projects/img2.png";
import project3 from "./assets/images/projects/img3.png";
import person_project from "./assets/images/projects/person.png";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Web and Mobile Application Developer",
    firstName: "My name is Permpree",
    LastName: "Vornthaisong",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        count: "1+",
        text: "Years of Experinse in Web development",
      },
      {
        count: "2+",
        text: "Projects Worked in my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "Figma",
        para: "Design UX-UI",
        logo: figma,
      },
      {
        name: "Node js",
        para: "Back-end",
        logo: nodejs,
      },
      {
        name: "Angular",
        para: "Web Development",
        logo: ps,
      },
      {
        name: "React js",
        para: "Web Development",
        logo: reactjs,
      },
      {
        name: "Flutter",
        para: "Mobile Appication development",
        logo: sketch,
      },
      {
        name: "Line App",
        para: "Line-Liff development",
        logo: python,
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Web Development",
        para: "Create and develop high-performance websites using the latest technologies. We provide consultation and continuously improve your website to ensure it reaches its full potential",
        logo: services_logo1,
      },
      {
        title: "ui / ux DESIGNING",
        para: "Design user experiences (UX) and user interfaces (UI) that are both beautiful and intuitive, ensuring the best possible experience for users across all platforms",
        logo: services_logo2,
      },
      {
        title: "Mobile App Development",
        para: "Crafting high-quality, user-friendly mobile applications that cater to your specific needs. From conceptual design to deployment, we specialize in creating feature-rich, scalable apps that offer seamless performance on both Android and iOS platforms",
        logo: services_logo3,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "Exchange item App",
        image: project1,
      },
      {
        title: "The application for collecting data on rubber plantations (Demo)",
        image: project3,
      },
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar1,
        name: "JOHN DOE",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar2,
        name: "Tom Alex",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar3,
        name: "Johnny",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar4,
        name: "ROBBIN",
      },
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image2: Hireme_person2,
    para: "If you have challenges or need to develop your organization, please hire me. I am here to provide tailored solutions that meet your specific needs and help you achieve your goals efficiently.",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "pramepreejobe@gmail.com",
        icon: GrMail,
        link: "pramepreejobe@gmail.com",
      },
      {
        text: "+66 9522 47765",
        icon: MdCall,
        link: "https://wa.me/1234567890",
      },
      {
        text: "perm_pdpa",
        icon: BsInstagram,
        link: "https://www.instagram.com/perm_pdpa/",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },
};
