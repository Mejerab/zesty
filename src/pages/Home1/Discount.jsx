
import PointHook from "../../hooks/pointHook";
import '@smastrom/react-rating/style.css'
import { FaArrowRightLong } from "react-icons/fa6";
import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import PropTypes from 'prop-types';
import { Rating } from "@mui/material";

const Discount = ({img}) => {
    const [recipes, setRecipe] = useState([]);
    useEffect(() => {
        fetch('/foods.json')
            .then(res => res.json())
            .then(data => setRecipe(data))
    }, [])
    console.log(recipes);

    return (
        <div>
            <div className="bg-[url(https://i.ibb.co.com/DYNbDxL/Bg-2.png)] bg-cover bg-left bg-no-repeat">
                <div className="max-w-[1500px] mx-auto px-4 pt-24 flex lg:flex-row gap-y-12 flex-col items-center justify-between">
                    <div className="relative w-[370px] lg:w-[507px] h-[500px] lg:h-[657px]">
                        <div data-aos='zoom-in' className="absolute bottom-0 -left-2 lg:left-0 w-full h-full bg-[#C9AB81] rounded-t-full"></div>
                        <img className="relative ml-2 lg:ml-5" src={`${ img ? 'https://i.ibb.co.com/P5NGPZF/Image-7.png' : 'https://i.ibb.co.com/8MrgKKP/Image-9.png'}`} alt="" />
                    </div>
                    <div data-aos='fade-left'>
                        <PointHook text={'Our Discount Menu'} />
                        <h3 className="playfair pb-5 text-[48px] font-medium text-[#C9AB81]">Today Best Discount Menu</h3>
                        <div className="playfair grid lg:grid-cols-2 gap-y-8 gap-x-16">
                            <div className="border border-[#C9AB814d] backdrop-blur-[6px] text-center h-full w-full lg:py-0 py-7 lg:h-[126px] lg:w-[196px] rounded-[10px]">
                                <p className="font-medium leading-[110%] text-[#C9AB81] text-[64px]">100+</p>
                                <h4 className="text-[20px] pt-2">Visitors Daily</h4>
                            </div>
                            <div className="border border-[#C9AB814d] backdrop-blur-[6px] text-center h-full w-full lg:py-0 py-7 lg:h-[126px] lg:w-[196px] rounded-[10px]">
                                <p className="font-medium leading-[110%] text-[#C9AB81] text-[64px]">400+</p>
                                <h4 className="text-[20px] pt-2">Deliveries Monthly</h4>
                            </div>
                            <div className="border border-[#C9AB814d] backdrop-blur-[6px] text-center h-full w-full lg:py-0 py-7 lg:h-[126px] lg:w-[196px] rounded-[10px]">
                                <p className="font-medium leading-[110%] text-[#C9AB81] text-[64px]">99%</p>
                                <h4 className="text-[20px] pt-2">Positive Feedback</h4>
                            </div>
                            <div className="border border-[#C9AB814d] backdrop-blur-[6px] text-center h-full w-full lg:py-0 py-7 lg:h-[126px] lg:w-[196px] rounded-[10px]">
                                <p className="font-medium leading-[110%] text-[#C9AB81] text-[64px]">50+</p>
                                <h4 className="text-[20px] pt-2">Awards & Honors</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-[571.93px] max-w-[1500px] mx-auto mt-3">
                <Marquee pauseOnHover>
                    {
                        recipes.map(recipe =>
                            <div key={recipe.id} className="relative mr-3">
                                <img src={recipe.image} alt="" />
                                <div className="bg-[#111D21] absolute bottom-7 flex justify-between items-center rounded-r-[10px] w-[90%] p-4">
                                    <div>
                                        <h4 className="playfair font-medium text-[24px]">{recipe.name}</h4>
                                        <Rating
                                            className="mb-3 mt-2"
                                            style={{ maxWidth: 120 }}
                                            value={recipe.rating}
                                            readOnly
                                        />
                                        <p className="text-[32px] flex items-center gap-x-4 font-medium playfair"><p className="jost text-[#BABBC3] line-through font-normal text-[16px]">${recipe.price}.00</p>${recipe.discountPrice}.00</p>
                                    </div>
                                    <div>
                                        <button className="btn hover:text-[#C9AB81] arrow hover:bg-[#000] bg-[#C9AB81] text-black "><FaArrowRightLong className="text-xl -rotate-45 transition-transform" /></button>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </Marquee>
            </div>
        </div>
    );
};

Discount.propTypes = {
    img: PropTypes.bool
}
export default Discount;