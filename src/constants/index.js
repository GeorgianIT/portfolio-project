import FirstSection from "../components/FirstSection";
import Footer from "../components/Footer";
import SecondSection from "../components/SecondSection";
import ThirdSection from '../components/ThirdSection';

export const navLinks = [
    {
        id: "home",
        title: "Home",
        link: "#",
        path: '/firstsection',
        element: <FirstSection/>,
    },
    {
        id: "about",
        title: "About",
        link: "#about",
        path: '/secondsection',
        element: <SecondSection/>,
    },
    {
        id: "education",
        title: "Education",
        link: "#education",
        path: '/firstsection',
        element: <SecondSection/>,
    },
    {
        id: "skills",
        title: "Skills",
        link: "#skills",
        path: '/firstsection',
        element: <SecondSection/>,
    },
    {
        id: "tehnologies",
        title: "Tehnologies",
        link: "#tehnologies",
        path: '/firstsection',
        element: <SecondSection/>,
    },
    {
        id: "hobbies",
        title: "Hobbies",
        link: "#hobbies",
        path: '/hobbies',
        element: <SecondSection/>,
    },
    {
        id: "project",
        title: "Projects",
        link: "#projects",
        path: '/firstsection',
        element: <ThirdSection/>,
    },
    {
        id: "contact",
        title: "Contact",
        link: "#contact",
        path: '/contact',
        element: <Footer/>,
    },
]