# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Orbits is a full-stack application built as a monorepo using pnpm workspaces and Turborepo. The project consists of:

- **API** (apps/api): Fastify server with Better Auth authentication and PostgreSQL/Drizzle ORM
- **Web** (apps/web): Next.js 16 with React 19, using the App Router and React Server Components
- **Shared packages**: Environment validation, TypeScript configurations, and Biome linting configs

## Development Commands

```bash
# Start all apps in development mode
pnpm dev

# Start individual apps
cd apps/api && pnpm dev
cd apps/web && pnpm dev

# Build all apps
pnpm build

# Lint all apps
pnpm lint

# Format code
pnpm format

# Type checking
pnpm check-types

# Database operations
pnpm db:generate  # Generate migration files from schema changes
pnpm db:migrate   # Apply migrations to the database
pnpm db:studio    # Open Drizzle Studio web interface

# Start PostgreSQL database
docker compose up -d
```

## Architecture

### Backend (apps/api)

**Technology Stack:**

- **Framework**: Fastify with TypeScript
- **Authentication**: Better Auth with email/password support
- **Database**: PostgreSQL with Drizzle ORM
- **Validation**: Zod with fastify-type-provider-zod for type-safe routes
- **Storage**: AWS S3-compatible storage (configured for Garage) with presigned URLs
- **Documentation**: Swagger/OpenAPI with Scalar UI at `/docs`

**Directory Structure:**

- `src/http/server.ts` - Main server entry point, registers plugins and routes
- `src/http/routes/` - API route handlers
- `src/lib/` - Shared utilities (auth config, S3 client)
- `src/db/schema/` - Drizzle schema definitions
- `src/db/migrations/` - Database migration files (auto-generated, don't edit manually)
- `src/db/client.ts` - Database connection client

**Key Patterns:**

- Authentication is handled via Better Auth at `/api/auth/*` endpoints
- All routes use Zod schemas for request/response validation
- S3 client is configured with `forcePathStyle: true` for Garage compatibility
- Database schema uses relations defined in separate `-relations.ts` files

**Database Workflow:**

1. Modify schema files in `src/db/schema/`
2. Run `pnpm db:generate` to create migration files
3. Run `pnpm db:migrate` to apply migrations
4. Schema uses `casing: 'snake_case'` per drizzle.config.ts

### Frontend (apps/web)

**Technology Stack:**

- **Framework**: Next.js 16 with App Router
- **React**: React 19 with React Server Components
- **Styling**: Tailwind CSS 4 with shadcn/ui components (base-nova style)
- **Forms**: React Hook Form with Zod validation
- **Icons**: Lucide React
- **Compiler**: React Compiler enabled in next.config.ts

**Directory Structure:**

- `src/app/(landing)/` - Landing page route group
- `src/app/auth/` - Authentication pages (sign-in, sign-up)
- `src/components/ui/` - shadcn/ui components
- `src/lib/utils.ts` - Utility functions (cn helper for class merging)

**Key Patterns:**

- Route groups: `(landing)` creates layout isolation without affecting URL structure
- Dark mode is applied via `className="dark"` on body in root layout
- Font: Geist font loaded from Google Fonts
- Path aliases configured: `@/*` maps to `src/*`

**Adding shadcn/ui components:**

```bash
cd apps/web
pnpm dlx shadcn@latest add [component-name]
```

### Shared Packages

**@orbits/env** (packages/env):

- Centralized environment variable validation using Zod
- All env vars must be defined in the schema before use
- Parsed on module import, will throw if validation fails

**Environment Variables:**
Required variables (see .env.example):

- `DATABASE_URL` - PostgreSQL connection string
- `BETTER_AUTH_SECRET` - Auth session secret
- `BETTER_AUTH_URL` - Auth service URL
- `BUCKET_STORAGE_ENDPOINT` - S3-compatible storage endpoint
- `BUCKET_STORAGE_ACCESS_KEY` - Storage access key
- `BUCKET_STORAGE_SECRET_KEY` - Storage secret key

## Testing

Currently, no test framework is configured. Tests would need to be added to individual packages.

## Linting and Formatting

- **Linter**: Biome (configured in biome.json)
- **Formatter**: Prettier for markdown/config files, Biome for code
- **Code style**: Single quotes, no semicolons (asNeeded), 80 char line width

## Package Manager

This project uses **pnpm** with workspaces. Always use `pnpm` instead of npm or yarn.

- Package manager version: pnpm@9.0.0 (specified in package.json)
- Node requirement: >=18

## Important Notes

- The API runs on port 3333 by default (configurable via API_PORT env var)
- The web app runs on port 3000 by default (Next.js default)
- CORS is configured to allow credentials from localhost:3000
- Better Auth sessions are stored in the database via Drizzle adapter
- S3 storage uses presigned URLs for secure file uploads
