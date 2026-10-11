const botao = document.getElementById('botao-tema');
const body = document.body;

// Persistência do tema
const temasalvo = localStorage.getItem('tema');
temaEscuro(temasalvo === 'escuro');

// Função para alternar entre tema claro e escuro
function temaEscuro(tipo) {
  if (tipo == true) {
    body.classList.add('escuro');
    botao.innerHTML = '<i class="fa-solid fa-sun"></i>';
  } else {
    body.classList.remove('escuro');
    botao.innerHTML = '<i class="fa-solid fa-moon"></i>';
  }
}

botao.addEventListener('click', () => {
  const isescuro = body.classList.toggle('escuro');
  temaEscuro(isescuro);
  localStorage.setItem('tema', isescuro ? 'escuro' : 'claro');
});

// Scroll suave para links de navegação
const navLinks = document.querySelectorAll('#menu ul a.link');
navLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const headerHeight = document.querySelector('header').offsetHeight;
      const targetPosition = target.offsetTop - headerHeight - 20;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});
// Validação do formulário
const formContato = document.getElementById('form-contato');
const campoNome = document.getElementById('campo-nome');
const campoEmail = document.getElementById('campo-email');
const msgValidacao = document.getElementById('mensagem-validacao');

formContato.addEventListener('submit', function (e) {
  e.preventDefault();

  const nome = campoNome.value.trim();
  const email = campoEmail.value.trim();

  if (nome === '' || email === '') {
    msgValidacao.textContent = 'Atenção: preencha todos os campos antes de enviar.';
    msgValidacao.style.color = '#e63946';
  } else if (!email.includes('@') || !email.includes('.')) {
    msgValidacao.textContent = 'Por favor, insira um endereço de e-mail válido.';
    msgValidacao.style.color = '#e63946';
  } else {
    msgValidacao.textContent = `Mensagem validada com sucesso! Obrigado pelo contato, ${nome}.`;
    msgValidacao.style.color = '#2a9d8f';
    formContato.reset();
  }
});