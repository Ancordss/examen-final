# Usa una imagen oficial de Node.js como base
FROM node:18

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copia el archivo package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install --production

# Copia el resto de los archivos del proyecto
COPY . .

# Expone el puerto en el que la aplicación escuchará (puedes cambiarlo si tu API usa otro puerto)
EXPOSE 8080

# Comando por defecto para ejecutar la aplicación
CMD ["npm", "start"]
