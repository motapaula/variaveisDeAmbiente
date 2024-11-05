# Usa a imagem oficial do Node.js
FROM node:18-alpine

# Cria o diretório de trabalho
WORKDIR /app

# Copia o package.json e instala as dependências
COPY package*.json ./
RUN npm install

# Copia o código da aplicação
COPY . .

# Define a porta de exposição da aplicação
EXPOSE ${WEB_PORT}

# Comando para iniciar o aplicativo
CMD ["node", "server.js"]
