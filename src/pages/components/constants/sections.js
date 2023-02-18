import Title from "../travelappComp/Title";
import Footer from "../travelappComp/Footer";
import SectionTwo from "../travelappComp/SectionTwo";

export const navLinks = [
    {
        id: "home",
        title: "Home",
        link: "#home",
        path: '/Home',
        element: <Title/>,
    },
    {
        id: "discover",
        title: "Discover",
        link: "#discover",
        path: '/discover',
        element: <SectionTwo/>,
    },
    {
        id: "footer",
        title: "Footer",
        link: "#footer",
        path: '/footer',
        element: <Footer/>,
    },
]