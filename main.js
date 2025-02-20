//header scroll
// Efecto en el encabezado cuando haces scroll en la página
let header = document.querySelector('header') // hace una consulta al encabezado y la selecciona
let menu = document.querySelector('#menu-icon') // hace una consulta al icono del menu y lo selecciona
let navbar = document.querySelector('.navbar') // hace una consulta al menu de navegacion y lo selecciona

// Cuando el usuario hace scroll, se agrega o quita una sombra en el encabezado
window.addEventListener('scroll', () =>{ /*efecto de la barra de navegacion */
  header.classList.toggle('shadow', window.scrollY > 0) // Si se hace scroll, agrega la clase "shadow" para crear la sombra
});

// Cuando se hace clic en el menú (ícono), cambia su apariencia y muestra/oculta la barra de navegación
menu.onclick = () => {
  menu.classList.toggle('bx-x') // Cambia la apariencia del ícono del menú
  navbar.classList.toggle('active') // Muestra u oculta la barra de navegación
}
// Si el usuario hace scroll, se cierra el menú si está abierto
window.onscroll = () =>{
  menu.classList.remove('bx-x') // Restaura el ícono del menú
  navbar.classList.remove('active') // Cierra la barra de navegación
}




 
// Swiper (carrusel de imágenes o elementos)
var swiper = new Swiper(".home", { // Selecciona el carrusel con la clase ".home"
    spaceBetween: 30, // Espacio entre las imágenes
    centeredSlides: true, // Centra las imágenes en el carrusel
    autoplay: {
      delay: 2500, // Cada cuánto cambia la imagen (2500ms = 2.5 segundos)
      disableOnInteraction: false, // No detiene el carrusel si el usuario interactúa con él
    },
    pagination: { // Control de paginación (puntos debajo del carrusel)
      el: ".swiper-pagination", // Selecciona el elemento que contiene los puntos de paginación
      clickable: true, // Hace que los puntos sean clickeables, permitiendo que el usuario navegue entre las imágenes al hacer clic
    },
  });