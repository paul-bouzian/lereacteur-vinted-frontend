import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const PaymentForm = ({ title, price }) => {
  const [isPaying, setIsPaying] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [redirectTimeout, setRedirectTimeout] = useState(null);

  const navigate = useNavigate();

  // Va me servir à faire une requête à stripe pour faire le paiement
  const stripe = useStripe();
  //   Va me permettre de récupérer le contenu du PaymentElement
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsPaying(true);
    try {
      if (elements == null) return;

      const { error: submitError } = await elements.submit();

      if (submitError) {
        setErrorMessage(submitError.message);
        return;
      }

      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/v2/payment",
        {
          title: title,
          amount: price,
        },
      );

      const clientSecret = response.data.client_secret;

      const { error, paymentIntent } = await stripe.confirmPayment({
        elements: elements,
        clientSecret: clientSecret,
        confirmParams: {
          return_url: "http://localhost:5173/",
        },
        redirect: "if_required",
      });

      if (error) setErrorMessage(error.message);

      if (paymentIntent.status === "succeeded") {
        setSuccess(true);
        setRedirectTimeout(5);

        let intervalId = setInterval(() => {
          setRedirectTimeout((prev) => prev - 1);
        }, 1000);

        setTimeout(() => {
          clearInterval(intervalId);
          navigate("/");
        }, 5000);
      }
    } catch (error) {
      console.log(error);
    }
    setIsPaying(false);
  };

  return success ? (
    <p>
      Merci pour votre achat! Vous allez être redirigé dans {redirectTimeout}{" "}
      secondes...
    </p>
  ) : (
    <form onSubmit={handleSubmit}>
      <PaymentElement />

      <div className="mt-4 flex flex-col items-center">
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        <button
          type="submit"
          disabled={isPaying || !stripe || !elements}
          className="mt-4 w-full cursor-pointer rounded bg-teal-700 p-2 text-white hover:bg-teal-600"
        >
          {isPaying ? "Paiement en cours..." : "Payer"}
        </button>
      </div>
    </form>
  );
};

export default PaymentForm;
