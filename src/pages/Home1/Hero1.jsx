import { TiArrowRight } from "react-icons/ti";
import PointHook from "../../hooks/pointHook";

const Hero1 = () => {
    return (
        <div data-aos='fade-right' className="py-28 relative">
            <PointHook text={'Special Testy Food'}/>
            <h2 className="text-[64px] font-medium leading-[110%] playfair text-white py-8 lg:w-[28rem]">Enjoy Delicious of Food With  
            Your Friend</h2>
            <button className="btn rounded-[10px] arrow inter border-0 tra text-[16px] font-medium w-[200px] h-[60px] bg-[#C9AB81] text-black tra hover:text-[#C9AB81] hover:bg-black hover:border-0">Order Now <TiArrowRight className="transition-transform text-2xl -rotate-45" /></button>
        </div>
    );
};

export default Hero1;