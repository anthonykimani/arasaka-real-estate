import Navbar from "../components/Navbar";
import PropertyCard from "../components/PropertyCard";

const Property = () => {
  return (
    <div className="flex justify-center bg-indigo-50 h-screen">
      <Navbar />
      <div className="mt-[100px] max-w-[800px] w-[100%]">
        <PropertyCard />
      </div>
    </div>
  );
};

export default Property;
