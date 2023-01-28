import FirstSection from "../components/FirstSection";
import Footer from "../components/Footer";
import SecondSection from "../components/SecondSection";

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
        id: "skills",
        title: "Skills",
        link: "#skills",
        path: '/firstsection',
        element: <FirstSection/>,
    },
    {
        id: "tehnologies",
        title: "Tehnologies",
        link: "#tehnologies",
        path: '/firstsection',
        element: <FirstSection/>,
    },
    {
        id: "education",
        title: "Education",
        link: "#education",
        path: '/firstsection',
        element: <FirstSection/>,
    },
    {
        id: "project",
        title: "Projects",
        link: "#projects",
        path: '/firstsection',
        element: <FirstSection/>,
    },
    {
        id: "contact",
        title: "Contact",
        link: "#contact",
        path: '/contact',
        element: <Footer/>,
    },
]