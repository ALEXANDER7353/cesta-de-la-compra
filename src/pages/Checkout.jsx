import React, { useState } from "react";

function Checkout() {
  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: "",
    expirationDate: "",
    cvv: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentInfo({
      ...paymentInfo,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Procesando pago...", paymentInfo);
  };

  return (
    <div>
      <h1>Checkout</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Número de tarjeta:</label>
          <input
            type="text"
            name="cardNumber"
            value={paymentInfo.cardNumber}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Fecha de expiración:</label>
          <input
            type="text"
            name="expirationDate"
            value={paymentInfo.expirationDate}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>CVV:</label>
          <input
            type="text"
            name="cvv"
            value={paymentInfo.cvv}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Pagar</button>
      </form>
    </div>
  );
}

export default Checkout;
