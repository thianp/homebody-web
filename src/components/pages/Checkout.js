import { useEffect, useState, useContext } from "react";
import { ErrorContext } from "../../contexts/ErrorContext";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Modal } from "bootstrap";
import axios from "../../config/axios";

import qrCode from "../../assets/images/promptpay-example.png";
import Spinner from "../common/Spinner";

function Checkout() {
  const [order, setOrder] = useState({});
  const [file, setFile] = useState(null);
  const [paymentStatus, setPaymentStatus] = useState(""); // pending, submitting, successful
  const { setError } = useContext(ErrorContext);
  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    const fetchPayment = async () => {
      try {
        const payment = await axios.get("/payments/" + id);
        if (payment.data.payment) {
          setPaymentStatus("successful");
        }
      } catch (err) {
        setError(err.response.data.message);
      }
    };
    fetchPayment();
  });

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const res = await axios.get("/orders/single/" + id);
        setOrder(res.data.orders);
      } catch (err) {
        setError(err.response.data.message);
      }
    };
    fetchOrder();
  }, []);

  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    setPaymentStatus("submitting");
    e.preventDefault();
    try {
      if (!file) {
        setError("Please attach an image");
      } else {
        const formData = new FormData();
        formData.append("image", file);
        const res = await axios.post("/payments/" + id, formData);
        var myModal = new Modal(
          document.getElementById("paymentConfirmationModal")
        );
        myModal.show();
      }
    } catch (err) {
      setError(err.response.data.message);
    } finally {
      setPaymentStatus("successful");
    }
  };

  return (
    <>
      {paymentStatus === "submitting" && <Spinner />}
      {/* ----- Promptpay QR code ----- */}
      <div className="align-items-center d-flex flex-column mt-5">
        <img className="payment-code" src={qrCode}></img>
        <div className="price-summary mt-4 d-flex justify-content-between">
          <h3 className="product-price align-self-baseline px-4">Total</h3>
          <h4 className="product-price align-self-baseline px-4">
            {order.total?.toLocaleString("en-US")} Baht
          </h4>
        </div>
        {/* <div className="d-flex justify-content-center">
          <input type="file" ref={paymentSlipInputEl} onChange={handleChange} />
          <img src={file} />
        </div> */}
        <form
          className="d-flex flex-column justify-content-center"
          onSubmit={handleSubmit}
        >
          <div className="my-3 upload-receipt">
            <input
              className="form-control"
              type="file"
              id="formFile"
              onChange={handleChange}
            />
          </div>
          {paymentStatus === "successful" ? (
            <button className="white-button mt-3 mx-5 border-0" disabled>
              A receipt has already been uploaded
            </button>
          ) : (
            <button
              className="black-button mt-3 mx-5"
              type="submit"
              // data-bs-toggle="modal"
              // data-bs-target="#paymentConfirmationModal"
            >
              Submit Receipt
            </button>
          )}
        </form>
        <div
          class="modal fade"
          id="paymentConfirmationModal"
          tabindex="-1"
          aria-labelledby="paymentConfirmationModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content payment-confirmation-modal pb-5">
              <button
                type="button"
                class="btn-close align-self-end m-2"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
              <div class="modal-header border-0 d-flex justify-content-center subheader-text ">
                <h2 class="modal-title text-center px-3 m-0">
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
    </>
  );
}

export default Checkout;
