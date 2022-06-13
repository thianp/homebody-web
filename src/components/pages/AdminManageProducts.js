import fullLogo from "../../assets/images/full-logo.png";
import logo from "../../assets/images/logo.png";
import facebook from "../../assets/images/facebook.png";
import twitter from "../../assets/images/twitter.png";
import linkedin from "../../assets/images/linkedin.png";
import sofa from "../../assets/images/sofa.png";

function AdminManageProducts() {
  return (
    <>
      {/* ----- Admin header ----- */}
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
              <ul className="navbar-nav mr-auto w-25"></ul>
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
              </ul>
            </div>
          </div>
        </nav>
      </header>
      {/* ----- Container ----- */}
      <div className="container admin-container mt-3">
        <div className="row">
          {/* ----- Sidebar ----- */}
          <div className="col-2 admin-sidebar">
            <p className="desc-text">
              <strong>View orders</strong>
            </p>
            <p className="desc-text">
              <strong>Manage products</strong>
            </p>
          </div>
          {/* ----- Manage products ----- */}
          <div className="col-10">
            <div className="view-orders px-4">
              <div className="d-flex justify-content-between">
                <div className="d-flex align-items-center">
                  <h1 className="heading-text">Manage Products</h1>
                </div>
                <div className="d-flex align-items-center">
                  <button
                    className="white-button"
                    data-bs-toggle="modal"
                    data-bs-target="#addProductModal"
                  >
                    Add Product
                  </button>
                  {/* ----- Add product modal (open) ----- */}
                  <div
                    class="modal fade"
                    id="addProductModal"
                    tabindex="-1"
                    aria-labelledby="addProductModalLabel"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog">
                      <div class="modal-content pb-4 px-4 new-product-modal">
                        <button
                          type="button"
                          class="btn-close align-self-end m-2"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                        <div class="border-0 subheader-text">
                          <h2
                            class="modal-title mb-0"
                            id="addProductModalLabel"
                          >
                            New Product
                          </h2>
                        </div>

                        <div class="modal-body p-0">
                          <form>
                            <div className="form-group">
                              <label className="mt-3" for="nameTh">
                                Name (TH)
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="nameTh"
                                placeholder="Table"
                              />
                              <label className="mt-3" for="nameEn">
                                Name (EN)
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="nameEn"
                                placeholder="Table"
                              />
                              <label className="mt-3" for="descTh">
                                Description (TH)
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="descTh"
                                placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit ..."
                              />
                              <label className="mt-3" for="descEn">
                                Description (EN)
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="descEn"
                                placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit ..."
                              />
                              <label className="mt-3" for="price">
                                Price (THB)
                              </label>
                              <input
                                type="number"
                                className="form-control"
                                id="price"
                                placeholder="5,500"
                              />
                              <label className="mt-3" for="inventory">
                                Inventory
                              </label>
                              <input
                                type="number"
                                className="form-control"
                                id="inventory"
                                placeholder="23"
                              />
                              <label className="mt-3" for="category">
                                Category
                              </label>
                              <select
                                class="form-select"
                                id="category"
                                name="category"
                              >
                                <option value="exampleCategory">
                                  Dining room
                                </option>
                              </select>
                              <label className="mt-3" for="subcategory">
                                Subcategory
                              </label>
                              <select
                                class="form-select"
                                id="subcategory"
                                name="subcategory"
                              >
                                <option value="exampleSubcategory">
                                  Tables
                                </option>
                              </select>
                            </div>
                          </form>
                          <button className="white-button mt-4">
                            Add Product
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* ----- Add product modal (close) ----- */}
                </div>
              </div>
              <div class="container-fluid px-0">
                <div class="row label-row mx-0">
                  <div class="col">Product ID</div>
                  <div class="col">Name</div>
                  <div class="col">Category</div>
                  <div class="col">Price</div>
                  <div class="col">Inventory</div>
                  <div class="col"></div>
                </div>
                <div class="row order-row mx-0">
                  <div class="col">0000001</div>
                  <div class="col">Sofa</div>
                  <div class="col">Living rooms - sofas</div>
                  <div class="col">5,500 Baht</div>
                  <div class="col">23</div>
                  <div class="col">
                    <button
                      className="light-button"
                      data-bs-toggle="modal"
                      data-bs-target="#editProductModal"
                    >
                      Edit
                    </button>
                    {/* ----- Edit product modal (open) ----- */}
                    <div
                      class="modal fade"
                      id="editProductModal"
                      tabindex="-1"
                      aria-labelledby="editProductModalLabel"
                      aria-hidden="true"
                    >
                      <div class="modal-dialog">
                        <div class="modal-content pb-4 px-4 new-product-modal">
                          <button
                            type="button"
                            class="btn-close align-self-end m-2"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                          <div class="border-0 subheader-text">
                            <h2
                              class="modal-title mb-0"
                              id="editProductModalLabel"
                            >
                              Edit
                            </h2>
                          </div>

                          <div class="modal-body p-0">
                            <form>
                              <div className="form-group">
                                <label className="mt-3" for="nameTh">
                                  Name (TH)
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="nameTh"
                                  placeholder="Table"
                                />
                                <label className="mt-3" for="nameEn">
                                  Name (EN)
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="nameEn"
                                  placeholder="Table"
                                />
                                <label className="mt-3" for="descTh">
                                  Description (TH)
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="descTh"
                                  placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit ..."
                                />
                                <label className="mt-3" for="descEn">
                                  Description (EN)
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="descEn"
                                  placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit ..."
                                />
                                <label className="mt-3" for="price">
                                  Price (THB)
                                </label>
                                <input
                                  type="number"
                                  className="form-control"
                                  id="price"
                                  placeholder="5,500"
                                />
                                <label className="mt-3" for="inventory">
                                  Inventory
                                </label>
                                <input
                                  type="number"
                                  className="form-control"
                                  id="inventory"
                                  placeholder="23"
                                />
                                <label className="mt-3" for="category">
                                  Category
                                </label>
                                <select
                                  class="form-select"
                                  id="category"
                                  name="category"
                                >
                                  <option value="exampleCategory">
                                    Dining room
                                  </option>
                                </select>
                                <label className="mt-3" for="subcategory">
                                  Subcategory
                                </label>
                                <select
                                  class="form-select"
                                  id="subcategory"
                                  name="subcategory"
                                >
                                  <option value="exampleSubcategory">
                                    Tables
                                  </option>
                                </select>
                              </div>
                            </form>
                            <button className="white-button mt-4">
                              Save Changes
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* ----- Edit product modal (close) ----- */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminManageProducts;
