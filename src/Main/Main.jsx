import AOS from "aos";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import 'aos/dist/aos.css';
const Main = () => {
    useEffect(()=>{
        AOS.init({
            delay: 100,
            duration: 600,
            once: true,
            easing: 'ease-out'
        })
    }, [])
    return (
        <div className="bg-[#1B1B1B] overflow-hidden text-white">
            <Outlet />
        </div>
    );
};

export default Main;