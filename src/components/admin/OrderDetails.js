import axios from "../../config/axios";
import { useEffect, useState } from "react";
import PurchaseHistoryItem from "../purchaseHistory/PurchaseHistoryItem";

function OrderDetails({
  orderId,
  date,
  total,
  status,
  orderItems,
  receipt,
  paymentId,
}) {
  const [newStatus, setNewStatus] = useState(null);

  useEffect(() => {
    const editStatus = async () => {
      try {
        await axios.patch("/payments/" + paymentId, { status: newStatus });
      } catch (err) {
        console.log(err);
      }
    };
    editStatus();
  }, [newStatus]);

  const handleChangeStatus = (input) => {
    setNewStatus(input);
  };

  return (
    <div className="row order-row mx-0">
      <div className="col">{orderId}</div>
      <div className="col">{date.slice(0, 10)}</div>
      <div className="col">{total.toLocaleString("en-US")} Baht</div>
      <div className="col">
        <button className="light-button status-dropdown dropdown-container">
          <a
            className="dropdown-toggle p-0"
            href="#"
            role="button"
            id="statusDropdown"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            defaultValue={status}
          >
            {status}
          </a>

          <ul className="dropdown-menu" aria-labelledby="statusDropdown">
            <li>
              <a
                className="dropdown-item"
                href="#"
                onClick={() => {
                  handleChangeStatus("PENDING");
                  window.location.reload(false);
                }}
              >
                <p>PENDING</p>
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                href="#"
                onClick={() => {
                  handleChangeStatus("COMPLETED");
                  window.location.reload(false);
                }}
              >
                <p>COMPLETED</p>
              </a>
            </li>
          </ul>
        </button>
      </div>
      <div className="col">
        <button
          id={orderId}
          className="light-button"
          data-bs-toggle="modal"
          data-bs-target={"#purchase" + orderId}
        >
          VIEW DETAILS
        </button>
        {/* ----- View details modal (open) ----- */}
        <div
          className="modal fade"
          id={"purchase" + orderId}
          tabindex="-1"
          aria-labelledby="viewDetailsModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content view-details-modal pb-4 px-4">
              <button
                type="button"
                className="btn-close btn-close-rel align-self-end m-2"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
              <div className="border-0 subheader-text">
                <h2 className="modal-title mb-0" id="viewDetailsModalLabel">
                  Purchase History
                </h2>
              </div>
              <div className="container-fluid px-0">
                <div className="row label-row mx-0">
                  <div className="col">Reference</div>
                  <div className="col">Date</div>
                  <div className="col">Total</div>
                  <div className="col">Payment Status</div>
                </div>
                <div className="row order-row mx-0">
                  <div className="col">{orderId}</div>
                  <div className="col">{date.slice(0, 10)}</div>
                  <div className="col">{total.toLocaleString("en-US")} Baht</div>
                  <div className="col">{status}</div>
                </div>
              </div>
              <div className="modal-body p-0">
                <div className="mt-4">
                  <div className="cart-items">
                    {orderItems.map((orderItem) => (
                      <PurchaseHistoryItem
                        image={orderItem.Product?.image1}
                        name={orderItem.Product.nameEn}
                        quantity={orderItem.quantity}
                        total={orderItem.quantity * orderItem.Product.price}
                      />
                    ))}
                  </div>
                  <hr />
                </div>
                <div className="row">
                  <div className="col-6">
                    <a
                      type="button"
                      className="white-button p-2"
                      href={receipt}
                      style={{ textDecoration: "none" }}
                    >
                      Download Receipt
                    </a>
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
  );
}

export default OrderDetails;
