const Navbar = () => {
    return ( 
        <div className="flex justify-around items-center bg-white shadow-lg font-open py-3">
            <div className="">
                <img src={process.env.PUBLIC_URL + "/arasaka_logo.png"} alt="" className="min-w-[150px] max-w-[150px] object-contain" />
            </div>
            <div className="">
                <ul className="hidden sm:flex justify-around items-center font-bold">
                    <li className="px-2 text-xl text-gray-600">Home</li>
                    <li className="px-2 text-xl text-gray-600">Properties</li>
                    <li className="px-2 text-xl text-gray-600">Purchases</li>
                    <li className="px-2 text-xl text-gray-600"></li>
                </ul>
            </div>
            <div>
            <i className='bx bxs-user-circle bx-md text-gray-600'></i>
            </div>
        </div>
     );
}
 
export default Navbar;