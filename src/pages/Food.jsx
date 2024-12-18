import { useParams } from "react-router-dom";
import Banner from "./Banner";
import Navbar1 from "./Home1/Navbar1";
import Footer from "./Home1/Footer";
import { useEffect, useState } from "react";
import { Checkbox, Rating } from "@mui/material";
import { MdKeyboardArrowUp } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";
import Marquee from "react-fast-marquee";
import Swal from "sweetalert2";
import { storeItem } from "../cart";

const Food = () => {
    const { id } = useParams();
    const [data, setData] = useState({});
    const [recipes, setRecipes] = useState([]);
    const [count, setCount] = useState(1);
    const [rate, setRate] = useState(0);
    const [truee, setTrue] = useState(true);
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    useEffect(() => {
        fetch(`/foods.json`)
            .then(res => res.json())
            .then(data => {
                const newData = data.find(dat => dat.id == id);
                setData(newData);
                setRecipes(data)
            })
    }, [id]);
    const handleSubmit = e => {
        e.preventDefault();
        const message = e.target.message.value;
        const name = e.target.name.value;
        const email = e.target.email.value;
        if (message, email, name, rate != 0) {
            Swal.fire({
                title: 'Success!',
                text: 'Press the button to continue',
                icon: 'success',
                confirmButtonText: 'Continue',
                background: '#C9AB81',
                customClass: {
                    confirmButton: 'confirm-swal'
                }
            })
            e.target.reset();
        }
        else {
            Swal.fire({
                title: 'Error!',
                text: 'Fill every input field and add rating to continue',
                icon: 'error',
                confirmButtonText: 'Return',
                background: '#C9AB81',
                customClass: {
                    confirmButton: 'confirm-swal'
                }
            })
        }

    }
    return (
        <div id="food" className="bg-[#0C1315]">
            <div className="max-w-[1500px] mx-auto px-4">
                <Navbar1 outline />
            </div>
            <Banner link={`/food/${id}`} name={'Shop Details'} />
            <div className="py-24 max-w-[1500px] mx-auto px-4 space-y-12">
                <div className="h-[623.95px] flex lg:flex-row gap-y-12 flex-col justify-between gap-x-4">
                    <img src={data.image} className="lg:w-[636px] lg:h-[623px]" alt="" />
                    <div className="bg-[#111D21] lg:w-1/2 rounded-[10px] p-9">
                        <p className="text-[48px] playfair font-medium space-x-4"><span className="text-[#BABBC3] line-through">$80.00</span> <span className="text-[#C9AB81]">$85.00</span></p>
                        <Rating
                            className="mb-3 mt-2"
                            style={{ maxWidth: 140 }}
                            value={parseInt(data.rating)}
                            // fill={'#ffffff'}
                            readOnly
                        />
                        <p className="pt-7 pb-6 inter text-[16px] pr-2 leading-[150%]">To provide accurate shop details for a restaurant, I&apos;ll need a bit more information. Could you please specify what type of shops you&apos;re referring to? Are you looking for information about shops located within the restaurant (like a gift shop or bakery), or are you looking for nearby shops in the vicinity of the restaurant. Many restaurants, especially those with a focus on baked goods or desserts, have an attached bakery or pastry shop where customers can purchase freshly baked bread, pastries, cakes, and other sweet treats.</p>
                        <div className="flex gap-x-7 items-center">
                            <div className="w-[79px] h-[44px] rounded-[10px] border flex justify-between items-center pl-6 px-3 border-[#C9AB81]">
                                <span>{count}</span>
                                <div className="flex flex-col">
                                    <button onClick={() => setCount(count + 1)}><MdKeyboardArrowUp /></button>
                                    <button onClick={() => setCount(count > 1 ? count - 1 : count)}><MdKeyboardArrowUp className="rotate-180" /></button>
                                </div>
                            </div>
                            <button onClick={() => {
                                storeItem(id); Swal.fire({ title: 'Success!', text: 'Food has benn added to cart. Press the button to continue', icon: 'success', confirmButtonText: 'Continue', background: '#C9AB81', customClass: { confirmButton: 'confirm-swal' } })
                            }} className="btn w-[150px] h-[44px] rounded-[10px] inter font-medium text-black bg-[#C9AB81] hover:text-[#C9AB81] hover:bg-black tra py-0 text-[16px]">Add To Card</button>
                        </div>
                        <div className="mt-8 space-y-3">
                            <p className="inter font-medium text-[16px] text-white">Availability: <span className="text-[#BABBC3]">N/A</span></p>
                            <p className="inter font-medium text-[16px] text-white">Category: <span className="pl-[.63rem] text-[#BABBC3]">Food</span></p>
                            <p className="inter font-medium text-[16px] text-white">Tags: <span className="text-[#BABBC3] pl-11">Fast Food, Faience Fry </span></p>
                        </div>
                    </div>
                </div>
                <div className="lg:pt-0 pt-[48rem] w-4/12 flex ">
                    <div onClick={() => setTrue(true)} className={`${truee ? 'text-black bg-[#C9AB81]' : 'text-white bg-transparent'} py-5 tra px-9 cursor-pointer rounded-l-[10px] border border-[#C9AB81]`}>
                        Description
                    </div>
                    <div onClick={() => setTrue(false)} className={`${!truee ? 'text-black bg-[#C9AB81]' : 'text-white bg-transparent'} py-5 tra px-9 cursor-pointer rounded-r-[10px] border border-[#C9AB81]`}>
                        Reviews
                    </div>
                </div>
                <div className={`${truee ? 'block' : 'hidden'}`}>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum earum doloribus blanditiis nulla labore minus praesentium tempore vero similique numquam voluptatum quia odit laudantium quod deserunt eum sit fuga cum omnis quam atque sapiente, aut at! Consectetur, a consequuntur? Ratione, totam deleniti animi suscipit nisi officia repellat, repellendus temporibus quo nostrum ipsam, perferendis alias. Ea sunt nisi eius quod odio excepturi labore, libero explicabo aliquam alias perferendis consequuntur sit soluta quos reprehenderit quas et eaque iusto eum voluptatibus exercitationem. Ipsum quae itaque maiores harum, nulla quasi impedit odio obcaecati recusandae neque quaerat dolorem consectetur quisquam assumenda esse architecto molestiae temporibus, modi, iste rem tenetur est. Possimus excepturi, fugiat neque sequi nostrum ipsam quae repudiandae odit adipisci repellat. Excepturi ut sit blanditiis odit veritatis quia et, ex facilis sunt corrupti, expedita numquam fuga culpa, magnam quas perspiciatis eos odio! Tenetur maxime labore numquam aliquid officia quas aliquam at sed accusantium, eum facilis ducimus natus iusto iure animi nemo ullam deleniti libero ex non modi soluta laboriosam corrupti ab? Quae sapiente at provident nisi veritatis, deleniti animi perferendis, ducimus, delectus nihil quibusdam distinctio ut dolorum deserunt in corrupti est pariatur asperiores! Vero explicabo pariatur quae sapiente vel et consectetur dolores dicta ratione.</p>
                </div>
                <div className={`${!truee ? 'block' : 'hidden'}`}>
                    <h4 className="text-[24px] font-medium playfair text-[#C9AB81]">Review For {data.name}</h4>
                    <div className="mt-9 flex gap-x-3 lg:gap-x-7">
                        <img className="" src="https://i.ibb.co.com/1G9TXbc/Image.png" alt="" />
                        <div className="bg-[#32312b] inter w-full rounded-[10px] flex lg:flex-row flex-col justify-evenly lg:justify-between px-8 items-center">
                            <div>
                                <h5 className="text-[18px] font-medium">Davide luice</h5>
                                <p className="text-[BABBC3] text-[16px]">May 10 2024</p>
                            </div>
                            <Rating
                                className="mb-3 mt-2"
                                style={{ maxWidth: 140 }}
                                value={parseInt(data.rating)}
                                // fill={'#ffffff'}
                                readOnly
                            />
                        </div>
                    </div>
                    <div className="mt-8">
                        <h4 className="playfair font-medium text-[24px] text-[#C9AB81]">Add Review</h4>
                        <p className="my-5 text-[16px] inter">Your Email Address Will Not be Published. Required Fields Are Marked.</p>
                        <Rating
                            className="mb-3 mt-2"
                            style={{ maxWidth: 140 }}
                            value={rate}
                            onChange={(event, newValue) => setRate(newValue)}
                        />
                    </div>
                    <form onSubmit={handleSubmit} className="mt-0 lg:mt-9 w-full">
                        <h4 className="inter text-[16px] mb-2">Your review</h4>
                        <textarea name="message" required rows={5} className="textarea textarea-bordered w-full border-[#C9AB81] bg-transparent"></textarea>
                        <h4 className="inter text-[16px] mb-2 mt-4">Your Name</h4>
                        <input name="name" required className="input input-bordered w-full border-[#C9AB81] bg-transparent" />
                        <h4 className="inter text-[16px] mb-2 mt-4">Your Email</h4>
                        <input name="email" type="email" required className="input input-bordered w-full border-[#C9AB81] bg-transparent" />
                        <p className="my-5 inter text-[16px]"><Checkbox {...label} />Save my name, email & website in this browser for the next time I comment</p>
                        <button className="btn w-[160px] h-[56px] rounded-[10px] inter font-medium text-[16px] bg-[#C9AB81] hover:bg-black text-black hover:text-[#C9AB81] tra">Submit</button>
                    </form>
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
            <Footer />
        </div>
    );
};

export default Food;