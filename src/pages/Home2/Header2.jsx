import Navbar1 from "../Home1/Navbar1";
import Hero2 from "./Hero2";

const Header2 = () => {
    return (
        <div className="bg-[url(https://i.ibb.co.com/gtXX07R/Image-3.png)] bg-[#00000099] bg-cover bg-no-repeat">
            <div className="bg-[#000000D6]">
                <div className="max-w-[1500px] mx-auto px-4">
                    <Navbar1 outline={true} />
                    <Hero2 />
                </div>
            </div>
        </div>
    );
};

export default Header2;