# Parcelwise architecture (simplified)

```
Customer ─▶ frontend (web) ─▶ backend /checkout ─▶ payment-gateway ─▶ Stripe
   │                              │                       │
   └─ mobile-app (WebView → web checkout)                 └─ payouts ─▶ finance/reconciliation
                                  └─ /refunds ─▶ payment-gateway (refund API)
```

- Refunds go back through the **same provider** that took the payment.
- Finance reconciles **one payout file per provider per day**.
