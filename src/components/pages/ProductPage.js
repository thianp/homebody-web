import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import axios from "../../config/axios";

function ProductPage() {
  const [product, setProduct] = useState([]);
  const [selectedImg, setSelectedImg] = useState(null);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`/products/${id}`);
        setProduct(res.data.product);
        setSelectedImg(res.data.product.image1)
        // console.log(res.data.product);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProduct();
  }, []);

  const addCartItem = async () => {
    try {
      if (user) {
        await axios.post("/cartitems", { productId: id, quantity: 1 });
      } else {
        navigate("/login");
      }
    } catch (err) {
      console.log(err);
    }
  };

  if (!product) {
    return (
      <div className="listings-cover h-25">
        <div className="subheader-text">
          <h2>The page you are looking for does not exist</h2>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* ----- Product listing ----- */}
      <div className="container mt-5">
        <div className="row">
          {/* ----- Images ----- */}
          <div className="col-md-6 product-images">
            <div className="row">
              <div className="col-12 selected-img">
                <img src={selectedImg ? selectedImg : product.image1}></img>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-4 option-img">
                <img
                  className={
                    selectedImg === product.image1 ? null : "grayscale"
                  }
                  onClick={() => setSelectedImg(product.image1)}
                  src={product.image1}
                ></img>
              </div>
              <div className="col-4 option-img">
                <img
                  className={
                    selectedImg === product.image2 ? null : "grayscale"
                  }
                  onClick={() => setSelectedImg(product.image2)}
                  src={product.image2}
                ></img>
              </div>
              <div className="col-4 option-img">
                <img
                  className={
                    selectedImg === product.image3 ? null : "grayscale"
                  }
                  onClick={() => setSelectedImg(product.image3)}
                  src={product.image3}
                ></img>
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
              <button className="black-button" onClick={addCartItem}>
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductPage;
