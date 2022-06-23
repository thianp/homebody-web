import { useEffect, useState } from "react";
import axios from "../../config/axios";
import OrderDetails from "../admin/OrderDetails";

function ViewOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await axios.get("/orders/all");
        console.log(res.data.orders);
        setOrders(res.data.orders);
      } catch (err) {
        console.log(err);
      }
    };
    fetchOrders();
  }, []);

  return (
    <>
      {/* ----- View Orders ----- */}
      <div className="col-10">
        <div className="view-orders px-4 pb-5">
          <h1 className="heading-text">View Orders</h1>
          <div class="container-fluid px-0">
            <div class="row label-row mx-0">
              <div class="col">Reference</div>
              <div class="col">Date</div>
              <div class="col">Total</div>
              <div class="col">Payment Status</div>
              <div class="col">Details</div>
            </div>
            {orders.map((order) => (
              <OrderDetails
                orderId={order.id}
                date={order.createdAt}
                total={order.total}
                paymentId={order.Payment?.id}
                status={order.Payment?.status}
                orderItems={order.OrderItems}
                receipt={order.Payment?.paymentSlip}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewOrders;
