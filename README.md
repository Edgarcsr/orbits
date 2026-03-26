# Orbit

Orbit is a media distribution platform designed to help creative professionals securely deliver and review digital content with their clients.

The platform focuses on photographers, video editors, drone pilots and other creators who need an efficient way to:

- send large media files
- receive files from clients
- manage revisions
- keep assets organized and secure

Orbit centralizes the workflow of **uploading, reviewing, approving and delivering media**, making collaboration between creators and clients simpler and safer.

---

## Overview

Creative professionals often rely on multiple tools to handle file delivery and feedback. Orbit aims to solve this by providing a **single platform for media distribution and review**.

Typical workflow:

1. Creator uploads media to the platform
2. Client receives a secure access link
3. Client reviews and leaves feedback
4. Creator updates the material if needed
5. Final assets are delivered and archived

---

## Key Features

- Secure media distribution
- Client file review workflow
- Organized project and asset management
- Private access to shared media
- Large file handling through S3-compatible storage
- Authentication system for secure access
- Modern web interface for creators and clients

---

## Tech Stack

### Frontend

- Next.js 16
- React 19
- Tailwind CSS 4
- shadcn/ui
- React Hook Form
- Zod validation

### Backend

- Fastify
- Better Auth
- PostgreSQL
- Drizzle ORM
- Zod schemas for type-safe validation

### Infrastructure

- S3-compatible storage (Garage)
- Docker for local database
- Turborepo for monorepo orchestration
- pnpm workspaces

---

## Project Structure

```
.
├── apps
│   ├── api        # Fastify backend
│   └── web        # Next.js frontend
│
├── packages
│   └── env        # Shared environment validation
│
├── CLAUDE.md      # AI workspace instructions
└── .github
    └── copilot-instructions.md
```

---

## Getting Started

### 1. Install dependencies

```
pnpm install
```

### 2. Start the database

```
docker compose up -d
```

### 3. Run the development environment

```
pnpm dev
```

The services will start at:

- Web: http://localhost:3000
- API: http://localhost:3333

---

## Database Workflow

Orbit uses **Drizzle ORM migrations**.

Update the schema:

```
pnpm db:generate
```

Apply migrations:

```
pnpm db:migrate
```

Open database studio:

```
pnpm db:studio
```

---

## Environment Variables

Create a `.env` file based on `.env.example`.

Required variables include:

- `DATABASE_URL`
- `BETTER_AUTH_SECRET`
- `BETTER_AUTH_URL`
- `BUCKET_STORAGE_ENDPOINT`
- `BUCKET_STORAGE_ACCESS_KEY`
- `BUCKET_STORAGE_SECRET_KEY`

---

## Development Guidelines

- Use **TypeScript across the entire project**
- Prefer **Zod schemas for validation**
- Follow existing **component patterns**
- Use **pnpm** as the package manager
- Avoid editing database migration files manually

---

## Target Users

Orbit is designed for professionals who work with large media files, such as:

- Photographers
- Videographers
- Drone pilots
- Video editors
- Creative agencies

---

## License

This project is currently under development.
License information will be added in the future.
