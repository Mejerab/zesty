import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home1 from "../pages/Home1/Home1";
import Home2 from "../pages/Home2/Home2";
import AboutPage from "../pages/AboutPage";
import Menu1 from "../pages/Menu1";
import Menu2 from "../pages/Menu2";
import ChefPage from "../pages/ChefPage";
import ReservaPage from "../pages/ReservaPage";
import Blog1 from "../pages/Blog1";
import Blog2 from "../pages/Blog2";
import Testimonials from "../pages/Testimonials";
import ErrorPage from "../pages/ErrorPage";
import FaQ from "../pages/FaqPage";
import WhyChooseUs from "../pages/WhyChooseUs";
import MyShop from "../pages/MyShop";
import Food from "../pages/Food";
import Cart from "../pages/Cart";
import Contact from "../pages/Contact";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home1 />
            },
            {
                path: '/home2',
                element: <Home2 />
            },
            {
                path: '/about-us',
                element: <AboutPage />
            },
            {
                path: '/menu1',
                element: <Menu1 />
            },
            {
                path: '/menu2',
                element: <Menu2 />
            },
            {
                path: '/chef',
                element: <ChefPage />
            },
            {
                path: '/reservation',
                element: <ReservaPage />
            },
            {
                path: '/blog1',
                element: <Blog1 />
            },
            {
                path: '/blog2',
                element: <Blog2 />
            },
            {
                path: '/testimonials',
                element: <Testimonials />
            },
            {
                path: '/faq',
                element: <FaQ />
            },
            {
                path: '/choose-us',
                element: <WhyChooseUs />
            },
            {
                path: '/my-shop',
                element: <MyShop />
            },
            {
                path: '/food/:id',
                element: <Food />
            },
            {
                path: '/cart',
                element: <Cart />
            },
            {
                path: '/contact-us',
                element: <Contact />
            },
        ]
    },
]);
export default router;