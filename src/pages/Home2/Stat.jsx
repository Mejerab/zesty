import PropTypes from 'prop-types';
const Stat = ({top}) => {
    return (
        <div className="max-w-[1270px] mx-auto px-4">
            <div className={`relative ${top&&'-top-36'}`}>
                <img className="w-full h-fit lg:block hidden" src="https://i.ibb.co.com/T4vcj91/Image.png" alt="" />
                <div className="playfair flex lg:flex-row flex-col gap-y-6 lg:absolute top-0 left-14 items-center justify-center h-full gap-x-28">
                    <div className="border border-[#C9AB814d] backdrop-blur-[6px] text-center h-[130px] lg:h-[126px] w-[230px] lg:w-[196px] rounded-[10px]">
                        <p className="font-medium leading-[110%] text-[#C9AB81] text-[64px]">100+</p>
                        <h4 className="text-[20px] pt-2">Visitors Daily</h4>
                    </div>
                    <div className="border border-[#C9AB814d] backdrop-blur-[6px] text-center h-[130px] lg:h-[126px] w-[230px] lg:w-[196px] rounded-[10px]">
                        <p className="font-medium leading-[110%] text-[#C9AB81] text-[64px]">400+</p>
                        <h4 className="text-[20px] pt-2">Deliveries Monthly</h4>
                    </div>
                    <div className="border border-[#C9AB814d] backdrop-blur-[6px] text-center h-[130px] lg:h-[126px] w-[230px] lg:w-[196px] rounded-[10px]">
                        <p className="font-medium leading-[110%] text-[#C9AB81] text-[64px]">99%</p>
                        <h4 className="text-[20px] pt-2">Positive Feedback</h4>
                    </div>
                    <div className="border border-[#C9AB814d] backdrop-blur-[6px] text-center h-[130px] lg:h-[126px] w-[230px] lg:w-[196px] rounded-[10px]">
                        <p className="font-medium leading-[110%] text-[#C9AB81] text-[64px]">50+</p>
                        <h4 className="text-[20px] pt-2">Awards & Honors</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

Stat.propTypes = {
    top: PropTypes.bool,
}
export default Stat;