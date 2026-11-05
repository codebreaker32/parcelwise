# In progress: Payment provider interface refactor

- **Owner:** Sam
- **Dates:** Nov 3 → **Nov 18** (must land before the Nov 20 freeze)
- **What:** replace the Stripe-specific code in `payment-gateway/src/` with a generic `PaymentProvider` interface, so more providers can be added later.
- **Files being changed:** `payment-gateway/src/provider.ts`, `payment-gateway/src/stripeProvider.ts`, `backend/src/checkout/checkoutController.ts`
- **Status:** open PR on branch `refactor/payment-provider-interface`.
- **Note:** adding a second provider *before* this lands means doing the work twice.
