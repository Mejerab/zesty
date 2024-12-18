import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const Banner = ({link, name}) => {
    return (
        <div className="bg-[url(https://i.ibb.co.com/RbtfH8F/Bg-2.png)] bg-cover bg-right bg-no-repeat h-[400px]">
            <div className="playfair font-medium gap-y-3 flex justify-center h-full px-4 flex-col max-w-[1500px] mx-auto">
                <h4 className="text-[#C9AB81] text-[65px] lg:text-[80px] leading-[106%]">{name}</h4>
                <p className="text-[24px]"><Link to='/'>Home</Link> / <Link to={link}>{name}</Link></p>
            </div>
        </div>
    );
};

Banner.propTypes = {
    link: PropTypes.string,
    name: PropTypes.string,
}
export default Banner;