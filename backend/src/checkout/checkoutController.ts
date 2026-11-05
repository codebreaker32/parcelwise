// Checkout API. Owner: Bhawna
// WIP: checkout no longer hard-wires Stripe; it receives a PaymentProvider.
import type { PaymentProvider } from "../../../payment-gateway/src/provider";

export async function checkout(provider: PaymentProvider, orderId: string, amount: number) {
  return provider.charge({ orderId, amount, currency: "INR" });
}
