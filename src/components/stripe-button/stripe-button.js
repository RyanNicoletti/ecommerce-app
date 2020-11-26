import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51HrYz6JmDb4eUqgaY6z26Zg6YCigmcZh2BO5Bn26yEytZtIRuAJGm462fOYVIekhADiBqtULcqtjNpMhzepr4beO00y2Srs02Y";
  const onToken = (token) => {
    console.log(token);
    alert("payment successful!");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="E-Comm App"
      billingAddres
      shippingAddress
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    ></StripeCheckout>
  );
};

export default StripeCheckoutButton;
