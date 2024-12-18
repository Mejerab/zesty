import { TiArrowRight } from "react-icons/ti";
import PointHook from "../../hooks/pointHook";

const Hero2 = () => {
    return (
        <div className="py-12 flex lg:flex-row flex-col gap-y-24 justify-between items-center">
            <div data-aos='fade-right' className="relative">
                <PointHook text={'Special Testy Food'} />
                <h2 className="lg:text-[80px] text-[60px] font-medium leading-[110%] playfair text-white py-8 lg:w-[33rem]">Healthy Life 
                In Our Best Natural Food</h2>
                <button className="btn rounded-[10px] arrow inter border-0 tra text-[16px] font-medium w-[200px] h-[60px] bg-[#C9AB81] text-black tra hover:text-[#C9AB81] hover:bg-black hover:border-0">Order Now <TiArrowRight className="transition-transform text-2xl -rotate-45" /></button>
            </div>
            <div className="w-[370px] lg:w-[485px] h-[570px] lg:h-[705px] relative lg:mr-24">
                <div className="w-full h-full bg-[#C9AB81] rounded-full absolute -top-3 -left-3"></div>
                <img className="relative" src="https://i.ibb.co.com/v4JdgQP/Image-4.png" alt="" />
                <div className="absolute bottom-24 -right-4 lg:-right-24 bg-[url(https://i.ibb.co.com/QdRK0NH/Bg-1.png)] flex flex-col justify-center items-center rounded-full playfair font-medium text-[#C9AB81] w-[189px] h-[275px]">
                    <p className="text-[24px]">Upto</p>
                    <p className="text-[48px]">20% Of</p>
                    <img src="https://i.ibb.co.com/GpCqM2h/Dot.png" className="absolute bottom-3 right-5" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Hero2;