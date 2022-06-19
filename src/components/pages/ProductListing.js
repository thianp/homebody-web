import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "../../config/axios";
import { ErrorContext } from "../../contexts/ErrorContext";

function ProductListing() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  let { id } = useParams();

  const [curCat, setCurCat] = useState();

  const { setError } = useContext(ErrorContext);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(`/products/cat/${id}`);
        setProducts(res.data.products);
      } catch (err) {
        setError();
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    const fetchCat = async () => {
      try {
        const res = await axios.get(`/categories/cat/${id}`);
        setCurCat(res.data.categories);
      } catch (err) {
        console.log(err);
      }
    };
    fetchCat();
  }, []);

  console.log(curCat);

  if (!curCat) {
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
      {/* ----- Product listings cover ----- */}
      <div className="listings-cover">
        <div className="subheader-text">
          <h2>{curCat?.nameEn}</h2>
        </div>
        <div className="cover-img">
          <img src={curCat?.coverImage}></img>
        </div>
      </div>
      {/* ----- Product filter ----- */}
      <div class="dropdown filter-dropdown d-flex justify-content-end mt-4">
        <a
          class="btn dropdown-toggle"
          href="#"
          role="button"
          id="filterDropdown"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Sort By: Price (Low to High)
        </a>

        <ul class="dropdown-menu" aria-labelledby="filterDropdown">
          <li>
            <a class="dropdown-item" href="#">
              Sort By: Price (Low to High)
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              Sort By: Price (High to Low)
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              Sort By: Name (A to Z)
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              Sort By: Name (Z to A)
            </a>
          </li>
        </ul>
      </div>
      {/* ----- Product listings ----- */}
      <div class="container product-listings">
        <div class="row">
          {products.map((product) => (
            <div
              class="col-md-4 mt-3"
              onClick={() => navigate("/product/" + product.id)}
            >
              <div className="card border-0">
                <img className="card-img-top" src={product.image1}></img>
                <div className="product-details product-details d-flex justify-content-between">
                  <h5 className="product-name">{product.nameEn}</h5>
                  <h5 className="product-price text-end">
                    {product.price.toLocaleString("en-US")} Baht
                  </h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* ----- Show More ----- */}
      {/* <div className="d-flex justify-content-center mt-5">
          <button className="black-button">Show More</button>
        </div> */}
    </>
  );
}

export default ProductListing;
