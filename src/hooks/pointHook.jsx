import PropTypes from 'prop-types';
const PointHook = ({text, inter, black}) => {
    return (
        <div className="flex gap-x-5">
            <div className="relative ml-4">
                <div className={`${black ? 'bg-black' : 'bg-[#C9AB81]'} w-[22px] h-[22px]`}></div>
                <div className="absolute top-3 -left-3 bg-transparent border border-white w-[24px] h-[24px]"></div>
            </div>
            <p className={`text-2xl font-medium mt-1 ${black ?'text-black': 'text-[#C9AB81]'} ${inter?'inter':'playfair'}`}>{text}</p>
        </div>
    );
};
PointHook.propTypes = {
    text: PropTypes.string,
    inter: PropTypes.bool,
    black: PropTypes.bool,
}
export default PointHook;