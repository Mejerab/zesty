import Banner from "./Banner";
import Footer from "./Home1/Footer";
import Navbar1 from "./Home1/Navbar1";
import News2 from "./Home2/News2";

const Blog2 = () => {
    return (
        <div>
            <div className="bg-[#0C1315]">
                <div className="max-w-[1500px] mx-auto px-4">
                    <Navbar1 outline />
                </div>
                <Banner link={'blog2'} name={'Blog 2'} />
                <div className="py-24">
                    <News2 />
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default Blog2;