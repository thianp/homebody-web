import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../../config/axios";

function ProductPage() {
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`/products/${id}`);
        setProduct(res.data.product);
        console.log(res.data.product);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProduct();
  }, []);

  return (
    <>
      {/* ----- Product listing ----- */}
      <div className="container mt-5">
        <div className="row">
          {/* ----- Images ----- */}
          <div className="col-md-6 product-images">
            <div className="row">
              <div className="col-12 selected-img">
                <img src={product.image1}></img>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-4 option-img">
                <img src={product.image1}></img>
              </div>
              <div className="col-4 option-img">
                <img className="grayscale" src={product.image2}></img>
              </div>
              <div className="col-4 option-img">
                <img className="grayscale" src={product.image3}></img>
              </div>
            </div>
          </div>
          {/* ----- Description ----- */}
          <div className="col-md-6 px-5">
            <div className="subheader-text">
              <h2>{product.nameEn}</h2>
              <div className="product-details">
                <p className="desc-text">{product.descEn}</p>
                <h5 className="product-price">
                  {product.price?.toLocaleString("en-US")} Baht
                </h5>
              </div>
            </div>
            <div className="d-flex justify-content-center mt-5">
              <button className="black-button">Add To Cart</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductPage;
