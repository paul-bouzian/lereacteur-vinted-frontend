import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useLocation } from "react-router-dom";
import PaymentForm from "../components/Payment/PaymentForm";

const stripePromise = loadStripe(
  "pk_test_51HCObyDVswqktOkX6VVcoA7V2sjOJCUB4FBt3EOiAdSz5vWudpWxwcSY8z2feWXBq6lwMgAb5IVZZ1p84ntLq03H00LDVc2RwP",
);

const Payment = () => {
  const location = useLocation();
  const { title, price } = location.state;
  const finalPrice = price + 0.4 + 0.8;

  const options = {
    // Type de la transaction
    mode: "payment",
    // Le montant de la transaction (en centimes)
    amount: Number((price * 100).toFixed(0)),
    // Devise de la transaction
    currency: "eur",
  };

  return (
    <main className="h-full w-full bg-[#EBEDEE] pt-14">
      <section className="m-auto max-w-3xl rounded bg-white p-8">
        <div className="border-b border-slate-200 pb-16">
          <h3 className="mb-12 text-gray-500">Résumé de la commande</h3>
          <div className="flex flex-col gap-4 text-gray-600">
            <div className="flex justify-between">
              <p>Commande</p>
              <p>{price} €</p>
            </div>
            <div className="flex justify-between">
              <p>Frais protection acheteurs</p>
              <p>0.40 €</p>
            </div>
            <div className="flex justify-between">
              <p>Frais de port</p>
              <p>0.80 €</p>
            </div>
          </div>
        </div>

        <div className="pt-16">
          <div className="mb-12 flex justify-between text-xl font-semibold">
            <h2>Total</h2>
            <p>{finalPrice.toFixed(2)} €</p>
          </div>
          <p className="mb-14">
            Il ne reste plus qu'une étape pour vous offrir{" "}
            <span className="font-bold">{title}</span>. Vous allez payer{" "}
            <span className="font-bold">{finalPrice.toFixed(2)} €</span> (frais
            de protection et frais de port inclus).
          </p>
          <Elements stripe={stripePromise} options={options}>
            <PaymentForm
              title={title}
              price={Number((price * 100).toFixed(0))}
            />
          </Elements>
        </div>
      </section>
    </main>
  );
};

export default Payment;
