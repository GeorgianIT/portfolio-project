import FirstSection from "../components/FirstSection";
import Footer from "../components/Footer";
import SecondSection from "../components/SecondSection";
import ThirdSection from '../components/ThirdSection';

export const navLinks = [
    {
        id: "home",
        title: "Home",
        link: "#",
        path: '/portfolio-project/home',
        element: <FirstSection/>,
    },
    {
        id: "about",
        title: "About",
        link: "#about",
        path: '/portfolio-project/secondsection',
        element: <SecondSection/>,
    },
    {
        id: "education",
        title: "Education",
        link: "#education",
        path: '/portfolio-project/education',
        element: <EducationalJourney/>,
    },
    {
        id: "skills",
        title: "Skills",
        link: "#skills",
        path: '/portfolio-project/education',
        element: <EducationalJourney/>,
    },
    {
        id: "tehnologies",
        title: "Tehnologies",
        link: "#tehnologies",
        path: '/portfolio-project/tehnologies',
        element: <Tehnologies/>,
    },
    {
        id: "hobbies",
        title: "Hobbies",
        link: "#hobbies",
        path: '/portfolio-project/hobbies',
    element: <Hobbies/>,
    },
    {
        id: "project",
        title: "Projects",
        link: "#projects",
        path: '/portfolio-project/Projects',
        element: <ThirdSection/>,
    },
    {
        id: "contact",
        title: "Contact",
        link: "#contact",
        path: '/portfolio-project/contact',
        element: <Footer/>,
    },
]