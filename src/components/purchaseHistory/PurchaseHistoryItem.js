function PurchaseHistoryItem({ image, name, quantity, total }) {
  return (
    <div className="row cart-item py-2">
      <div className="col-md-4">
        <img src={image}></img>
      </div>
      <div className="col-md-4 product-details p-0">
        <h5 className="product-name">{name}</h5>
        <button
          className="white-button quantity-dropdown mt-3 dropdown-container"
          disabled
        >
          Quantity: {quantity}
        </button>
      </div>
      <div className="col-md-4">
        <h6 className="product-price text-end">
          {total.toLocaleString("en-US")} Baht
        </h6>
      </div>
    </div>
  );
}

export default PurchaseHistoryItem;
