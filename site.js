const form = document.querySelector('#mensagem');
const nameInput = form.elements.nome;

form.hidden = false;
nameInput.addEventListener('input', () => nameInput.setCustomValidity(''));

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = nameInput.value.trim();
  if (!name) {
    nameInput.setCustomValidity('Digite seu nome para continuar.');
    nameInput.reportValidity();
    return;
  }

  const interest = form.elements.interesse.value;
  const details = form.elements.detalhes.value.trim();
  const message = ['Olá, Humberto! Meu nome é ' + name + ' e gostaria de ' + interest + '.', details]
    .filter(Boolean)
    .join('\n\n');

  window.location.assign('https://wa.me/5582987416312?text=' + encodeURIComponent(message));
});
