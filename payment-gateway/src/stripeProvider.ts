// Stripe integration (stub). Owner: Bhawna
import type { ChargeRequest, RefundRequest } from "./provider";

export const stripeProvider = {
  async charge(req: ChargeRequest) { return { ok: true, provider: "stripe", ...req }; },
  async refund(req: RefundRequest) { return { ok: true, provider: "stripe", ...req }; },
};
