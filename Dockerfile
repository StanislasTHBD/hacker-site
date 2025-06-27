# ================================
# 📦 1️⃣ Base image — Node LTS
FROM node:24-alpine3.21 AS base

WORKDIR /app

# ================================
# 🧩 Install dependencies
COPY package.json package-lock.json* ./
RUN npm install

# ================================
# 📁 Copy source
COPY . .

# ================================
# ⚙️ Build Next.js
RUN npm run build

# ================================
# 🏃 Runtime image
FROM node:24-alpine3.21 AS runner

# Create non-root user
RUN addgroup -g 1001 -S nodejs && adduser -S nextjs -G nodejs

WORKDIR /app

COPY --from=base /app/.next ./.next
COPY --from=base /app/node_modules ./node_modules
COPY --from=base /app/package.json ./package.json
COPY --from=base /app/public ./public

USER nextjs

EXPOSE 3000

CMD ["npm", "run", "docker:start"]
