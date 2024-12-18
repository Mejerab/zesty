import Banner from "./Banner";
import Footer from "./Home1/Footer";
import Navbar1 from "./Home1/Navbar1";
import Reserva1 from "./Home1/Reserva1";

const ReservaPage = () => {
    return (
        <div className="bg-[#0C1315]">
            <div className="max-w-[1500px] mx-auto px-4">
                <Navbar1 outline />
            </div>
            <Banner link={'/reservation'} name={'Reservation'} />
            <Reserva1 />
            <Footer />
        </div>
    );
};

export default ReservaPage;