// Slide de Comentários
var swiperComentarios = new Swiper('.swiper-container-comentarios', {
    speed: 600,
    simulateTouch: true, // Habilita o controle por toque e arrasto com o mouse
    grabCursor: true,    // Altera o cursor para uma "mão" quando sobre o slide
    slidesPerView: 1, // Exibir um slide por vez
    spaceBetween: 30, // Espaço entre os slides
    loop: true, // Loop contínuo dos slides
    navigation: {
        nextEl: '.swiper-button-next-comentarios',
        prevEl: '.swiper-button-prev-comentarios',
    },
    pagination: {
        el: '.swiper-pagination-comentarios',
        clickable: true,
    },
});


// ---------- || ---------- \\

// Função Menu Mobile
// Evento para Abrir e Fechar um Menu na Versão Mobile

// Criando uma variavel e colocando pra ela uma função de documento, mandando pegar o elemento do id sitado, lá no HTML (No caso, open-menu-button)
let botaoAbrirMenu = document.getElementById('botao-abrir-menu')

// Fazendo a mesma coisa do código acima, aqui
let menuMobile = document.getElementById('menu-mobile')

let overlay = document.getElementById('overlay-menu')

// Criando uma função de evento; damos o nome do evento de "click"; criamos uma arrow function e dentro dela, digo o que irá acontecer toda vez que clicarem no botão.
botaoAbrirMenu.addEventListener('click', () => {
    // Está função irá criar uma classe toda vez que clicarem no botão (está classe não pode existir dentro do CSS, por que ele criara dinamicamente)
    menuMobile.classList.add('abrir-menu')
})

// Fazendo a mesma coisa do código acima, mas desta vez, para fechar o menu
menuMobile.addEventListener('click', () => {
    // Está função irá remover a classe que foi criada anteriormente, ao clicarem no botão, toda vez que clicarem no botão para fechar
    menuMobile.classList.remove('abrir-menu')
})

// Fazendo a mesma coisa do código acima, mas desta vez, para fechar o menu ao clicar na tela fora do menu
overlayMenu.addEventListener('click', () => {
    // Está função irá remover a classe que foi criada anteriormente, ao clicarem no botão ou na tela fora do menu
    menuMobile.classList.remove('abrir-menu')
})



// ----------  ||  ---------- \\
// ----------  Efeito de Navegação na Página  ---------- \\

// Seleciona todos os links de navegação com href que começa com "#"
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      // Evita o comportamento padrão da página
      e.preventDefault();
      
      // Pega o id do destino a partir do href do link
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      // Define o deslocamento desejado (em pixels)
      const offset = 20;

      // Calcula a posição da seção menos o offset e rola suavemente
      const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      // Usa window.scrollTo para rolar até o destino; Usa behavior: 'smooth' para adicionar efeito de suavidade
      window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
      });
  });
});