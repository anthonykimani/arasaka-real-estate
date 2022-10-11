const PropertyCard = ({
  img,
  property_name,
  property_description,
  price,
  location,
}) => {
  return (
    <div className="flex flex-col md:flex-row md:max-w-[800px] md:w-[100%] bg-white md:max-h-[300px] font-jost text-gray-900 rounded-lg shadow-lg m-2">
      <div className="">
        <img
          src={process.env.PUBLIC_URL + "/couch.jpg"}
          alt=""
          className="object-cover max-w-[800px] w-[100%] md:max-w-[250px] max-h-[300px] rounded-t-md md:rounded-l-md md:rounded-t-none"
        />
      </div>
      <div className="max-w-[650px] w-[100%] flex justify-around">
        <div className="max-w-[550px] w-[100%] flex flex-col justify-around">
          <h1 className="font-open font-bold text-3xl">
            {property_name}property name
          </h1>
          <h3>{property_description}property description</h3>
          <div className="flex flex-col md:flex-row justify-between">
            <div>
              <h3>{price}price per property</h3>
              <h3>{location}location</h3>
            </div>
            <div>
              <button className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-bold leading-none text-white focus:outline-none bg-blue-500 border rounded hover:bg-blue-600 py-3 px-5 w-full font-open ">Purchase</button>
            </div>
          </div>
          <h4>*prices may vary</h4>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
