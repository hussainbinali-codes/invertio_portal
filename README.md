# Invertio Enterprise CRM Platform

Production-ready full-stack monorepo for **Invertio.in** covering Marketing CRM, Developer Workflow, Finance, HR, and Asset Management in one unified application.

## Tech Stack
- **Frontend:** React + TypeScript + Vite + React Router
- **Backend:** Fastify + TypeScript + Prisma + PostgreSQL + JWT
- **Security:** Helmet, CORS, rate limiting, bcrypt password hashing, input validation with Zod
- **DevOps:** Docker Compose, GitHub Actions CI

## Monorepo Structure
- `backend/` – API server, Prisma schema, seed data, module routes
- `frontend/` – modern responsive UI with dashboards, kanban, modular pages
- `docs/` – architecture and sprint roadmap

## Quick Start
```bash
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env

docker compose up --build
```

App URLs:
- Frontend: `http://localhost:5173`
- Backend API: `http://localhost:4000/api/v1`
- Swagger docs: `http://localhost:4000/docs`

## Delivery Scope
Implemented starter for all required enterprise modules with scalable patterns:
- Auth + RBAC (dynamic role + permission matrix)
- Marketing pipeline entities and tasks
- Project/milestone/task workflow
- Finance (invoices, expenses, payroll skeleton)
- HR (candidates, leave, feedback)
- Asset inventory + credential vault schema
- Executive and module dashboard endpoints

> This is a production-focused foundation with documented extension points for sprint-wise expansion.
