

# 📌 Guia de Desarrollo Mi Lista de Tareas   EC2

Este proyecto es una aplicación web sencilla tipo **To-Do List**, desarrollada con **HTML, CSS y JavaScript**.  
Tiene tres funcionalidades principales:

---

## ✨ Funcionalidades
- ➕ Agregar nuevas tareas.
- ✅ Marcar tareas como completadas.
- 🗑️ Eliminar tareas de la lista.

---

## 🚀 Demo en línea

Puedes probar la aplicación aquí:  
👉 [Mi Lista de Tareas en GitHub Pages](https://danielsuarez1-ops.github.io/mi-lista-tareas/)


---

## 🛠️ Tecnologías utilizadas
- **HTML5** → estructura de la página.  
- **CSS3** → estilos y diseño responsivo.  
- **JavaScript (Vanilla JS)** → lógica de la aplicación.

---

## Requicitos previos

  - Instancia EC2 creada y corriendo
  - Security Group con puertos 22 (SSH) y 8080 (desarrollo)
  - Acceso SSH a la instancia

---

## 🔧 Paso 1: 🛡️ Configuración del Security Group
Asegúrate de que tu Security Group tenga estas reglas:

Tipo	Puerto	Origen	Descripción
SSH	22	Tu IP o 0.0.0.0/0	Acceso SSH
TCP Personalizado	8080	0.0.0.0/0	Servidor desarrollo

---

## 🔧 Paso 2: Conectarse a la Instancia EC2

   1. Ve a **AWS Console** 	➟ EC2 ➟ **Instancias**
   2. Selecciona tu instancia
   3. Clic en **"Connect"**
   4. Selecciona **"EC2 Instance Connect"**
   5. Click en **Connect**


---

## 🔧 Paso 3: Preparar el Entorno

**Actualizar el sistema e instalar dependencias**

   1. sudo apt update && sudo apt upgrade -y 
   2. sudo apt update && sudo apt upgrade -y && sudo apt install -y nodejs npm
   3. node -v
   npm -v
   4. sudo apt install -y git

---

## 🔧 Paso 4: Clonar el Repositorio

   5. git clone https://github.com/danielsuarez1-ops/mi-lista-tareas.git
   6. cd mi-lista-tareas


---

## 🔧 Paso 5: Instalar Dependencias

   7. sudo npm install -g http-server


---

## 🔧 Paso 6: Ejecutar el Servidor del Desarrollo

   8. cd ~/mi-lista-tareas && http-server -p 8080



---

## 🔧 Paso 7: Accerde a la Aplicacion

Ir al navegador: http://3.139.90.170:8080


---

## 🔧 Paso 8: Detener el Servidor 

Presiona **Ctrl + C**  en la terminal
