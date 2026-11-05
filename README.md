# Cartwise (fictional demo company)

> **This repo is fictional demo data** for [Greenlight](https://github.com/codebreaker32/greenlight), a Switch hackathon project. Cartwise, its people and its policies are made up. The code is stubs. Nothing here processes real payments.

Cartwise is a small online store. Customers browse the **frontend**, the **backend** handles checkout, orders and refunds, the **payment-gateway** service talks to the card processor (Stripe today), **finance** reconciles payouts, and there's a **mobile app**.

## Layout
| Folder | What it is | Owner (see `.github/CODEOWNERS`) |
|---|---|---|
| `frontend/` | Web storefront (checkout page, payment button) | Priya |
| `backend/src/checkout`, `backend/src/orders` | Checkout + order API | Sam |
| `backend/src/refunds` | Refund handling | Riya (support) + Sam |
| `payment-gateway/` | Payment provider integration (Stripe) | Sam |
| `finance/reconciliation/` | Daily payout reconciliation | Alex |
| `mobile-app/` | Mobile app | Dev |
| `team/people.yml` | Who's who: role, team, what they own, Slack username | — |
| `policies/` | Rules every change must respect | — |
| `projects/` | Work in progress right now | — |

## How Greenlight uses this repo
Greenlight's review agents read this repo to answer *"is this idea OK, and who does it affect?"*
- **rules-agent** reads `policies/` and `projects/` (plus open PRs) for policy problems and clashes.
- **impact-agent** reads `.github/CODEOWNERS`, `team/people.yml` and the code layout to work out who is affected and how much work it is.

## Left open on purpose
Some things are deliberately **undecided** (marked `TBD` or `OPEN`), so the agents flag them and the humans decide in the idea room. See [`docs/open-questions.md`](docs/open-questions.md).

The CODEOWNERS handles are fictional, so GitHub shows them as unknown owners. That's expected.
