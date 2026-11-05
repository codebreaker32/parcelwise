"""Daily payout reconciliation (stub). Owner: Alex.

Reads ONE payout file per provider per day. Today: Stripe only.
A second provider means a second payout format to parse and match.
"""
PROVIDERS = ["stripe"]

def reconcile(day: str) -> dict:
    return {provider: "matched" for provider in PROVIDERS}
