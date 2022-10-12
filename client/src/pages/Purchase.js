import { useState, useEffect, useContext } from "react";
import Navbar from "../components/Navbar";
import { AppContext } from "../contexts/AppContext";

const Purchase = () => {

    const [ properties, setProperties ] = useState([]);
    const { user } = useContext(AppContext);

    //fetch purchased properties
    useEffect(()=>{
        const fetchProperties = async()=>{
            let response = await fetch("http://localhost:3000/purchases")
            response = await response.json()
            await setProperties(response)
        }
        fetchProperties();
    },[])
    
    // console.log(properties);

    const filteredProperties = properties.filter((property)=>{
        return property.user_id == user.id
    })

    // console.log(filteredProperties);

    return ( 
        <div>
            <Navbar />

        </div>
     );
}
 
export default Purchase;