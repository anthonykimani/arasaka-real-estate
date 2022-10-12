const PropertyCard = ({
  img,
  property_name,
  property_description,
  price,
  location,
}) => {
  return (
    <div className="flex flex-col md:flex-row md:max-w-[1200px] md:w-[100%] bg-white font-jost text-gray-900 rounded-lg shadow-lg mt-[100px]">
      <div className="md:max-w-[600px] w-[100%]">
        <img
          src={process.env.PUBLIC_URL + img}
          alt=""
          className="object-cover max-w-[800px] w-[100%] md:max-w-[600px] md:h-[100%] md:min-h-[500px] rounded-t-md md:rounded-l-md md:rounded-t-none"
        />
      </div>
      <div className="max-w-[450px] w-[100%] flex justify-around py-3">
        <div className="max-w-[350px] w-[100%] flex flex-col justify-around">
          <h1 className="font-open font-bold text-3xl">{property_name}</h1>
          <h3>{property_description}</h3>
          <div className="flex flex-col md:flex-row justify-between">
            <div>
              <h3>{price}</h3>
              <h3>{location}</h3>
            </div>
            <div>
              <button className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-bold leading-none text-white focus:outline-none bg-blue-500 border rounded hover:bg-blue-600 py-3 px-5 w-full font-open ">
                Purchase
              </button>
            </div>
          </div>
          <h4>*prices may vary</h4>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
