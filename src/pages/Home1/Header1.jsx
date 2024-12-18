import Hero1 from "./Hero1";
import Navbar1 from "./Navbar1";

const Header1 = () => {
    return (
        <div className="bg-[#111D21] relative overflow-hidden">
            <img src="https://i.ibb.co.com/qywrpCC/Bg.png" className="absolute lg:block hidden -right-5 h-full z-10" alt="" />
            <div className="relative">
                <div className="absolute lg:flex hidden z-20 top-40 right-[19.3rem] bg-[url(https://i.ibb.co.com/s5LXdDL/Ellipse-2.png)] w-[186px] h-[186px] bg-cover flex-col items-center justify-center gap-y-3">
                    <p className="text-[32px] font-medium playfair">20% </p>
                    <p className="inter text-[16px] font-medium"><span className="text-[#C9AB81]">Discount</span> for 2 Order</p>
                    <img src="https://i.ibb.co.com/Qn48mJ4/image-53.png" alt="" />
                </div>
                <img className="absolute lg:block hidden top-64 right-96 z-[10]" src="https://i.ibb.co.com/1KXYgBw/Ellipse-1.png" alt="" />
            </div>
            <img className="absolute lg:block hidden bottom-2 right-[46rem]" src="https://i.ibb.co.com/4PJ49QL/Vector-2.png" alt="" />
            <div className="max-w-[1500px] mx-auto px-4 z-40">
                <Navbar1 />
                <Hero1 />
            </div>
        </div>
    );
};

export default Header1;