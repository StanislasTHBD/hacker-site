# ===============================================
# 📦 1️⃣ Base image — Official Node LTS
FROM node:24-alpine3.21 AS base

# ===============================================
# 📂 2️⃣ Create app directory
WORKDIR /app

# ===============================================
# 🧩 3️⃣ Install dependencies
COPY package.json package-lock.json* ./
RUN npm install

# ===============================================
# 📁 4️⃣ Copy rest of app
COPY . .

# ===============================================
# ⚙️ 5️⃣ Build Next.js
RUN npm run build

# ===============================================
# 🏃 6️⃣ Runtime image
FROM node:24-alpine3.21 AS runner

# Create non-root user
RUN addgroup -g 1001 -S nodejs && adduser -S nextjs -G nodejs

WORKDIR /app

# Copy build output only
COPY --from=base /app/.next ./.next
COPY --from=base /app/node_modules ./node_modules
COPY --from=base /app/package.json ./package.json
COPY --from=base /app/public ./public

USER nextjs

EXPOSE 3000

CMD ["npm", "run", "start"]
