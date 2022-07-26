import { useEffect, useState } from "react";
import axios from "../../config/axios";
import PurchaseHistoryDetails from "./PurchaseHistoryDetails";

function PurchaseHistoryContainer() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await axios.get("/orders/single");
        setOrders(res.data.orders);
      } catch (err) {
        console.log(err);
      }
    };
    fetchOrders();
  }, []);

  return (
    <div className="purchase-history">
      <h1 className="heading-text">
          Purchase History
      </h1>
      <div className="container-fluid">
        <div className="row label-row">
          <div className="col">Reference</div>
          <div className="col">Date</div>
          <div className="col">Total</div>
          <div className="col">Payment Status</div>
          <div className="col">Details</div>
        </div>
        {orders.map((order) => (
          <PurchaseHistoryDetails
            orderId={order.id}
            date={order.createdAt}
            total={order.total}
            status={order.Payment?.status}
            orderItems={order.OrderItems}
            receipt={order.Payment?.paymentSlip}
          />
        ))}
      </div>
    </div>
  );
}

export default PurchaseHistoryContainer;
