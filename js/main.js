/* ============================================================
   INFOBAE CLONE - JAVASCRIPT
   Arquivo: js/main.js
   ============================================================ */

// Menu hamburguer mobile
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.menu-toggle');
  var menuMobile = document.querySelector('.menu-mobile');

  if (toggle && menuMobile) {
    toggle.addEventListener('click', function () {
      menuMobile.classList.toggle('aberto');
    });
  }
});
