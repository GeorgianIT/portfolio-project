import Title from "../components/Title";
import Footer from "../components/Footer";
import Exploring from "../components/travelappComp/Exploring";

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