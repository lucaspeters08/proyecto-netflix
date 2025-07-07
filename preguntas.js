function mostrar(btn) {
  const pregunta = btn.parentElement;
  const contenido = pregunta.nextElementSibling;

  const todasLasPreguntas = document.querySelectorAll('.preg');
  const todosLosBotones = document.querySelectorAll('.simbolo');

  todasLasPreguntas.forEach((p, index) => {
    if (p !== pregunta) {
      p.classList.remove('active');
      todosLosBotones[index].textContent = '+';
    }
  });

  pregunta.classList.toggle('active');

  if (pregunta.classList.contains('active')) {
    btn.textContent = '-';
  } else {
    btn.textContent = '+';
  }
}
