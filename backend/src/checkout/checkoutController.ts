// Checkout API (stub). Owner: Sam
import { stripeProvider } from "../../../payment-gateway/src/stripeProvider";

export async function checkout(orderId: string, amount: number) {
  // Stripe is hard-wired here today; the refactor (projects/payment-gateway-refactor.md) removes this.
  return stripeProvider.charge({ orderId, amount, currency: "INR" });
}
