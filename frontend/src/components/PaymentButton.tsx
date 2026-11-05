// Pay button (stub). Today only Stripe is supported.
export function PaymentButton({ amount, provider }: { amount: number; provider: "stripe" }) {
  return <button data-provider={provider}>Pay ₹{amount}</button>;
}
