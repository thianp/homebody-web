import { createContext, useContext, useEffect, useState } from "react";
import axios from "../config/axios";

const CategoriesContext = createContext();

function CategoriesContextProvider({ children }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get("/categories/cat");
        setCategories(res.data.categories);
      } catch (err) {
        console.log(err);
      }
    };
    fetchCategories();
  }, []);

  return (
    <CategoriesContext.Provider value={{ categories }}>
      {children}
    </CategoriesContext.Provider>
  );
}

export default CategoriesContextProvider;

export { CategoriesContext };
