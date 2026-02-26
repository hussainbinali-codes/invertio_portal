# Architecture Blueprint

## Domain Modules
1. Marketing CRM
2. Developer Workflow
3. Finance
4. HR
5. Asset Management
6. Identity + RBAC

## API Strategy
- Versioned REST: `/api/v1/*`
- Stateless JWT auth with short-lived access tokens
- Module routes split by bounded context
- Validation-first request parsing with Zod

## Data Strategy
- PostgreSQL with Prisma schema and relations
- Audit-ready timestamps
- Enum-backed statuses for stable reporting
- Extendable for soft deletes and audit logs in future migration

## Security Controls
- Helmet + CORS allowlist + rate limiting
- bcrypt password hashing
- Auth middleware on protected routes
- Credentials vault model designed for encrypted payload storage

## Roadmap by Sprint
- Sprint 1: Auth, profiles, RBAC
- Sprint 2: CRM and pipeline
- Sprint 3: Projects/milestones/tasks
- Sprint 4: Finance invoicing/expense
- Sprint 5: HR recruitment and employee master
- Sprint 6: Assets + credential controls
- Sprint 7: Advanced dashboards and exports
- Sprint 8: Test hardening and production release
