# Hadi — Coming Soon Landing Page

Pre-launch waitlist landing page for the Hadi mental wellness app (hadee.sa). Bilingual Arabic/English, RTL-ready, optimized for ad campaigns.

## Setup

```bash
pnpm install
cp .env.example .env.local
# Fill in Supabase keys
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `NEXT_PUBLIC_SUPABASE_URL` | Yes | Supabase project URL |
| `SUPABASE_SERVICE_ROLE_KEY` | Yes | Supabase service role key (server-side only) |
| `NEXT_PUBLIC_URL` | No | Base URL for OG metadata (default: https://hadee.sa) |

## Supabase Table

The `waitlist` table schema:

```sql
CREATE TABLE waitlist (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  position INTEGER NOT NULL,
  referral_code TEXT NOT NULL,
  referred_by TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_waitlist_email ON waitlist(email);
CREATE INDEX idx_waitlist_referral ON waitlist(referral_code);
```

## Deployment

Deployed on Vercel, connected to hadee.sa domain.

## Tech Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS + Framer Motion
- Supabase (PostgreSQL waitlist storage)
- Vercel (hosting + edge functions + OG image)
- Bilingual: Arabic (RTL) + English (LTR)
- Font Pairing: Fraunces + Inter + Readex Pro
