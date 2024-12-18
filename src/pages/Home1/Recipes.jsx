import PointHook from "../../hooks/pointHook";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const Recipes = () => {
    return (
        <div className="max-w-[1500px] mx-auto px-4 lg:flex-row flex-col gap-y-12 flex items-center">
            <div data-aos='fade-right'>
                <PointHook text={'New Recipes'} />
                <h3 className="text-[37px] lg:text-[48px] font-medium lg:w-[33rem] playfair leading-[120%] py-4 text-[#c9ab81]">Experience Our Latest Mouthwatering Recipes</h3>
                <p className="inter text-[16px] leading-[150%] lg:w-[29rem] tracking-[0.5px]">Feel free to customize this information according to the specific details of the restaurant you&apos;re referring to! If you need more specific details. </p>
                <div className="mt-6 space-x-5">
                    <button id="prev" className="w-[62px] h-[50px] bg-transparent text-[#c9ab81] hover:bg-[#C9AB81] tra hover:text-[#0c1315] rounded-[10px] btn border-[#C9AB81]"><FaArrowLeftLong className="text-2xl" /></button>
                    <button id="next" className="w-[62px] h-[50px] bg-transparent text-[#c9ab81] hover:bg-[#C9AB81] tra hover:text-[#0c1315] rounded-[10px] btn border-[#C9AB81]"><FaArrowRightLong className="text-2xl" /></button>
                </div>
            </div>
            <Swiper
                slidesPerView={window.width > 700 ? 2 : 1}
                spaceBetween={20}
                loop={true}
                navigation={{
                    nextEl: '#next',
                    prevEl: '#prev'
                }}
                modules={[Pagination, Navigation]}
                className="w-full h-full"
            >
                <SwiperSlide className="hover:-translate-y-1"><div className="relative tra 2xl:h-[483px] 2xl:w-[460px] 2xl:ml-auto">
                    <img src="https://i.ibb.co.com/RSRqZkt/image-5.png" className="w-full h-full" alt="" />
                    <div className="absolute bottom-0 w-full text-center py-9 bg-[#111D2166] backdrop-blur-xl">
                        <h4 className="playfair text-[24px] font-medium">Pealla With Seafood</h4>
                        <p className="inter text-[18px]">Dessert</p>
                    </div>
                </div></SwiperSlide>
                <SwiperSlide className="hover:-translate-y-1"><div className="relative tra 2xl:h-[483px] 2xl:w-[460px] 2xl:ml-auto">
                    <img src="https://i.ibb.co.com/MSvPQyX/image-6.png" className="w-full" alt="" />
                    <div className="absolute bottom-0 w-full text-center py-9 bg-[#111D2166] backdrop-blur-xl">
                        <h4 className="playfair text-[24px] font-medium">Boiled Crayfish</h4>
                        <p className="inter text-[18px]">Dessert</p>
                    </div>
                </div></SwiperSlide>
                <SwiperSlide className="hover:-translate-y-1"><div className="relative tra 2xl:h-[483px] 2xl:w-[460px] 2xl:ml-auto">
                    <img src="https://i.ibb.co.com/1bfkjdX/image-7.png" className="w-full" alt="" />
                    <div className="absolute bottom-0 w-full text-center py-9 bg-[#111D2166] backdrop-blur-xl">
                        <h4 className="playfair text-[24px] font-medium">Pealla With Seafood</h4>
                        <p className="inter text-[18px]">Dessert</p>
                    </div>
                </div></SwiperSlide>
                <SwiperSlide className="hover:-translate-y-1"><div className="relative tra 2xl:h-[483px] 2xl:w-[460px] 2xl:ml-auto">
                    <img src="https://i.ibb.co.com/QFgR3pD/image-8.png" className="w-full" alt="" />
                    <div className="absolute bottom-0 w-full text-center py-9 bg-[#111D2166] backdrop-blur-xl">
                        <h4 className="playfair text-[24px] font-medium">Boiled Crayfish</h4>
                        <p className="inter text-[18px]">Dessert</p>
                    </div>
                </div></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Recipes;