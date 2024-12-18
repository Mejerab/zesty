import { TiArrowRight } from "react-icons/ti";
import PointHook from "../../hooks/pointHook";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import { useRef, useState } from "react";

const Menu = () => {
    const swiper = useRef(null);
    const [number, setNumber] = useState(0);
    const handleSlide = (idx) => {
        setNumber(idx);
        if (swiper.current) {
            swiper.current.slideTo(idx);
        }

    }
    return (
        <div className="max-w-[1500px] mx-auto px-4">
            <div className="flex flex-col justify-center items-center">
                <PointHook text={'Our Menu'} inter />
                <h4 className="text-[48px] text-center leading-[120%] mt-3 mx-auto w-[26rem] font-medium playfair text-[#C9AB81]">Satisfy In Our Menu Selections</h4>
            </div>
            <div className="py-12 flex lg:flex-row flex-col gap-y-12 items-center gap-x-4 2xl:gap-x-48">
                <div className="lg:w-1/3 space-y-5 relative -top-[0.6rem]">
                    <div className="h-[96.5%] w-[4px] bg-[#C9AB81] absolute top-5 z-10 right-0"></div>
                    <div onClick={() => handleSlide(0)} className="hover:cursor-pointer bg-black rounded-l-2xl relative border-[#C9AB81] border text-white h-[93px] items-center grid grid-cols-3">
                        <div className={`${number === 0 && 'bg-white'} tra absolute top-[-1px] right-0 h-[102%] z-30 w-[3px]`}></div>
                        <img className="ml-4 p-3 w-fit border col-span-1 border-[#C9AB81] rounded-full" src="https://i.ibb.co.com/4Ntzfkm/image-65.png" alt="" />
                        <h4 className="playfair font-medium text-[24px] text-center ml-7">Pizza</h4>
                    </div>
                    <div onClick={() => handleSlide(1)} className="hover:cursor-pointer bg-black rounded-l-2xl border-[#C9AB81] border text-white h-[93px] items-center grid grid-cols-3 relative">
                        <div className={`${number === 1 && 'bg-white'} tra absolute top-[-1px] right-0 h-[102%] z-30 w-[3px]`}></div>
                        <img className="ml-4 p-3 w-fit border col-span-1 border-[#C9AB81] rounded-full" src="https://i.ibb.co.com/ZBn2d0f/image-65-1.png" alt="" />
                        <h4 className="playfair font-medium text-[24px] text-center ml-7">Burger</h4>
                    </div>
                    <div onClick={() => handleSlide(2)} className="hover:cursor-pointer bg-black rounded-l-2xl border-[#C9AB81] border text-white h-[93px] items-center grid grid-cols-3 relative">
                        <div className={`${number === 2 && 'bg-white'} tra absolute top-[-1px] right-0 h-[102%] z-30 w-[3px]`}></div>
                        <img className="ml-4 p-3 w-fit border col-span-1 border-[#C9AB81] rounded-full" src="https://i.ibb.co.com/cx0BNw4/image-65-2.png" alt="" />
                        <h4 className="playfair font-medium text-[24px] text-center ml-7">Cupcake</h4>
                    </div>
                    <div onClick={() => handleSlide(3)} className="hover:cursor-pointer bg-black rounded-l-2xl border-[#C9AB81] border text-white h-[93px] items-center grid grid-cols-3 relative">
                        <div className={`${number === 3 && 'bg-white'} tra absolute top-[-1px] right-0 h-[102%] z-30 w-[3px]`}></div>
                        <img className="ml-4 p-3 w-fit border col-span-1 border-[#C9AB81] rounded-full" src="https://i.ibb.co.com/10qzMRD/image-65-3.png" alt="" />
                        <h4 className="playfair font-medium text-[24px] text-center ml-7">Casserole</h4>
                    </div>
                    <div onClick={() => handleSlide(4)} className="hover:cursor-pointer bg-black rounded-l-2xl border-[#C9AB81] border text-white h-[93px] items-center grid grid-cols-3 relative">
                        <div className={`${number === 4 && 'bg-white'} tra absolute top-[-1px] right-0 h-[102%] z-30 w-[3px]`}></div>
                        <img className="ml-4 p-3 w-fit border col-span-1 border-[#C9AB81] rounded-full" src="https://i.ibb.co.com/r7mXT32/image-65-5.png" alt="" />
                        <h4 className="playfair font-medium text-[24px] text-center ml-7">Ice Cream</h4>
                    </div>
                </div>
                <Swiper
                    onSwiper={(swipe) => (swiper.current = swipe)}
                    direction={'vertical'}
                    // pagination={{
                    //     clickable: true,
                    // }}
                    modules={[Pagination]}
                    className="!h-[543px] w-full lg:w-2/3"
                >

                    <SwiperSlide className="w-full">
                        <div className="flex w-full gap-x-6">
                            <div className="relative flex">
                                <img className="" src="https://i.ibb.co.com/Qc6jmtK/Image.png" alt="" />
                                <div className="playfair w-full absolute  bottom-0 text-center flex flex-col justify-center font-medium items-center py-6 backdrop-blur-[30px] bg-[#111D2166] rounded-b-lg">
                                    <h4 className="text-[32px] leading-[130%]">Italian Pizza</h4>
                                    <h3 className="text-[48px] leading-[120%] pb-4">$5.40</h3>
                                    <button className="text-[20px] flex arrow">Order Now <TiArrowRight className="text-2xl -rotate-45 transition-transform" /></button>
                                </div>
                            </div>
                            <img className="lg:block hidden" src="https://i.ibb.co.com/Qc6jmtK/Image.png" alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="w-full">
                        <div className="flex gap-x-6">
                            <div className="relative flex">
                                <img className="" src="https://i.ibb.co.com/dM52CPP/Image-1.png" alt="" />
                                <div className="playfair w-full absolute bottom-0 text-center flex flex-col justify-center font-medium items-center py-6 backdrop-blur-[30px] bg-[#111D2166] rounded-b-lg">
                                    <h4 className="text-[32px] leading-[130%]">Mexican Burger</h4>
                                    <h3 className="text-[48px] leading-[120%] pb-4">$5.40</h3>
                                    <button className="text-[20px] flex arrow">Order Now <TiArrowRight className="text-2xl -rotate-45 transition-transform" /></button>
                                </div>
                            </div>
                            <img className="lg:block hidden" src="https://i.ibb.co.com/dM52CPP/Image-1.png" alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="w-full">
                        <div className="flex gap-x-6">
                            <div className="relative flex">
                                <img className="" src="https://i.ibb.co.com/0JBB6gg/image-4.png" alt="" />
                                <div className="playfair w-full absolute bottom-0 text-center flex flex-col justify-center font-medium items-center py-6 backdrop-blur-[30px] bg-[#111D2166] rounded-b-lg">
                                    <h4 className="text-[32px] leading-[130%]">Cupcake</h4>
                                    <h3 className="text-[48px] leading-[120%] pb-4">$5.40</h3>
                                    <button className="text-[20px] flex arrow">Order Now <TiArrowRight className="text-2xl -rotate-45 transition-transform" /></button>
                                </div>
                            </div>
                            <img className="lg:block hidden" src="https://i.ibb.co.com/0JBB6gg/image-4.png" alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="w-full">
                        <div className="flex gap-x-6">
                            <div className="relative flex flex-grow">
                                <img className="" src="https://i.ibb.co.com/LdBdWHd/image-3.png" alt="" />
                                <div className="playfair w-full absolute bottom-0 text-center flex flex-col justify-center font-medium items-center py-6 backdrop-blur-[30px] bg-[#111D2166] rounded-b-lg">
                                    <h4 className="text-[32px] leading-[130%]">Ramen</h4>
                                    <h3 className="text-[48px] leading-[120%] pb-4">$5.40</h3>
                                    <button className="text-[20px] flex arrow">Order Now <TiArrowRight className="text-2xl -rotate-45 transition-transform" /></button>
                                </div>
                            </div>
                            <img className="lg:block hidden" src="https://i.ibb.co.com/LdBdWHd/image-3.png" alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="w-full">
                        <div className="flex gap-x-6">
                            <div className="relative flex">
                                <img className="" src="https://i.ibb.co.com/LRDRNKS/image-2.png" alt="" />
                                <div className="playfair w-full absolute bottom-0 text-center flex flex-col justify-center font-medium items-center py-6 backdrop-blur-[30px] bg-[#111D2166] rounded-b-lg">
                                    <h4 className="text-[32px] leading-[130%]">Ice Cream</h4>
                                    <h3 className="text-[48px] leading-[120%] pb-4">$5.40</h3>
                                    <button className="text-[20px] flex arrow">Order Now <TiArrowRight className="text-2xl -rotate-45 transition-transform" /></button>
                                </div>
                            </div>
                            <img className="lg:block hidden" src="https://i.ibb.co.com/LRDRNKS/image-2.png" alt="" />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Menu;