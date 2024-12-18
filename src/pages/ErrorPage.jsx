import Banner from "./Banner";
import Navbar1 from "./Home1/Navbar1";
import Footer from "./Home1/Footer";
import 'aos/dist/aos.css';
import { useEffect } from "react";
import AOS from "aos";
const ErrorPage = () => {
    useEffect(() => {
        AOS.init({
            delay: 100,
            duration: 600,
            once: true,
            easing: 'ease-out'
        })
    }, [])
    return (
        <div className="bg-[#0C1315] overflow-hidden">
            <div className="max-w-[1500px] mx-auto px-4">
                <Navbar1 outline />
            </div>
            <Banner link={'Error'} name={'Error'} />
            <div className="py-24 max-w-[1500px] mx-auto px-4 flex justify-center items-center">
                <img className="!w-[644px]" src="https://i.ibb.co.com/XkG35PQ/Error-Content.png" alt="" />
            </div>
            <Footer />
        </div>
    );
};

export default ErrorPage;