import FirstSection from "../components/FirstSection";
import Footer from '../components/Footer';
import SecondSection from "../components/SecondSection";
import ThirdSection from '../components/ThirdSection';
import EducationalJourney from '../components/EducationalJourney';
import Hobbies from '../components/Hobbies';
import Tehnologies from '../components/Tehnologies';
import HardSkills from '../components/HardSkills';

export const navLinks = [
    {
        id: "home",
        title: "Home",
        link: "#",
        path: '/home',
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
        path: '/education',
        element: <EducationalJourney/>,
    },
    {
        id: "skills",
        title: "Skills",
        link: "#skills",
        path: '/skills',
        element: <HardSkills/>,
    },
    {
        id: "tehnologies",
        title: "Tehnologies",
        link: "#tehnologies",
        path: '/tehnologies',
        element: <Tehnologies/>,
    },
    // {
    //     id: "hobbies",
    //     title: "Hobbies",
    //     link: "#hobbies",
    //     path: '/hobbies',
    // element: <Hobbies/>,
    // },
    {
        id: "project",
        title: "Projects",
        link: "#projects",
        path: '/Projects',
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