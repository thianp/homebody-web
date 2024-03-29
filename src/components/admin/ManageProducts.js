import { useEffect, useState } from "react";
import axios from "../../config/axios";
import AddProduct from "./AddProduct";
import EditProduct from "./EditProduct";

function ManageProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("/products/cat");
        setProducts(res.data.products);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProducts();
  }, []);

  return (
    <>
      <div className="col-10">
        <div className="view-orders px-4 pb-5">
          <div className="d-flex justify-content-between">
            <div className="d-flex align-items-center">
              <h1 className="heading-text">Manage Products</h1>
            </div>
            <AddProduct />
          </div>
          <div className="container-fluid px-0">
            <div className="row label-row mx-0">
              <div className="col">Product ID</div>
              <div className="col">Name</div>
              <div className="col">Category</div>
              <div className="col">Price</div>
              <div className="col">Inventory</div>
              <div className="col"></div>
            </div>
            {products.map((product) => (
              <EditProduct
                id={product.id}
                nameEn={product.nameEn}
                nameTh={product.nameTh}
                descTh={product.descTh}
                descEn={product.descEn}
                category={product.Category.nameEn}
                price={product.price}
                inventory={product.inventory}
                image1={product.image1}
                image2={product.image2}
                image3={product.image3}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ManageProducts;
