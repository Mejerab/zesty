
const SpecialFood1 = () => {
    return (
        <div className="bg-black pt-56 lg:pt-28 lg:pb-6 relative">
            <div className="max-w-[1500px] mx-auto">
                <img src="https://i.ibb.co.com/CVwLBWh/Special-Foods.png" className="w-full lg:block hidden" alt="" />
                <div className="grid gap-y-9 lg:grid-cols-4 justify-around w-full relative bottom-[7.5rem]">
                    <div data-aos='fade-right' className="stop-animation">
                        <img className="spin w-fit mx-auto" src="https://i.ibb.co.com/hK93Wcz/Image.png" alt="" />
                        <h4 className="corpo font-medium text-[32px] mt-5 text-center">Truffle Tango Pizza</h4>
                    </div>
                    <div data-aos='fade-down' className="stop-animation">
                        <img className="spin w-fit mx-auto" src="https://i.ibb.co.com/sjq6sZK/Image-1.png" alt="" />
                        <h4 className="corpo font-medium text-[32px] mt-5 text-center">Special Egg Fried</h4>
                    </div>
                    <div data-aos='fade-up' className="stop-animation">
                        <img className="spin w-fit mx-auto" src="https://i.ibb.co.com/hK93Wcz/Image.png" alt="" />
                        <h4 className="corpo font-medium text-[32px] mt-5 text-center">Spicy Supreme Pizza</h4>
                    </div>
                    <div data-aos='fade-left' className="stop-animation">
                        <img className="spin w-fit mx-auto" src="https://i.ibb.co.com/c82bGgv/Image-2.png" alt="" />
                        <h4 className="corpo font-medium text-[32px] mt-5 text-center">Chicken Salad Seeds</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpecialFood1;