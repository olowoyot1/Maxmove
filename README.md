# MaxMove Logistics

MaxMove Logistics is a Lagos-based logistics platform for international shipping and interstate logistics across Nigeria.

## Vercel Hobby / free-plan friendly architecture

This project is intentionally designed without Vercel Pro-only infrastructure:

- Next.js App Router + Vercel Functions
- No Vercel Cron Jobs (shipment movement is event-driven from the backoffice)
- No WebSocket server
- Customer tracking uses short polling from the database when the tracking page is open
- PostgreSQL is external (use a free PostgreSQL provider such as Neon/Supabase; Vercel Hobby does not provide a free managed Postgres database)
- AI is optional. Without `OPENAI_API_KEY`, MaxMove AI uses deterministic database search and does not invent shipment locations.
- If an OpenAI key is supplied, AI inference is billed separately by OpenAI; it is not a Vercel feature requirement.
- No Vercel Blob requirement in the starter. File storage can be added later using a free/appropriate external storage provider.

## Core business model

1. International Shipping
   - Air freight
   - Sea freight
   - Import/export
   - Documentation and customs workflow
2. Interstate Logistics
   - Pickup and delivery within Nigeria
   - State-to-state road logistics
   - Hub/route/driver/vehicle assignment

## Shipment movement flow

Backoffice staff update a shipment's status, location, note and movement time. Those records are written to PostgreSQL. The public tracking page reads the latest records and refreshes while the customer is viewing the page.

## MaxMove AI

The AI endpoint first searches MaxMove's shipment and tracking-event records. The model receives only the relevant company records and is instructed not to invent facts. If no model key is configured, the application still answers supported tracking questions using the database directly.

## Environment variables

Copy `.env.example` to `.env` and configure:

```env
DATABASE_URL="postgresql://..."
OPENAI_API_KEY=""
OPENAI_MODEL="gpt-4.1-mini"
```

## Local setup

```bash
npm install
npx prisma generate
npx prisma db push
npm run db:seed
npm run dev
```

## Vercel deployment

1. Push the repository to GitHub.
2. Import the repository into Vercel.
3. Select the Next.js framework preset.
4. Add `DATABASE_URL` under Vercel Environment Variables.
5. Optionally add `OPENAI_API_KEY` and `OPENAI_MODEL` for natural-language AI answers.
6. Deploy.

No `vercel.json` Cron configuration is required, so the project does not depend on Pro-only cron frequency.
