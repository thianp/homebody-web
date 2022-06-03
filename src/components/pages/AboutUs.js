import fullLogo from "../../assets/images/full-logo.png";
import logo from "../../assets/images/logo.png";
import facebook from "../../assets/images/facebook.png";
import twitter from "../../assets/images/twitter.png";
import linkedin from "../../assets/images/linkedin.png";

function AboutUs() {
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
      {/* ----- About us ----- */}
      <div className="about-us">
        <h1 className="heading-text">About Us</h1>
        <p className="desc-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
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

export default AboutUs;
