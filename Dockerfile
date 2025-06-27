# ===============================================
# 📦 1️⃣ Base image — Use official Node LTS
FROM node:24-alpine3.21 AS base

# ===============================================
# 📂 2️⃣ Create app directory
WORKDIR /app

# ===============================================
# 🧩 3️⃣ Install dependencies separately for caching
COPY package.json package-lock.json* ./
RUN npm install

# ===============================================
# 📁 4️⃣ Copy the rest of the app
COPY . .

# ===============================================
# ⚙️ 5️⃣ Build the Next.js app
RUN npm run build

# ===============================================
# 🏃 6️⃣ Production image
FROM node:24-alpine3.21 AS runner

# Create non-root user for security
RUN addgroup -g 1001 -S nodejs && adduser -S nextjs -G nodejs

WORKDIR /app

# Copy only necessary build output
COPY --from=base /app/.next ./.next
COPY --from=base /app/node_modules ./node_modules
COPY --from=base /app/package.json ./package.json
COPY --from=base /app/public ./public
COPY --from=base /app/next.config.js ./next.config.js
COPY --from=base /app/tsconfig.json ./tsconfig.json

# Next.js needs `next.config.js` & `package.json` in prod

USER nextjs

# Expose port (Next.js default is 3000)
EXPOSE 3000

# Start Next.js server
CMD ["npm", "run", "start"]
