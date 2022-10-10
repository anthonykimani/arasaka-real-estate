const Signup = () => {
    return ( 
        <div>
            <div className="bg-indigo-50">
        <div className="xl:px-20 md:px-10 sm:px-6 px-4 md:py-12 py-9 2xl:mx-auto 2xl:container md:flex items-center justify-center">
          <div className=" md:hidden sm:mb-8 mb-6">
            <h2></h2>
          </div>
          <div className="bg-white shadow-lg rounded  md:w-[100%] md:max-w-[800px] lg:w-[100%] lg:max-w-[1000px] flex flex-col lg:flex-row">
            <div className="md:w-[800px]  lg:w-[500px]">
              <img
                src={process.env.PUBLIC_URL + "/maasai.jpg"}
                alt=""
                className="lg:w-[100%] lg:h-[570px]"
              />
            </div>
            <div className="lg:w-[400px] flex flex-col items-center lg:px-10 sm:px-6 sm:py-10 xxs:py-4">
              <p
                tabIndex={0}
                className="focus:outline-none text-2xl font-extrabold leading-6 text-gray-800"
              >
                Create a new account
              </p>
              <p
                tabIndex={0}
                className="focus:outline-none text-sm mt-4 font-medium leading-none text-gray-500"
              >
                Do you an have account?{" "}
                <a
                  className="hover:text-gray-500 focus:text-gray-500 focus:outline-none focus:underline hover:underline text-sm font-medium leading-none text-gray-800 cursor-pointer"
                  onClick={handleLogin}
                >
                  {" "}
                  Login here
                </a>
              </p>
              <form onSubmit={handleSubmit} className="xxs:w-[250px] xsm:w-[400px] sm:w-[500px] md:w-[600px] lg:w-[300px] mt-5">
                <div>
                  <label
                    htmlFor="firstname"
                    className="text-sm font-medium leading-none text-gray-800"
                  >
                    {" "}
                    First Name{" "}
                  </label>
                  <input
                    id="firstname"
                    aria-labelledby="firstname"
                    name="first_name"
                    type="text"
                    className="bg-gray-200 border rounded text-xs font-medium leading-none placeholder-gray-800 text-gray-800 py-3 w-full pl-3 mt-2"
                    placeholder="e.g: John"
                    onChange={handleRegister}
                    value={register.first_name}
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastname"
                    className="text-sm font-medium leading-none text-gray-800"
                  >
                    {" "}
                    Last Name{" "}
                  </label>
                  <input
                    id="lastname"
                    aria-labelledby="lastname"
                    name="last_name"
                    type="text"
                    className="bg-gray-200 border rounded text-xs font-medium leading-none placeholder-gray-800 text-gray-800 py-3 w-full pl-3 mt-2"
                    placeholder="e.g: Doe "
                    onChange={handleRegister}
                    value={register.last_name}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="text-sm font-medium leading-none text-gray-800"
                  >
                    {" "}
                    Email{" "}
                  </label>
                  <input
                    id="email"
                    aria-labelledby="email"
                    name="email"
                    type="email"
                    className="bg-gray-200 border rounded text-xs font-medium leading-none placeholder-gray-800 text-gray-800 py-3 w-full pl-3 mt-2"
                    placeholder="e.g: john@gmail.com "
                    onChange={handleRegister}
                    value={register.email}
                  />
                </div>
                <div className="mt-6 w-full">
                  <label
                    htmlFor="myInput"
                    className="text-sm font-medium leading-none text-gray-800"
                  >
                    {" "}
                    Password{" "}
                  </label>
                  <div className="relative flex items-center justify-center">
                    <input
                      id="myInput"
                      name="password"
                      type={showpass ? "text" : "password"}
                      className="bg-gray-200 border rounded text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                      onChange={handleRegister}
                      value={register.password}
                    />
                  </div>
                </div>
                <div
                  className="mt-8"
                  style={login ? { display: "none" } : { display: "block" }}
                >
                  <label
                    htmlFor="myInput"
                    className="text-sm font-medium leading-none text-red-700"
                  >
                    Please SignUp or Login if you have an account
                  </label>
                </div>
                <div
                  className="mt-8"
                  style={login ? { display: "block" } : { display: "none" }}
                >
                  <label
                    htmlFor="myInput"
                    className="text-sm font-medium leading-none text-red-700"
                  >
                    Incorrect Login
                  </label>
                </div>
                <div className="mt-8">
                  <input
                    type="submit"
                    className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-blue-500 border rounded hover:bg-blue-600 py-4 w-full"
                    value="Create Account"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
        </div>
     );
}
 
export default Signup;