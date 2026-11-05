// Checkout page (stub). Owner: Aman
import { PaymentButton } from "../components/PaymentButton";

export function Checkout({ cartTotal }: { cartTotal: number }) {
  return (
    <main>
      <h1>Checkout</h1>
      <p>Total: ₹{cartTotal}</p>
      <PaymentButton amount={cartTotal} provider="stripe" />
    </main>
  );
}
