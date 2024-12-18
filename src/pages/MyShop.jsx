import { IoSearch } from "react-icons/io5";
import Banner from "./Banner";
import Footer from "./Home1/Footer";
import Navbar1 from "./Home1/Navbar1";
import { Rating, Slider } from "@mui/material";
import { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const MyShop = () => {
    const [datas, setDatas] = useState([]);
    useEffect(() => {
        fetch('/foods.json')
            .then(res => res.json())
            .then(data => setDatas(data))
    }, [])
    const handleClick = () => {
        const select = document.getElementById('select').value;
        if (select === 'Ascending Order') {
            const newData = [...datas].sort((a,b)=>a.discountPrice - b.discountPrice);
            setDatas(newData);
        }
        else if (select === 'Deascending Order') {
            const newData = [...datas].sort((a,b)=>b.discountPrice - a.discountPrice);
            setDatas(newData);
        }
    }
    return (
        <div className="bg-[#0C1315]">
            <div className="max-w-[1500px] mx-auto px-4">
                <Navbar1 outline />
            </div>
            <Banner link={'my-shop'} name={'My Shop'} />
            <div className="flex lg:flex-row flex-col items-center gap-6 pt-24 max-w-[1500px] mx-auto px-4">
                <div className="border border-[#C9AB81] rounded-[10px]">
                    <div className="relative">
                        <input type="text" placeholder="Search" className="input rounded-[10px] placeholder:text-[#BABBC3] text-[#BABBC3] inter border-0 focus:border-0 h-[60px] w-[356px] 2xl:m-16 m-5 bg-[#32312b]" />
                        <button className="w-[63px] h-[60px] absolute bg-[#C9AB81] rounded-r-[10px] 2xl:top-16 top-5 2xl:right-[3.3rem] right-4 flex justify-center text-black items-center"><IoSearch className="text-2xl" /></button>
                    </div>
                </div>
                <p className="text-[#C9AB81] lg:block hidden ml-24 inter font-medium text-[18px]">Showing Results 1-6</p>
                <select onClick={handleClick} id="select" className="select select-bordered w-full bg-[#32312b] inter text-[16px] lg:max-w-xs ml-auto">
                    <option disabled selected>Default Sorting</option>
                    <option>Ascending Order</option>
                    <option>Deascending Order</option>
                </select>
            </div>
            <div className="grid lg:grid-cols-3 justify-between pb-24 lg:gap-x-6 max-w-[1500px] mx-auto px-4">
                <div className="mx-auto lg:w-full">
                    <div className="mt-12">
                        <h4 className="text-[32px] font-medium playfair text-[#C9AB81]">Popular Categories</h4>
                        <div className="mt-7 space-y-4">
                            <button className="w-full bg-transparent text-white border-[#C9AB81] hover:bg-[#C9AB81] hover:text-black tra btn rounded-[10px] playfair font-medium text-[24px] justify-start pl-6">Bread</button>
                            <button className="w-full bg-transparent text-white border-[#C9AB81] hover:bg-[#C9AB81] hover:text-black tra btn rounded-[10px] playfair font-medium text-[24px] justify-start pl-6">Fast Food</button>
                            <button className="w-full bg-transparent text-white border-[#C9AB81] hover:bg-[#C9AB81] hover:text-black tra btn rounded-[10px] playfair font-medium text-[24px] justify-start pl-6">Coffee</button>
                            <button className="w-full bg-transparent text-white border-[#C9AB81] hover:bg-[#C9AB81] hover:text-black tra btn rounded-[10px] playfair font-medium text-[24px] justify-start pl-6">French Fry</button>
                            <button className="w-full bg-transparent text-white border-[#C9AB81] hover:bg-[#C9AB81] hover:text-black tra btn rounded-[10px] playfair font-medium text-[24px] justify-start pl-6">Fried  Chicken</button>
                            <button className="w-full bg-transparent text-white border-[#C9AB81] hover:bg-[#C9AB81] hover:text-black tra btn rounded-[10px] playfair font-medium text-[24px] justify-start pl-6">Health Care</button>
                            <button className="w-full bg-transparent text-white border-[#C9AB81] hover:bg-[#C9AB81] hover:text-black tra btn rounded-[10px] playfair font-medium text-[24px] pl-6">Uncategorized</button>
                        </div>
                    </div>
                    <div className="mt-12 bg-[#C9AB81] rounded-[10px] p-4 px-8">
                        <h4 className="playfair font-medium text-[24px] text-black text-center">Best Price Range</h4>
                        <Slider className="my-4" color="#fff" defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
                        <div className="flex justify-between items-center">
                            <button className="btn rounded-[10px] inter text-[18px] font-medium w-[84px] h-[47px]">Filter</button>
                            <p className="inter font-medium text-[16px] text-black">Price: 30$ - 60$</p>
                        </div>
                    </div>
                </div>
                <div className="col-span-2 -mr-3 grid lg:grid-cols-2 mt-20 gap-x-2 gap-y-12">
                    {
                        datas.map(data =>
                            <div key={data.id} className="relative mr-3">
                                <img className="w-full" src={data.image} alt="" />
                                <div className="bg-[#111D21] absolute bottom-7 flex justify-between items-center rounded-r-[10px] w-[90%] p-4">
                                    <div>
                                        <h4 className="playfair font-medium text-[24px]">{data.name}</h4>
                                        <Rating
                                            className="mb-3 mt-2"
                                            style={{ maxWidth: 120 }}
                                            value={data.rating}
                                            fill={'#FCD554'}
                                            readOnly
                                        />
                                        <p className="text-[32px] flex items-center gap-x-4 font-medium playfair"><p className="jost text-[#BABBC3] line-through font-normal text-[16px]">${data.price}.00</p>${data.discountPrice}.00</p>
                                    </div>
                                    <div>
                                        <Link to={`/food/${data.id}`} className="btn hover:text-[#C9AB81] arrow hover:bg-[#000] bg-[#C9AB81] text-black "><FaArrowRightLong className="text-xl -rotate-45 transition-transform" /></Link>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default MyShop;