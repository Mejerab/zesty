import Swal from "sweetalert2";
import PointHook from "../../hooks/pointHook";

const Reserva1 = () => {
    const handleSubmit = e =>{
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
        else{
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
        <div className="bg-[url(https://i.ibb.co.com/bd6749m/Bg-3.png)] bg-bottom bg-cover bg-no-repeat">
            <div className="max-w-[1500px] mx-auto px-4 py-16 flex lg:flex-row flex-col gap-y-12 justify-between items-center">
                <div data-aos='fade-right' className="lg:w-2/5">
                    <PointHook text={'Reservation'} inter />
                    <h3 className="playfair leading-[120%] text-[37px] lg:text-[48px] font-medium text-[#C9AB81]">Hello! Reserve Your Own Personal Table</h3>
                    <p className="inter lg:w-[28rem] text-[16px]">Feel free to customize this information according to the specific details of the restaurant you&apos;re referring to! If you need more specific details. </p>
                </div>
                <form onSubmit={handleSubmit} data-aos='fade-left' className="bg-[#C9AB81] 2xl:w-[37%] lg:w-2/5 rounded-[10px]">
                    <div className="my-5 mx-5 space-y-4">
                        <div className="flex justify-between gap-x-5">
                            <input type="text" required placeholder="Your Name" name="" className="input rounded-[10px] bg-white placeholder:text-[#0C131599] text-[#0C131599] text-[16px] inter w-1/2" />
                            <input type="tel" required placeholder="Phone No" name="phone" className="input rounded-[10px] bg-white placeholder:text-[#0C131599] text-[#0C131599] text-[16px] inter w-1/2" />
                        </div>
                        <div className="flex justify-between gap-x-5">
                            <input type="email" required placeholder="Email Address" name="" className="input rounded-[10px] bg-white placeholder:text-[#0C131599] text-[#0C131599] text-[16px] inter w-1/2" />
                            <input type="date" name="" className="input rounded-[10px] bg-white placeholder:text-[#0C131599] text-[#0C131599] text-[16px] inter w-1/2" />
                        </div>
                        <textarea name="" required placeholder="Message" className="textarea w-full placeholder:text-[#0C131599] text-[#0C131599] text-[16px] inter bg-white" rows="5"></textarea>
                        <button className="w-full hover:bg-[#C9AB81] hover:text-black tra bg-black rounded-[10px] text-[18px] font-medium inter btn">Confirm Reservation</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Reserva1;