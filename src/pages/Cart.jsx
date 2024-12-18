import { useEffect, useState } from "react";
import { getStored, remove } from "../cart";
import Banner from "./Banner";
import Footer from "./Home1/Footer";
import Navbar1 from "./Home1/Navbar1";
import { Rating } from "@mui/material";
import { FaTrash } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Cart = () => {
    const [datas, setDatas] = useState([]);
    const [items, setItems] = useState(getStored());
    useEffect(() => {
        fetch('/foods.json')
            .then(res => res.json())
            .then(data => {
                let newData = [];
                for (const id of items) {
                    newData.push(data.filter(item => item.id == id));
                }
                setDatas(newData)
            })
    }, [items])
    console.log(datas);
    
    return (
        <div className="bg-[#0C1315]">
            <div className="max-w-[1500px] mx-auto px-4">
                <Navbar1 outline />
            </div>
            <Banner link={'/cart'} name={'Cart'} />
            <div className="max-w-[1500px] mx-auto px-4 pb-24 space-y-24">
                <div className={`space-y-9 pt-24 ${items.length>0? 'hidden' : 'block'}`}>
                    <div className='p-5 w-full rounded-[10px] flex gap-x-5 items-center bg-[#32312b]'>
                        <img src="https://i.ibb.co.com/MpyMHSB/Mask-group.png" alt="" />
                        <p className="inter text-[16px]">Your Cart is Currently Empty</p>
                    </div>
                    <Link to='/my-shop' className="btn w-[190px] h-[56px] rounded-[10px] bg-[#C9AB81] hover:bg-black text-black hover:text-[#C9AB81] tra inter font-medium text-[16px]">Return To Shop</Link>
                </div>
                <div className={`grid gap-y-12 ${items.length>0? 'block' : 'hidden'}`}>
                    {
                        datas.map((data, idx) =>
                            <div key={idx} className="w-full p-5 border flex lg:flex-row flex-col items-center border-[#C9AB81] rounded-[10px]">
                                <img className="w-full lg:w-1/3 h-[400px]" src={`${data[0].image}`} alt="" />
                                <div className="font-medium lg:pl-6 space-y-4 w-full lg:w-2/3">
                                    <h4 className="playfair text-[36px] text-[#C9AB81]">{data[0].name}</h4>
                                    <Rating
                                        value={data[0].rating}
                                        readOnly
                                    />
                                    <p className="inter font-medium text-[16px] text-white">Price: <span className="text-[#BABBC3]">{data[0].discountPrice}</span></p>
                                    <p className="inter font-medium text-[16px] text-white">Availability: <span className="text-[#BABBC3]">N/A</span></p>
                                    <p className="inter font-medium text-[16px] text-white">Category: <span className="pl-[.63rem] text-[#BABBC3]">Food</span></p>
                                    <p className="inter font-medium text-[16px] text-white">Tags: <span className="text-[#BABBC3] pl-11">Fast Food, Faience Fry </span></p>
                                    <p className="inter font-medium text-[16px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ea aliquam pariatur animi porro maiores numquam excepturi eum recusandae libero nostrum possimus perspiciatis dicta tempora voluptates, ducimus rerum nulla nisi enim ab quia minus. Quos illum ex quaerat, at non eligendi voluptatibus deleniti possimus, quis fugiat enim dignissimos, explicabo facere.</p>
                                </div>
                                <button onClick={()=>{remove(data[0].id); location.reload()}} className="btn lg:mt-0 mt-5 rounded-[10px] bg-[#C9AB81] text-black hover:bg-black hover:text-[#C9AB81] tra"><FaTrash className="text-xl" /></button>
                            </div>
                        )
                    }
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Cart;