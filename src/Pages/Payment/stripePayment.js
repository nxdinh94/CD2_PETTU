import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { myStripePaymentApi } from "~/utils/stripePayment";
import "./stripePayment.scss";


const StripePaymentForm = ({money, currency, onClick, userId, paymentMethod, paymentProduct}) => {
    const stripe = useStripe();
    const elements = useElements();
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const newData = paymentProduct.slice(1).map(item => ({
        name: item.name,  // Đổi productName -> name
        price: item.intoMoney,  // Đổi intoMoney -> price
        quantity: item.quantity  // Giữ nguyên quantity
      }));
      

      const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);

        try {
            // Gửi tổng tiền, danh sách sản phẩm, loại tiền lên server
            const { clientSecret } = await myStripePaymentApi({money, newData, currency});

            const result = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: elements.getElement(CardElement),
                },
            });
            

            if (result.error) {
                setMessage(result.error.message);
            } else {
                setMessage("Thanh toán thành công!");
                onClick(userId, paymentMethod, paymentProduct);
            }
        } catch (error) {
            setMessage("Lỗi khi thanh toán!");
        }

        setLoading(false);
    };
    
    

    return (
        <div className="payment-form">
            <h2>Stripe Payment</h2>
            <form onSubmit={handleSubmit}>
                <div className="card-element">
                    <CardElement  />
                </div>
                <button type="submit" className="btn-button" disabled={!stripe || !elements || loading}>
                    {loading ? "Processing..." : "Pay"}
                </button>
            </form>
            {message && <p className="message">{message}</p>}
        </div>
    );
};

export default StripePaymentForm;
