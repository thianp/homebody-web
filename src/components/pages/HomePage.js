import hangingLamps from "../../assets/images/hanging-lamps.png";
import bambooArmchair from "../../assets/images/bamboo-armchair.png";
import table from "../../assets/images/table.png";
import stool from "../../assets/images/stool.png";
import sofa from "../../assets/images/sofa.png";
import bambooChair from "../../assets/images/bamboo-chair.png";
import tables from "../../assets/images/tables.png";
import chairs from "../../assets/images/chairs.png";
import sofas from "../../assets/images/sofas.png";
import stools from "../../assets/images/stools.png";

function HomePage() {
  return (
    <>
      {/* ----- Landing page hero ----- */}
      <div className="landing-page-hero mt-2 container-fluid position-relative">
        <div className="row ">
          <div className="landing-page-text col-sm align-self-center px-5">
            <h1 className="heading-text">Modern Minimal Furniture</h1>
            <p className="desc-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button className="black-button">
              <a
                href="#featured-products"
                style={{ textDecoration: "none", color: "white" }}
              >
                Explore
              </a>
            </button>
          </div>
          <div className="landing-page-image col-sm">
            <img src={hangingLamps}></img>
          </div>
        </div>
        <div className="geometric-pattern">
          <div className="white"></div>
          <div></div>
          <div></div>
          <div className="white"></div>
        </div>
      </div>
      {/* ----- Featured products ----- */}
      <div id="featured-products" className="featured-products mt-5 pt-3">
        <div className="subheader-text">
          <h2>Featured Products</h2>
        </div>
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-md-5 p-0">
              <div className="featured-product">
                <div className="w-100">
                  <img className="w-100" src={bambooArmchair}></img>
                </div>
                <div className="product-details d-flex justify-content-between">
                  <h5 className="product-name">Bamboo Armchair</h5>
                  <h5 className="product-price text-end">2,500 Baht</h5>
                </div>
              </div>
            </div>
            <div className="col-md-3 p-0 d-flex flex-column justify-content-between">
                <div className="card border-0">
                  <img className="card-img-top" src={table}></img>
                  <div className="product-details product-details d-flex justify-content-between">
                    <h5 className="product-name">Table</h5>
                    <h5 className="product-price text-end">7,200 Baht</h5>
                  </div>
                </div>
                <div className="card border-0">
                  <img className="card-img-top" src={stool}></img>
                  <div className="product-details product-details d-flex justify-content-between">
                    <h5 className="product-name">Stool</h5>
                    <h5 className="product-price text-end">1,100 Baht</h5>
                  </div>
                </div>
            </div>
            <div className="col-md-3 p-0 d-flex flex-column justify-content-between">
                <div className="card border-0">
                  <img className="card-img-top" src={sofa}></img>
                  <div className="product-details product-details d-flex justify-content-between">
                    <h5 className="product-name">Sofa</h5>
                    <h5 className="product-price text-end">8,800 Baht</h5>
                  </div>
                </div>
                <div className="card border-0">
                  <img className="card-img-top" src={bambooChair}></img>
                  <div className="product-details product-details d-flex justify-content-between">
                    <h5 className="product-name">Bamboo Chair</h5>
                    <h5 className="product-price text-end">1,500 Baht</h5>
                  </div>
                </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center my-5">
          {/* <button className="black-button">View All</button> */}
        </div>
      </div>
      {/* ----- New Arrivals ----- */}
      <div className="new-arrivals">
        <div className="subheader-text d-flex text-center flex-column">
          <h2>New Arrivals</h2>
          <p className="desc-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </p>
        </div>
        <div className="row row-cols-2 row-cols-md-4 mt-4">
          <div className="col">
            <div className="card border-0">
              <img className="card-img-top" src={tables}></img>
              <div className="card-body product-details text-center">
                <h5 className="card-title">Tables</h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card border-0">
              <img className="card-img-top" src={chairs}></img>
              <div className="card-body product-details text-center">
                <h5 className="card-title">Chairs</h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card border-0">
              <img className="card-img-top" src={sofas}></img>
              <div className="card-body product-details text-center">
                <h5 className="card-title">Sofas</h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card border-0">
              <img className="card-img-top" src={stools}></img>
              <div className="card-body product-details text-center">
                <h5 className="card-title">Stools</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
