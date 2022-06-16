import fullLogo from "../../assets/images/full-logo.png";
import sofa from "../../assets/images/sofa.png";

function ViewOrders() {
  return (
    <>
      {/* ----- View Orders ----- */}
      <div className="col-10">
        <div className="view-orders px-4">
          <h1 className="heading-text">View Orders</h1>
          <div class="container-fluid px-0">
            <div class="row label-row mx-0">
              <div class="col">Reference</div>
              <div class="col">Date</div>
              <div class="col">Total</div>
              <div class="col">Payment Status</div>
              <div class="col">Details</div>
            </div>
            <div class="row order-row mx-0">
              <div class="col">0000001</div>
              <div class="col">7/8/2021</div>
              <div class="col">17,050 Baht</div>
              <div class="col">
                <button className="light-button status-dropdown  dropdown-container">
                  <a
                    className="dropdown-toggle p-0"
                    href="#"
                    role="button"
                    id="statusDropdown"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    PENDING
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="statusDropdown"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        <p>PENDING</p>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <p>COMPLETED</p>
                      </a>
                    </li>
                  </ul>
                </button>
              </div>
              <div class="col">
                <button
                  className="light-button"
                  data-bs-toggle="modal"
                  data-bs-target="#viewDetailsModal"
                >
                  VIEW DETAILS
                </button>
                {/* ----- View details modal (open) ----- */}
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
                {/* ----- View details modal (close) ----- */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewOrders;
