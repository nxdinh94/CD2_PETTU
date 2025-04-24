import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { myStripePaymentApi } from "~/axios_node";
import "./PayBtn.scss";


const PayBtn = ({money, currency, onClick, userId, paymentMethod, paymentProduct}) => {
    const stripe = useStripe();
    const elements = useElements();
    const [loading, setLoading] = useState(false);
    const newData = paymentProduct.slice(1).map(item => ({
        name: item.name,  // Đổi productName -> name
        price: item.intoMoney,  // Đổi intoMoney -> price
        quantity: item.quantity  // Giữ nguyên quantity
      }));

    return (
         <button onClick={()=>onClick(userId, paymentMethod, paymentProduct)} type="submit" className="btn-button" disabled={!stripe || !elements || loading}>
            {loading ? "Processing..." : "Pay"}
        </button>
        
    );
};

export default PayBtn;
