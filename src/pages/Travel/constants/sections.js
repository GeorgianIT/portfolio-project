import Title from '../travelappComp/Title';
import Footer from "../travelappComp/Footer";
import Exploring from "../travelappComp/Exploring";

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
        element: <Exploring/>,
    },
    {
        id: "footer",
        title: "Footer",
        link: "#footer",
        path: '/footer',
        element: <Footer/>,
    },
]