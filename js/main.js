/* ============================================================
   CBC NEWS — JAVASCRIPT
   Arquivo: js/main.js
   ============================================================ */

// ── MENU MOBILE ──
function abrirMenu() {
  document.getElementById('mobile-menu').classList.add('open');
  document.getElementById('mobile-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function fecharMenu() {
  document.getElementById('mobile-menu').classList.remove('open');
  document.getElementById('mobile-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

// Fechar menu ao pressionar ESC
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') fecharMenu();
});
