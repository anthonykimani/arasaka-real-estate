import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import DisplayPropertyCard from "../components/DisplayPropertyCard";

const Property = () => {
  //initial state for properties
  const [properties, setProperties] = useState([]);

  //fetching properties
  useEffect(() => {
    const getProperties = async () => {
      let response = await fetch("http://localhost:3000/properties");
      response = await response.json();
      await console.log(response);
      setProperties(response);
      //   const data = await console.log(data);
    };
    getProperties();
  }, []);

  return (
    <div className="flex justify-center bg-indigo-50 h-100%">
      <Navbar />
        <div className="mt-[100px] mx-2 max-w-[1100px] w-[100%] flex items-center flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-3">
          {properties.map((property) => (
            <DisplayPropertyCard
              img={property.image}
              property_name={property.property_name}
              price={property.price}
              location={property.location}
            />
          ))}
        </div>
    </div>
  );
};

export default Property;
