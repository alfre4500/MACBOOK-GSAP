# 🍏 Clon de Landing Page - MacBook Pro (React + Three.js + GSAP)

## 📋 Descripción
Este proyecto es un clon interactivo de la página de presentación del MacBook Pro de Apple. Está diseñado para ofrecer una experiencia de usuario inmersiva, utilizando modelos 3D fotorrealistas, animaciones fluidas vinculadas al scroll y un diseño completamente responsivo. 

El objetivo principal es demostrar habilidades avanzadas en el desarrollo Frontend, combinando la potencia de React con gráficos 3D y secuencias de animación complejas.

## ✨ Características Principales
* **Visor de Producto en 3D:** Los usuarios pueden interactuar con un modelo 3D del MacBook Pro, rotarlo libremente, cambiar su color (Plata o Negro Espacial) y alternar entre los tamaños de 14 y 16 pulgadas.
* **Animaciones Sincronizadas (ScrollTrigger):** Secuencias precisas controladas por GSAP que guían al usuario, incluyendo la rotación y el movimiento del modelo 3D mientras se navega por las secciones de la página.
* **Máscaras de Video y Efectos Parallax:** Renderizado de videos enmascarados (como la revelación del chip M4) que reaccionan al scroll del usuario, creando una transición cinematográfica.
* **Layout tipo Bento Grid:** Una presentación modular moderna para destacar de forma limpia las características de rendimiento, batería e Inteligencia Artificial (Apple Intelligence).

## 🛠️ Tecnologías Utilizadas
* **React.js:** Para la construcción modular de la interfaz de usuario.
* **Vite:** Como entorno de desarrollo rápido y empaquetador.
* **Tailwind CSS:** Para un estilado rápido, moderno y responsivo.
* **Three.js & React Three Fiber (@react-three/fiber / drei):** Para importar, renderizar, iluminar y animar los modelos `.glb` del MacBook.
* **GSAP (GreenSock Animation Platform):** Para las líneas de tiempo (`timelines`) y animaciones basadas en el scroll.
* **Zustand:** Para la gestión del estado global ligero (controlando la sincronización de colores, tamaños y las texturas de video que se reproducen en la pantalla del modelo).

