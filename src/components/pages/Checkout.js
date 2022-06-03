import fullLogo from "../../assets/images/full-logo.png";
import logo from "../../assets/images/logo.png";
import facebook from "../../assets/images/facebook.png";
import twitter from "../../assets/images/twitter.png";
import linkedin from "../../assets/images/linkedin.png";
import qrCode from "../../assets/images/promptpay-example.png";

function Checkout() {
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
      {/* ----- Promptpay QR code ----- */}
      <div className="align-items-center d-flex flex-column mt-5">
        <img className="payment-code" src={qrCode}></img>
        <div className="price-summary mt-4 d-flex justify-content-between">
          <h3 className="product-price align-self-baseline px-4">Total</h3>
          <h4 className="product-price align-self-baseline px-4">
            16,000 Baht
          </h4>
        </div>
        <button
          className="black-button mt-3"
          data-bs-toggle="modal"
          data-bs-target="#paymentConfirmationModal"
        >
          Upload Receipt
        </button>
        <div
          class="modal fade"
          id="paymentConfirmationModal"
          tabindex="-1"
          aria-labelledby="paymentConfirmationModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content pb-5">
              <button
                type="button"
                class="btn-close align-self-end m-2"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
              <div class="modal-header border-0 d-flex justify-content-center subheader-text ">
                <h2
                  class="modal-title text-center px-3 m-0"
                  id="paymentConfirmationModalLabel"
                >
                  Thank You For Your Purchase!
                </h2>
              </div>
              <div class="modal-body d-flex justify-content-center p-0 text-center">
                <p className="desc-text">
                  Your receipt was successfully uploaded.
                </p>
              </div>
            </div>
          </div>
        </div>
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

export default Checkout;
