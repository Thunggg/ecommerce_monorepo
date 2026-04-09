# frontend/Dockerfile
FROM node:20-bookworm-slim AS build
WORKDIR /workspace

ENV PNPM_HOME=/pnpm
ENV PATH=$PNPM_HOME:$PATH
RUN corepack enable

# Copy workspace config files
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml nx.json tsconfig.base.json tsconfig.json ./
COPY eslint.config.mjs jest.config.ts jest.preset.js ./

# Copy frontend and packages
COPY frontend ./frontend

RUN pnpm install --frozen-lockfile
RUN pnpm nx sync
ARG API_PROXY_TARGET
ENV API_PROXY_TARGET=$API_PROXY_TARGET
RUN pnpm nx build @org/frontend

# Runtime stage
FROM node:20-bookworm-slim AS runtime
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Copy built frontend
COPY --from=build /workspace/frontend/.next/standalone ./
COPY --from=build /workspace/frontend/.next/static ./frontend/.next/static
COPY --from=build /workspace/frontend/public ./frontend/public

EXPOSE 3001
CMD ["node", "frontend/server.js"]
