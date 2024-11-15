var swiper = new Swiper('.swiper-container', {
    speed: 600,
    simulateTouch: true, // Habilita o controle por toque e arrasto com o mouse
    grabCursor: true,    // Altera o cursor para uma "mão" quando sobre o slide
    slidesPerView: 1, // Exibir um slide por vez
    spaceBetween: 30, // Espaço entre os slides
    loop: true, // Loop contínuo dos slides
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});