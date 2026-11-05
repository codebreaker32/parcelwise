// Payment provider types. Owner: Bhawna
// WIP (refactor/payment-provider-interface): one interface for every provider.
export type ChargeRequest = { orderId: string; amount: number; currency: "INR" };
export type RefundRequest = { orderId: string; amount: number };

export interface PaymentProvider {
  name: string;
  charge(req: ChargeRequest): Promise<{ ok: boolean; provider: string }>;
  refund(req: RefundRequest): Promise<{ ok: boolean; provider: string }>;
}
