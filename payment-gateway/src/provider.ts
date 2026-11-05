// Payment provider types (stub). Owner: Bhawna
export type ChargeRequest = { orderId: string; amount: number; currency: "INR" };
export type RefundRequest = { orderId: string; amount: number };
