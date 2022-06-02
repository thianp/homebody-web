import logo from "../../assets/images/homebody-logo.png";
import hangingLamps from "../../assets/images/hanging-lamps.png";
import bambooArmchair from "../../assets/images/bamboo-armchair.png";

function HomePage() {
  return (
    <>
      {/* ----- Header ----- */}
      <header className="mt-2">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid p-0">
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span>
                <i class="fa-solid fa-bars"></i>
              </span>
            </button>
            <div className="collapse navbar-collapse justify-content-between">
              <ul className="navbar-nav mr-auto w-25">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Products <i class="fas fa-chevron-down"></i>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    About Us
                  </a>
                </li>
              </ul>
              <a class="navbar-brand p-0" href="#">
                <img className="logo" src={logo}></img>
              </a>
              <ul className="navbar-nav ml-auto w-25 justify-content-end">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    En <i class="fas fa-chevron-down"></i>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <i class="fas fa-search"></i>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Log In
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      {/* ----- Landing page hero ----- */}
      <div className="landing-page-hero mt-2 container-fluid">
        <div className="row ">
          <div className="landing-page-text col-sm align-self-center px-5">
            <h1>Modern Minimal Furniture</h1>
            <p>
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
        <div className="subheader">
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
        <div className="subheader d-flex text-center flex-column">
          <h2>New Arrivals</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </p>
        </div>
        <div className="row row-cols-2 row-cols-md-4 mt-4">
          <div className="col">
            <div className="card border-0">
              <img className="card-img-top" src={bambooArmchair}></img>
              <div class="card-body product-details text-center">
                <h5 class="card-title">Bamboo Armchair</h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card border-0">
              <img className="card-img-top" src={bambooArmchair}></img>
              <div class="card-body product-details text-center">
                <h5 class="card-title">Bamboo Armchair</h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card border-0">
              <img className="card-img-top" src={bambooArmchair}></img>
              <div class="card-body product-details text-center">
                <h5 class="card-title">Bamboo Armchair</h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card border-0">
              <img className="card-img-top" src={bambooArmchair}></img>
              <div class="card-body product-details text-center">
                <h5 class="card-title">Bamboo Armchair</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ----- Footer ----- */}
      <footer>
        <div className="footer">
          <div className="logo d-flex justify-content-center">
            <img src={logo}></img>
          </div>
        </div>
      </footer>
    </>
  );
}

export default HomePage;
