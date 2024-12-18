import { IoIosStar } from "react-icons/io";
import PointHook from "../../hooks/pointHook";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Pagination } from 'swiper/modules';

const Testimonial = () => {
    return (
        <div className="max-w-[1500px] mx-auto px-4 relative">
            <img className="" src="https://i.ibb.co.com/ykYkGYV/Image-3.png" alt="" />
            <div className="bg-[#111D21] border border-[#C9AB81B3] top-24 right-4 w-full lg:w-[57%] lg:absolute ml-auto rounded-[10px]">
                <div className="flex justify-center items-center flex-col pt-6">
                    <PointHook text={'Testimonial'} inter />
                    <h4 className="playfair text-[32px] text-center font-medium text-[#C9AB81]">Customer Say for Something Us</h4>
                </div>
                <div className="mt-3">
                    <div className="flex flex-col justify-center items-center py-1">
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={100}
                            // loop={true}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Pagination]}
                            className="mySwiper  ml-auto w-full lg:w-[44rem]"
                        >
                            <SwiperSlide className="w-full lg:w-[44rem]">
                                <div>
                                    <h4 className="playfair pb-6 pt-2 bg-[url(https://i.ibb.co.com/QDrGdWR/Icon-Solid-Quote.png)] bg-bottom bg-no-repeat font-medium text-[32px] leading-[130%] w-[23rem] lg:w-[43rem] mx-auto text-center"> “Our Restaurant Provides the Perfect Setting For Any Occasion, Whether It&apos;s A Casual Lunch, Intimate Dinner, Or Special Celebration”. </h4>
                                    <div className="flex justify-center gap-x-2 mt-1 mb-5">
                                        <IoIosStar className="text-xl text-[#C9AB81]" />
                                        <IoIosStar className="text-xl text-[#C9AB81]" />
                                        <IoIosStar className="text-xl text-[#C9AB81]" />
                                        <IoIosStar className="text-xl text-[#C9AB81]" />
                                        <IoIosStar className="text-xl text-[#C9AB81]" />
                                    </div>
                                    <div className="text-center mb-12">
                                        <h5 className="playfair text-[24px] font-medium text-[#C9AB81]">Luice Mariya Lee</h5>
                                        <p className="inter text-[16px]">Customer</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="w-full lg:w-[44rem]">
                                <div>
                                    <h4 className="playfair pb-6 pt-2 bg-[url(https://i.ibb.co.com/QDrGdWR/Icon-Solid-Quote.png)] bg-bottom bg-no-repeat font-medium text-[32px] leading-[130%] w-[23rem] lg:w-[43rem] mx-auto text-center"> “Our Restaurant Provides the Perfect Setting For Any Occasion, Whether It&apos;s A Casual Lunch, Intimate Dinner, Or Special Celebration”. </h4>
                                    <div className="flex justify-center gap-x-2 mt-1 mb-5">
                                        <IoIosStar className="text-xl text-[#C9AB81]" />
                                        <IoIosStar className="text-xl text-[#C9AB81]" />
                                        <IoIosStar className="text-xl text-[#C9AB81]" />
                                        <IoIosStar className="text-xl text-[#C9AB81]" />
                                        <IoIosStar className="text-xl text-[#C9AB81]" />
                                    </div>
                                    <div className="text-center mb-12">
                                        <h5 className="playfair text-[24px] font-medium text-[#C9AB81]">Mariya Lee</h5>
                                        <p className="inter text-[16px]">Customer</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="w-full lg:w-[44rem]">
                                <div>
                                    <h4 className="playfair pb-6 pt-2 bg-[url(https://i.ibb.co.com/QDrGdWR/Icon-Solid-Quote.png)] bg-bottom bg-no-repeat font-medium text-[32px] leading-[130%] w-[23rem] lg:w-[43rem] mx-auto text-center"> “Our Restaurant Provides the Perfect Setting For Any Occasion, Whether It&apos;s A Casual Lunch, Intimate Dinner, Or Special Celebration”. </h4>
                                    <div className="flex justify-center gap-x-2 mt-1 mb-5">
                                        <IoIosStar className="text-xl text-[#C9AB81]" />
                                        <IoIosStar className="text-xl text-[#C9AB81]" />
                                        <IoIosStar className="text-xl text-[#C9AB81]" />
                                        <IoIosStar className="text-xl text-[#C9AB81]" />
                                        <IoIosStar className="text-xl text-[#C9AB81]" />
                                    </div>
                                    <div className="text-center mb-12">
                                        <h5 className="playfair text-[24px] font-medium text-[#C9AB81]">Luice</h5>
                                        <p className="inter text-[16px]">Customer</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Testimonial;