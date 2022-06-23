import PurchaseHistoryItem from "./PurchaseHistoryItem";

function PurchaseHistoryDetails({
  orderId,
  date,
  total,
  status,
  orderItems,
  receipt,
}) {
  return (
    <div class="row order-row">
      <div class="col">{orderId}</div>
      <div class="col">{date.slice(0, 10)}</div>
      <div class="col">{total.toLocaleString("en-US")} Baht</div>
      <div class="col">{status}</div>
      <div class="col">
        <button
          id={orderId}
          className="light-button"
          data-bs-toggle="modal"
          data-bs-target={"#purchase" + orderId}
        >
          VIEW DETAILS
        </button>
        {/* ----- Open modal ----- */}
        <div
          class="modal fade"
          id={"purchase" + orderId}
          tabindex="-1"
          aria-labelledby="viewDetailsModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content view-details-modal pb-4 px-4">
              <button
                type="button"
                class="btn-close btn-close-rel align-self-end m-2"
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
                  <div class="col">{orderId}</div>
                  <div class="col">{date.slice(0, 10)}</div>
                  <div class="col">{total.toLocaleString("en-US")} Baht</div>
                  <div class="col">{status}</div>
                </div>
              </div>
              <div class="modal-body p-0">
                <div className="mt-4">
                  <div className="cart-items">
                    {orderItems.map((orderItem) => (
                      <PurchaseHistoryItem
                        image={orderItem.Product.image1}
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
                    <a type="button" className="white-button p-2" href={receipt} style={{textDecoration: "none"}}>
                        Download Receipt
                    </a>
                  </div>
                  <div className="col-6 text-end">
                    <h5 className="product-price mb-1">Total</h5>
                    <h6 className="product-price">
                      {orderItems
                        .reduce((prevVal, curVal) => {
                          return (
                            prevVal + curVal.Product.price * curVal.quantity
                          );
                        }, 0)
                        .toLocaleString("en-US")}{" "}
                      Baht
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ----- Close modal ----- */}
      </div>
    </div>
  );
}

export default PurchaseHistoryDetails;
