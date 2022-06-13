import hangingLamps from "../../assets/images/hanging-lamps.png";
import bambooArmchair from "../../assets/images/bamboo-armchair.png";

function HomePage() {
  return (
    <>
      {/* ----- Landing page hero ----- */}
      <div className="landing-page-hero mt-2 container-fluid">
        <div className="row ">
          <div className="landing-page-text col-sm align-self-center px-5">
            <h1 className="heading-text">Modern Minimal Furniture</h1>
            <p className="desc-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button className="black-button">Explore</button>
          </div>
          <div className="landing-page-image col-sm ">
            <img src={hangingLamps}></img>
          </div>
        </div>
        {/* <div className="geometric-pattern">
          <div className="white"></div>
          <div></div>
          <div></div>
          <div className="white"></div>
        </div> */}
      </div>
      {/* ----- Featured products ----- */}
      <div className="featured-products">
        <div className="subheader-text">
          <h2>Featured Products</h2>
        </div>
        <div className="container">
          <div className="row justify-content-between">
            <div className="col p-0">
              <div className="featured-product mx-auto">
                <div>
                  <img src={bambooArmchair}></img>
                </div>
                <div className="product-details d-flex justify-content-between">
                  <h5 className="product-name">Bamboo Armchair</h5>
                  <h5 className="product-price text-end">2,500 Baht</h5>
                </div>
              </div>
            </div>
            <div className="col p-0">
              <div className="featured-product mx-auto">
                <div>
                  <img src={bambooArmchair}></img>
                </div>
                <div className="product-details d-flex justify-content-between">
                  <h5 className="product-name">Bamboo Armchair</h5>
                  <h5 className="product-price text-end">2,500 Baht</h5>
                </div>
              </div>
            </div>
            <div className="col p-0">
              <div className="featured-product mx-auto">
                <div>
                  <img src={bambooArmchair}></img>
                </div>
                <div className="product-details d-flex justify-content-between">
                  <h5 className="product-name">Bamboo Armchair</h5>
                  <h5 className="product-price text-end">2,500 Baht</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center my-5">
          <button className="black-button">View All</button>
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
              <img className="card-img-top" src={bambooArmchair}></img>
              <div className="card-body product-details text-center">
                <h5 className="card-title">Bamboo Armchair</h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card border-0">
              <img className="card-img-top" src={bambooArmchair}></img>
              <div className="card-body product-details text-center">
                <h5 className="card-title">Bamboo Armchair</h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card border-0">
              <img className="card-img-top" src={bambooArmchair}></img>
              <div className="card-body product-details text-center">
                <h5 className="card-title">Bamboo Armchair</h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card border-0">
              <img className="card-img-top" src={bambooArmchair}></img>
              <div className="card-body product-details text-center">
                <h5 className="card-title">Bamboo Armchair</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
