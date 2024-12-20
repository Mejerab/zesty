import Banner from "./Banner";
import Footer from "./Home1/Footer";
import Navbar1 from "./Home1/Navbar1";
import News from "./Home1/News";

const Blog1 = () => {
    return (
        <div className="bg-[#0C1315]">
            <div className="max-w-[1500px] mx-auto px-4">
                <Navbar1 outline />
            </div>
            <Banner link={'blog1'} name={'Blog 1'} />
            <div className="py-24">
                <News />
            </div>
            <Footer />
        </div>
    );
};

export default Blog1;