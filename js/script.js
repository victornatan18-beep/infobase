function toggleMenu() {
  document.getElementById('nav-mobile').classList.toggle('aberto');
}
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.nav-mobile a').forEach(function(l) {
    l.addEventListener('click', function() {
      document.getElementById('nav-mobile').classList.remove('aberto');
    });
  });
});
function salvarArtigo() {
  var b = document.getElementById('btn-salvar');
  if (b.classList.contains('salvo')) {
    b.innerHTML = '&#128278; Guardar';
    b.classList.remove('salvo');
    b.style.color = '';
  } else {
    b.innerHTML = '&#9989; Guardado';
    b.classList.add('salvo');
    b.style.color = '#27ae60';
  }
}
function copiarLink() {
  navigator.clipboard.writeText(window.location.href).then(function() {
    alert('Enlace copiado!');
  }).catch(function() {
    prompt('Copie este link:', window.location.href);
  });
}
