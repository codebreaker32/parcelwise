// Refunds (stub). Owners: Riya (support process) + Sam (code)
// Refunds must go back through the provider that took the payment.
import { stripeProvider } from "../../../payment-gateway/src/stripeProvider";

export async function refund(orderId: string, amount: number) {
  return stripeProvider.refund({ orderId, amount });
}
