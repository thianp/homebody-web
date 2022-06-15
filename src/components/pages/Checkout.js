import qrCode from "../../assets/images/promptpay-example.png";
import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import axios from "../../config/axios";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const [order, setOrder] = useState({});
  const [file, setFile] = useState(null);
  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const res = await axios.get("/orders/" + id);
        setOrder(res.data.orders);
      } catch (err) {
        console.log(err);
      }
    };
    fetchOrder();
  }, []);

  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const formData = new FormData();
      formData.append('image', file);
      const res = await axios.post('/payments/' + id, formData);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  }

  // const makePayment = async () => {
  //   try {
  //     const formData = new FormData();
  //     formData.append("image", file);
  //     await axios.post("/payments/" + id);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  return (
    <>
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
          {/* --- */}
          <button
            className="black-button mt-3 mx-5"
            type="submit"
            data-bs-toggle="modal"
            data-bs-target="#paymentConfirmationModal"
          >
            Submit Receipt
          </button>
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
                onClick={navigate('/profile')}
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
    </>
  );
}

export default Checkout;
