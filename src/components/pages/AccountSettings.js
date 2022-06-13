import fullLogo from "../../assets/images/full-logo.png";
import logo from "../../assets/images/logo.png";
import facebook from "../../assets/images/facebook.png";
import twitter from "../../assets/images/twitter.png";
import linkedin from "../../assets/images/linkedin.png";
import sofa from "../../assets/images/sofa.png";

function AccountSettings() {
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
      {/* ----- Account settings ----- */}
      <div className="register">
        <h1 className="heading-text">Account</h1>
        <form>
          <div className="form-group">
            <label className="mt-3" for="firstName">
              First name
            </label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              placeholder="John"
            />
            <label className="mt-3" for="lastName">
              Last name
            </label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              placeholder="Doe"
            />
            <label className="mt-3" for="email">
              Email (username)
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="name@example.com"
              readOnly
            />
            <label className="mt-3" for="phoneNumber">
              Phone number
            </label>
            <input
              type="text"
              className="form-control"
              id="phoneNumber"
              placeholder="088040XXXX"
            />
            <label className="mt-3" for="password">
              Current password (required)
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="********"
            />
            <label className="mt-3" for="confirmPassword">
              New password
            </label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              placeholder="********"
            />
          </div>
          <div className="subheader-text mt-5">
            <h2>Shipping Address</h2>
          </div>
          <label className="mt-3" for="addressLine1">
            Address line 1
          </label>
          <input
            type="text"
            className="form-control"
            id="addressLine1"
            placeholder="646 Phayathai rd."
          />
          <label className="mt-3" for="province">
            Provinces
          </label>
          <select class="form-select" id="province" name="province">
            <option value="exampleProvince">Example province</option>
          </select>
          <label className="mt-3" for="district">
            District
          </label>
          <select class="form-select" id="district" name="district">
            <option value="exampleDistrict">Example district</option>
          </select>
          <label className="mt-3" for="amphoe">
            Amphoe
          </label>
          <select class="form-select" id="amphoe" name="amphoe">
            <option value="exampleAmphoe">Example amphoe</option>
          </select>
          <label className="mt-3" for="postalCode">
            Postal code
          </label>
          <select class="form-select" id="postalCode" name="postalCode">
            <option value="examplePostalCode">Example postal code</option>
          </select>
        </form>
        <button className="white-button px-5 mt-5">Save Changes</button>
      </div>
      {/* ----- Purchase history ----- */}
      <div className="purchase-history">
        <h1 className="heading-text">Purchase History</h1>
        <div class="container-fluid">
          <div class="row label-row">
            <div class="col">Reference</div>
            <div class="col">Date</div>
            <div class="col">Total</div>
            <div class="col">Payment Status</div>
            <div class="col">Details</div>
          </div>
          <div class="row order-row">
            <div class="col">0000001</div>
            <div class="col">7/8/2021</div>
            <div class="col">17,050 Baht</div>
            <div class="col">Pending</div>
            <div class="col">
              <button
                className="light-button"
                data-bs-toggle="modal"
                data-bs-target="#viewDetailsModal"
              >
                VIEW DETAILS
              </button>
              {/* ----- Open modal ----- */}
              <div
                class="modal fade"
                id="viewDetailsModal"
                tabindex="-1"
                aria-labelledby="viewDetailsModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content view-details-modal pb-4 px-4">
                    <button
                      type="button"
                      class="btn-close align-self-end m-2"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                    <div class="border-0 subheader-text">
                      <h2 class="modal-title mb-0" id="viewDetailsModalLabel">
                        Purchase History
                      </h2>
                    </div>
                    <div class="container-fluid px-0">
                      <div class="row label-row mx-0">
                        <div class="col">Reference</div>
                        <div class="col">Date</div>
                        <div class="col">Total</div>
                        <div class="col">Payment Status</div>
                      </div>
                      <div class="row order-row mx-0">
                        <div class="col">0000001</div>
                        <div class="col">7/8/2021</div>
                        <div class="col">17,050 Baht</div>
                        <div class="col">Pending</div>
                      </div>
                    </div>
                    <div class="modal-body p-0">
                      <div className="mt-4">
                        <div className="cart-items">
                          <div className="row cart-item py-2">
                            <div className="col-md-4">
                              <img src={sofa}></img>
                            </div>
                            <div className="col-md-4 product-details p-0">
                              <h5 className="product-name">Sofa</h5>
                              <button
                                className="white-button quantity-dropdown mt-3 dropdown-container"
                                disabled
                              >
                                Quantity: 1
                              </button>
                            </div>
                            <div className="col-md-4">
                              <h6 className="product-price text-end">
                                2,500 Baht
                              </h6>
                            </div>
                          </div>
                        </div>
                        <hr />
                      </div>
                      <div className="row">
                        <div className="col-6">
                          <button className="white-button p-2">
                            Download Receipt
                          </button>
                        </div>
                        <div className="col-6 text-end">
                          <h5 className="product-price mb-1">Total</h5>
                          <h6 className="product-price">16,000 Baht</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* ----- Close modal ----- */}
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

export default AccountSettings;
