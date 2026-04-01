FROM node:20-bookworm-slim AS build

WORKDIR /workspace

# Install the application dependencies
ENV PNPM_HOME=/pnpm
ENV PATH=$PNPM_HOME:$PATH
RUN corepack enable

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml nx.json tsconfig.base.json tsconfig.json ./
COPY eslint.config.mjs jest.config.ts jest.preset.js ./

COPY backend ./backend

RUN pnpm install --frozen-lockfile
RUN cd backend && npx prisma generate
RUN pnpm nx build @org/backend

# Runtime stage
FROM node:20-bookworm-slim AS runtime
WORKDIR /app
ENV NODE_ENV=production

RUN apt-get update -y && apt-get install -y openssl curl && rm -rf /var/lib/apt/lists/*

# Copy compiled backend
COPY --from=build /workspace/backend/dist ./backend/dist
COPY --from=build /workspace/backend/package.json ./backend/package.json
COPY --from=build /workspace/backend/prisma ./backend/prisma
COPY --from=build /workspace/backend/prisma.config.ts ./backend/prisma.config.ts

# Install backend deps + generate Prisma client
RUN corepack enable \
  && cd backend \
  && pnpm install \
  && pnpm exec prisma generate --schema=prisma/schema.prisma

EXPOSE 3000

CMD ["node", "backend/dist/src/main.js"]

FROM runtime AS migrate
WORKDIR /app/backend
CMD ["pnpm", "exec", "prisma", "migrate", "deploy", "--schema=prisma/schema.prisma"]
