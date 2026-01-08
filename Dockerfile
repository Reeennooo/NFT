# =========================
# 1. Build stage
# =========================
FROM node:20.18.1-alpine AS builder

WORKDIR /app

# Копируем package.json и lock-файл
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем исходники
COPY . .

# Сборка проекта
RUN npm run build


# =========================
# 2. Production stage
# =========================
FROM node:20.18.1-alpine

WORKDIR /app

# Устанавливаем vite preview
RUN npm install -g serve

# Копируем билд из builder
COPY --from=builder /app/dist ./dist

EXPOSE 4173

# Запуск production-сборки
CMD ["serve", "-s", "dist", "-l", "4173"]
