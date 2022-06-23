import { createContext, useContext, useEffect, useState } from "react";
import axios from "../config/axios";

const AddressContext = createContext();

function AddressContextProvider({ children }) {
  const [address, setAddress] = useState({
    provinces: [],
    amphures: [],
    districts: [],
    postalCodes: '',
  });

  useEffect(() => {
    const fetchProvinces = async () => {
      try {
        const res = await axios.get("/address/provinces");
        setAddress((address) => ({
          ...address,
          provinces: res.data.provinces,
        }));
      } catch (err) {
        console.log(err);
      }
    };
    fetchProvinces();
  }, []);

  return (
    <AddressContext.Provider value={{ address, setAddress }}>
      {children}
    </AddressContext.Provider>
  );
}

export default AddressContextProvider;

export { AddressContext };
