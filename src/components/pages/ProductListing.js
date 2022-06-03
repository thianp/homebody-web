import fullLogo from "../../assets/images/full-logo.png";
import logo from "../../assets/images/logo.png";
import facebook from "../../assets/images/facebook.png";
import twitter from "../../assets/images/twitter.png";
import linkedin from "../../assets/images/linkedin.png";
import coverImg from "../../assets/images/product-listing-cover.png";
import bambooChair from "../../assets/images/bamboo-chair.png";

function ProductListing() {
  return (
    <>
      {/* ----- Header ----- */}
      <header className="mt-2">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid p-0">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
              data-bs-target="navbarToggler"
            >
              <span>
                <i className="fa-solid fa-bars"></i>
              </span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-between"
              id="navbarToggler"
            >
              <ul className="navbar-nav mr-auto w-25">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item dropdown-container">
                  <a
                    className="btn dropdown-toggle nav-link"
                    href="#"
                    role="button"
                    id="productsDropdown"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Products
                  </a>
                  <ul
                    className="dropdown-menu p-3"
                    aria-labelledby="productsDropdown"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        <p>
                          <strong>New Arrivals</strong>
                        </p>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <p>Storage</p>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <p>Lighting</p>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <p>Rugs &#38; Flooring</p>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <p>Kitchenware</p>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <p>Bathroom</p>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <p>Beds &#38; Mattresses</p>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    About Us
                  </a>
                </li>
              </ul>
              <a className="navbar-brand p-0" href="#">
                <img className="logo" src={fullLogo}></img>
              </a>
              <ul className="navbar-nav ml-auto w-25 justify-content-end">
                <li className="nav-item dropdown-container">
                  <a
                    className="btn dropdown-toggle nav-link"
                    href="#"
                    role="button"
                    id="languagesDropdown"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    En
                  </a>
                  <ul
                    className="dropdown-menu p-3"
                    aria-labelledby="languagesDropdown"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        <p>English</p>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <p className="th-option">ไทย</p>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <i className="fas fa-search"></i>
                  </a>
                </li>
                {/* Guest user */}
                {/* <li className="nav-item">
                  <a className="nav-link" href="#">
                    Log In
                  </a>
                </li> */}
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <i className="fas fa-shopping-cart text-dark"></i>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <i className="fas fa-user-circle"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      {/* ----- Product listings cover ----- */}
      <div className="listings-cover">
        <div className="subheader-text">
          <h2>Living Room</h2>
        </div>
        <div className="cover-img">
          <img src={coverImg}></img>
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
          <div class="col-md-4 mt-3">
            <div className="card border-0">
              <img className="card-img-top" src={bambooChair}></img>
              <div className="product-details product-details d-flex justify-content-between">
                <h5 className="product-name">Bamboo Armchair</h5>
                <h5 className="product-price text-end">2,500 Baht</h5>
              </div>
            </div>
          </div>
          <div class="col-md-4 mt-3">
            <div className="card border-0">
              <img className="card-img-top" src={bambooChair}></img>
              <div className="product-details product-details d-flex justify-content-between">
                <h5 className="product-name">Bamboo Armchair</h5>
                <h5 className="product-price text-end">2,500 Baht</h5>
              </div>
            </div>
          </div>
          <div class="col-md-4 mt-3">
            <div className="card border-0">
              <img className="card-img-top" src={bambooChair}></img>
              <div className="product-details product-details d-flex justify-content-between">
                <h5 className="product-name">Bamboo Armchair</h5>
                <h5 className="product-price text-end">2,500 Baht</h5>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4 mt-3">
            <div className="card border-0">
              <img className="card-img-top" src={bambooChair}></img>
              <div className="product-details product-details d-flex justify-content-between">
                <h5 className="product-name">Bamboo Armchair</h5>
                <h5 className="product-price text-end">2,500 Baht</h5>
              </div>
            </div>
          </div>
          <div class="col-md-4 mt-3">
            <div className="card border-0">
              <img className="card-img-top" src={bambooChair}></img>
              <div className="product-details product-details d-flex justify-content-between">
                <h5 className="product-name">Bamboo Armchair</h5>
                <h5 className="product-price text-end">2,500 Baht</h5>
              </div>
            </div>
          </div>
          <div class="col-md-4 mt-3">
            <div className="card border-0">
              <img className="card-img-top" src={bambooChair}></img>
              <div className="product-details product-details d-flex justify-content-between">
                <h5 className="product-name">Bamboo Armchair</h5>
                <h5 className="product-price text-end">2,500 Baht</h5>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4 mt-3">
            <div className="card border-0">
              <img className="card-img-top" src={bambooChair}></img>
              <div className="product-details product-details d-flex justify-content-between">
                <h5 className="product-name">Bamboo Armchair</h5>
                <h5 className="product-price text-end">2,500 Baht</h5>
              </div>
            </div>
          </div>
          <div class="col-md-4 mt-3">
            <div className="card border-0">
              <img className="card-img-top" src={bambooChair}></img>
              <div className="product-details product-details d-flex justify-content-between">
                <h5 className="product-name">Bamboo Armchair</h5>
                <h5 className="product-price text-end">2,500 Baht</h5>
              </div>
            </div>
          </div>
          <div class="col-md-4 mt-3">
            <div className="card border-0">
              <img className="card-img-top" src={bambooChair}></img>
              <div className="product-details product-details d-flex justify-content-between">
                <h5 className="product-name">Bamboo Armchair</h5>
                <h5 className="product-price text-end">2,500 Baht</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ----- Show More ----- */}
      <div className="d-flex justify-content-center mt-5">
          <button className="black-button">Show More</button>
        </div>
      {/* ----- Footer ----- */}
      <footer>
        <div className="footer">
          <div className="logo d-flex">
            <img src={logo}></img>
          </div>
          <p className="desc-text">
            646 Phayathai rd., <br />
            Ratchatewi district <br />
            Bangkok 10400 <br />
            <br />
            Tel 02-333-3333
          </p>
          <div className="socmed-icons">
            <a href="#">
              <img src={facebook}></img>
            </a>
            <a href="#">
              <img src={twitter}></img>
            </a>
            <a href="#">
              <img src={linkedin}></img>
            </a>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <p className="desc-text">Copyright © 2022 Homebody</p>
        </div>
      </footer>
    </>
  );
}

export default ProductListing;
