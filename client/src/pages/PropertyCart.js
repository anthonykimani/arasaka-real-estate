import Navbar from "../components/Navbar";

const PropertyCart = () => {
    return ( 
        <div className="bg-indigo-50 flex flex-col items-center md:h-[800px]">
            <Navbar />
            <div className="mt-[100px] bg-white max-w-[1000px] w-[100%] md:h-[600px] h-[100%] rounded-lg">
            <h1 className="font-work font-bold text-3xl p-5">Property Cart</h1>
            <div className="flex flex-col items-center md:flex-row md:justify-around md:h-[500px] ">
                <div className="max-w-[500px] w-[100%]">
                    <div className="flex flex-col justify-around md:h-[500px]">
                        <div className="border-2 flex justify-between max-w-[470px] w-[100%] rounded-xl py-3 px-5 m-3">
                            <div>
                                <h2 className="font-work font-bold text-2xl text-gray-500">Login</h2>
                                <h3 className="font-open font-light text-xl">user</h3>
                            </div>
                            <div className="">
                                <button className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-bold leading-none text-white focus:outline-none bg-blue-500 border rounded hover:bg-blue-600 py-3 px-5 w-full font-open ">Change</button>
                            </div>
                        </div>
                        <div className="">
                            <h2 className="font-work font-bold text-2xl m-5">payment method</h2>
                        </div>
                        <div className="flex justify-between items-center p-2">
                            <div>
                               <h2> Debit/ Credit Card</h2>
                            </div>
                            <div>
                                <button className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-bold leading-none text-white focus:outline-none bg-blue-500 border rounded hover:bg-blue-600 py-3 px-5 w-full font-open ">Pay $117.00</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-w-[400px] w-[100%] border-2 flex-col justify-around p-5 rounded-lg ">
                    <h2 className="font-work text-3xl font-bold">Your Order</h2>
                    <div className="flex flex-col items-center md:flex-row p-3 justify-around font-open">
                        <div>
                            <img src={process.env.PUBLIC_URL + "/minimalist.jpg"} alt="" className="md:max-w-[200px] w-[100%] rounded-lg" />
                        </div>
                        <div className="flex flex-col justify-around items-start md:items-center">
                            <h2>property name</h2>
                            <h3>location</h3>
                            <h3>price</h3>
                        </div>
                    </div>
                    <div className="flex justify-around p-5 font-bold font-open text-3xl md:mt-[200px]">
                        <h2>Total</h2>
                        <h2>117.00</h2>
                    </div>
                </div>
            </div>
        </div>
        </div>
     );
}
 
export default PropertyCart;