import { HiMap, HiPresentationChartLine, HiPuzzle, HiServer, HiTruck, HiUserAdd } from "react-icons/hi";
import PointHook from "../../hooks/pointHook";
import PropTypes from 'prop-types';

const ChooseUs = ({img}) => {
    return (
        <div>
            <div className="text-center">
                <div data-aos='fade-up' className="w-fit mx-auto">
                    <PointHook text={'Why Choose Us'} />
                </div>
                <h3 data-aos='fade-up' className="text-[48px] font-medium playfair text-[#C9AB81]">Why Choose The Best Pizza?</h3>
            </div>
            <div className="mt-16 max-w-[1500px] mx-auto px-4 lg:flex items-center space-y-24 gap-x-8 justify-between">
                <div className="space-y-24 w-fit lg:mx-0 mx-auto">
                    <div data-aos='fade-right' data-aos-duration={700} className="border border-[#C9AB81] w-fit rounded-[10px] p-6 bg-[#111D21]">
                        <HiMap className="text-[#111D21] p-5 rounded-full bg-[#C9AB81] text-[5rem]" />
                        <h4 className="text-[24px] py-3 font-medium playfair text-[#C9AB81]">The Highest Quality</h4>
                        <p className="inter w-[17rem] text-[16px] leading-[150%] tracking-[0.5px]">We prioritize customer satisfaction and strive to exceed </p>
                    </div>
                    <div data-aos='fade-right' data-aos-duration={1000} className="border border-[#C9AB81] w-fit rounded-[10px] p-6 bg-[#111D21]">
                        <HiServer className="text-[#111D21] p-5 rounded-full bg-[#C9AB81] text-[5rem]" />
                        <h4 className="text-[24px] py-3 font-medium playfair text-[#C9AB81]">The Best Ingredients</h4>
                        <p className="inter w-[17rem] text-[16px] leading-[150%] tracking-[0.5px]">We prioritize customer satisfaction and strive to exceed </p>
                    </div>
                    <div data-aos='fade-right' data-aos-duration={1300} className="border border-[#C9AB81] w-fit rounded-[10px] p-6 bg-[#111D21]">
                        <HiPuzzle className="text-[#111D21] p-5 rounded-full bg-[#C9AB81] text-[5rem]" />
                        <h4 className="text-[24px] py-3 font-medium playfair text-[#C9AB81]">Always fresh ingredients</h4>
                        <p className="inter w-[17rem] text-[16px] leading-[150%] tracking-[0.5px]">We prioritize customer satisfaction and strive to exceed </p>
                    </div>
                </div>
                <div className="relative lg:block hidden w-[558px] h-[893.93px] -ml-5">
                    <div data-aos='zoom-in' className="z-10 absolute w-full h-full left-5 2xl:top-5 rounded-full bg-[#C9AB81]"></div>
                    <img className="z-30 relative" src={`${img ? 'https://i.ibb.co.com/8mrBTtK/Image.png': 'https://i.ibb.co.com/g6YTrMt/Image-4.png'}`} alt="" />
                </div>
                <div className="space-y-24 w-fit lg:mx-0 mx-auto">
                    <div data-aos='fade-left' data-aos-duration={700} className="border border-[#C9AB81] w-fit rounded-[10px] p-6 bg-[#111D21]">
                        <HiPresentationChartLine className="text-[#111D21] p-5 rounded-full bg-[#C9AB81] text-[5rem]" />
                        <h4 className="text-[24px] py-3 font-medium playfair text-[#C9AB81]">Well Cooked Food</h4>
                        <p className="inter w-[17rem] text-[16px] leading-[150%] tracking-[0.5px]">We prioritize customer satisfaction and strive to exceed </p>
                    </div>
                    <div data-aos='fade-left' data-aos-duration={1000} className="border border-[#C9AB81] w-fit rounded-[10px] p-6 bg-[#111D21]">
                        <HiTruck className="text-[#111D21] p-5 rounded-full bg-[#C9AB81] text-[5rem]" />
                        <h4 className="text-[24px] py-3 font-medium playfair text-[#C9AB81]">Best Food Taste</h4>
                        <p className="inter w-[17rem] text-[16px] leading-[150%] tracking-[0.5px]">We prioritize customer satisfaction and strive to exceed </p>
                    </div>
                    <div data-aos='fade-left' data-aos-duration={1300} className="border border-[#C9AB81] w-fit rounded-[10px] p-6 bg-[#111D21]">
                        <HiUserAdd className="text-[#111D21] p-5 rounded-full bg-[#C9AB81] text-[5rem]" />
                        <h4 className="text-[24px] py-3 font-medium playfair text-[#C9AB81]">Experienced chefs</h4>
                        <p className="inter w-[17rem] text-[16px] leading-[150%] tracking-[0.5px]">We prioritize customer satisfaction and strive to exceed </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

ChooseUs.propTypes = {
    img: PropTypes.bool
}
export default ChooseUs;