# GitHub Copilot Chat Instructions for Orbits

## 1. Purpose

- Provide AI agents (Copilot/Claude-style) a fast path to productivity in this monorepo.
- Capture project architecture, workspace conventions, and preferred workflows.
- Keep the file short and link to canonical docs (especially `CLAUDE.md`).

## 2. Canonical references

- Primary: `CLAUDE.md` at repo root.
- Build/dev commands: `package.json` scripts and top-level `pnpm` commands.
- Architecture overview: `apps/api`, `apps/web`, `packages/*`.

## 3. Project structure (high-level)

- `apps/api`: Fastify + Better Auth + PostgreSQL/Drizzle, port default 3333.
- `apps/web`: Next.js 16 + React 19 + Tailwind CSS 4 + shadcn/ui, port default 3000.
- `packages/env`: Zod-based env validation.
- Monorepo orchestrated by pnpm workspaces + Turborepo.

## 4. Common dev workflow

1. `pnpm install`
2. `docker compose up -d` (PostgreSQL)
3. `pnpm dev` (runs both API and Web)
4. `pnpm db:generate` + `pnpm db:migrate` for schema changes

## 5. Coding conventions

- TypeScript across all packages.
- Zod validation everywhere (request/response schemas in API).
- DB schema files in `apps/api/src/db/schema` and code-generated migrations.
- Use `@/*` TS import alias in `apps/web`.
- Use Biome linting/formatting (`pnpm lint`, `pnpm format`).

## 6. API-specific rules

- Route/type provider: `fastify-type-provider-zod`.
- Auth: Better Auth via `apps/api/src/lib/auth.ts` and `/api/auth/*` routes.
- S3 client: `apps/api/src/lib/s3client.ts` with `forcePathStyle: true` for Garage compatibility.

## 7. Web-specific rules

- App Router with route groups under `src/app`.
- auth pages in `src/app/auth/*`.
- UI components under `src/components/ui`.
- next compiler and fonts in `next.config.ts`.

## 8. QA and testing

- No global tests setup today; add local test frameworks in packages as needed.
- Keep PRs small and focused: one backend vs frontend concern per change.

## 9. Agent expectations

- Always check this file + `CLAUDE.md` before making large changes.
- Prefer reuse of existing components/routes; if adding new endpoints, update docs and migrations.
- Mention when a database migration is required.
- Keep answers concise and use markdown headers/bullets.

## 10. Optional next agent customization tasks

- `create-agent` for API route scaffolding (CRUD + validation + tests).
- `create-agent` for frontend form flow (shadcn form + zod + mutation + success state).
- `create-agent` for db schema/migration choicelist with Drizzle.
