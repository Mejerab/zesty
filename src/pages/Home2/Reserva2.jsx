import Swal from "sweetalert2";
import PointHook from "../../hooks/pointHook";

const Reserva2 = () => {
    const handleSubmit = e => {
        e.preventDefault();
        const phone = e.target.phone.value;
        if (!isNaN(phone)) {
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
                text: 'Input a valid number',
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
        <div className="bg-[url(https://i.ibb.co.com/MPFVnHj/Bg-1.png)] bg-cover bg-center bg-no-repeat">
            <div className="max-w-[1500px] mx-auto px-4 py-20 flex lg:flex-row flex-col justify-center items-center gap-x-8">
                <img className="lg:block hidden w-3/5 lg:h-[576.96px]" src="https://i.ibb.co.com/9rmb0L1/Image-4.png" alt="" />
                <div className="lg:w-2/5 grid gap-y-6">
                    <div>
                        <PointHook text={'Reservation'} inter />
                        <h3 className="text-[48px] leading-[120%] text-[#C9AB81] pt-3 font-medium playfair">Hi! Reserve Your Own Personal Table</h3>
                    </div>
                    <form onSubmit={handleSubmit} className="rounded-[10px] w-full h-[386px] space-y-4 bg-[#ffffff33] p-5">
                        <div className="h-[50px] flex gap-x-5">
                            <input type="text" placeholder="Your Name" className="input inter text-[16px] placeholder:text-[#0C131599] text-[#0C131599] w-full rounded-[10px] bg-white" />
                            <input type="tel" name="phone" placeholder="Phone No" className="input inter text-[16px] placeholder:text-[#0C131599] text-[#0C131599] w-full rounded-[10px] bg-white" />
                        </div>
                        <div className="h-[50px] flex gap-x-5">
                            <input type="email" placeholder="Email Address" className="input inter text-[16px] placeholder:text-[#0C131599] text-[#0C131599] w-full rounded-[10px] bg-white" />
                            <input type="date" className="input inter text-[16px] placeholder:text-[#0C131599] text-[#0C131599] lg:w-full w-[47%] rounded-[10px] bg-white" />
                        </div>
                        <div className="flex gap-x-5">
                            <textarea rows={4} placeholder="Message" className="textarea placeholder:text-[#0C131599] text-[#0C131599] w-full rounded-[10px] bg-white text-[16px] inter" />
                        </div>
                        <div className="h-[50px] flex">
                            <button className="btn w-full hover:bg-black hover:text-[#C9AB81] tra bg-[#C9AB81] text-black inter font-medium text-[18px] border-0">Confirm Reservation</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Reserva2;