// Orders (stub). Owner: Bhawna
export type Order = { id: string; amount: number; provider: "stripe"; status: "pending" | "paid" | "refunded" };
export const orders = new Map<string, Order>();
