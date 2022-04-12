import { Button } from "@material-ui/core";
import React from "react";
import axios from "axios";
import StripeCheckout from "react-stripe-checkout";

const KEY = "test";

export default function Pay() {
  const [stripeToken, setStripeToken] = React.useState(null);
  const onToken = (token) => {
    setStripeToken(token);
  };
  React.useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await axios.post(
          "http://localhost:5000/api/checkout/payment",
          {
            tokenId: stripeToken.id && stripeToken.id,
            amount: 2000,
          }
        );
        console.log(res.data);
      } catch (error) {
        console.log("something wrong", error);
      }
    };
    stripeToken && makeRequest();
  }, [stripeToken]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100%",
      }}
    >
      <StripeCheckout
        name="goShop"
        billingAddress
        shippingAddress
        description="your total is 20$"
        amount={2000}
        token={onToken}
        stripeKey={KEY}
      >
        <Button variant="outlined" color="primary">
          Pay
        </Button>
      </StripeCheckout>
    </div>
  );
}
