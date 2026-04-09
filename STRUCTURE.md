# Project structure (snapshot)

> This document is a **quick, human-friendly overview** of the current repo layout.
> Large/generated folders are intentionally omitted (e.g. `node_modules/`, `dist/`, `.nx/cache/`).

## Workspace overview

```text
ecomerce/
  backend/                 # NestJS API (Nx project: @org/backend)
    prisma/
      schema.prisma
      migrations/
        20260401110838_init/
          migration.sql
        migration_lock.toml
    src/
      app/
        app.controller.ts
        app.controller.spec.ts
        app.module.ts
        app.service.ts
        app.service.spec.ts
      assets/
      main.ts              # API bootstrap (global prefix: /api, PORT defaults to 3000)
    .env                   # Local env (should NOT be committed)
    .gitignore
    prisma.config.ts
    Dockerfile             # Present (currently empty)
    eslint.config.mjs
    jest.config.cts
    package.json
    tsconfig*.json
    webpack.config.js

  backend-e2e/             # API E2E tests (Nx project: @org/backend-e2e)
    src/
    eslint.config.mjs
    jest.config.cts
    package.json
    tsconfig.json

  frontend/                # Next.js app (Nx project: @org/frontend)
    .next/                 # Next build output (gitignored)
    public/
    specs/
    src/
      app/
    eslint.config.mjs
    jest.config.cts
    next.config.js
    package.json
    postcss.config.js
    tailwind.config.js
    tsconfig*.json

  frontend-e2e/            # Playwright E2E tests (Nx project: @org/frontend-e2e)
    src/
    eslint.config.mjs
    package.json
    playwright.config.ts
    tsconfig.json

  packages/                # Placeholder for shared libs/packages (currently empty)
    .gitkeep

  .vscode/                 # Editor config (some files are committed)
  .github/                 # GitHub workflows/templates (if any)
  .nx/                     # Nx internal workspace data (cache is gitignored)
  .cursor/                 # Cursor/agent tooling (some paths are gitignored)

  eslint.config.mjs
  jest.config.ts
  jest.preset.js
  nx.json
  package.json
  pnpm-lock.yaml
  pnpm-workspace.yaml
  tsconfig.base.json
  tsconfig.json
  README.md
```

## Nx projects detected

- `@org/backend`
- `@org/backend-e2e`
- `@org/frontend`
- `@org/frontend-e2e`

##################################

## Chạy dev

pnpm nx serve @org/backend
pnpm nx dev @org/frontend

## Build production

pnpm nx build @org/backend
pnpm nx build @org/frontend

## Test / Lint / E2E

pnpm nx test @org/backend
pnpm nx test @org/frontend

pnpm nx lint @org/backend
pnpm nx lint @org/frontend

pnpm nx e2e @org/backend-e2e
pnpm nx e2e @org/frontend-e2e

## Xem danh sách project/targets

pnpm nx show projects
pnpm nx show project @org/backend --json
pnpm nx show project @org/frontend --json

##################################

# Khởi động tất cả services

docker-compose up

# Khởi động ở chế độ background

docker-compose up -d

# Xem logs của tất cả services

docker-compose logs

# Xem logs của riêng backend

docker-compose logs backend

# Dừng tất cả

docker-compose down

# Dừng và xóa cả volume (mất dữ liệu DB)

docker-compose down -v

# Rebuild và chạy lại

docker-compose up --build

# Chạy một service cụ thể

docker-compose up backend

# Chạy migration riêng (nếu cần)

## docker-compose run --rm migrate

##################################
Quy trình chuẩn
pnpm nx serve @org/backend
pnpm nx dev @org/frontend

pnpm nx lint @org/backend @org/frontend
pnpm nx test @org/backend @org/frontend
pnpm nx build @org/backend
pnpm nx build @org/frontend
git status

docker compose up -d --build
