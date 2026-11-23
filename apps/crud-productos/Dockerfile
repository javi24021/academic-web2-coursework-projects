# Etapa 1: Dependencias
FROM node:22-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm install

# Etapa 2: Desarrollo (hot-reload dentro de Docker)
FROM deps AS dev
COPY . .
EXPOSE 5173
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]

# Etapa 3: Compilación TypeScript + Vite
FROM deps AS builder
COPY . .
RUN npm run build

# Etapa 4: Producción servida con Nginx
FROM nginx:alpine AS production
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
