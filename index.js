/* Animaciones con ScrollMagic */
const controller = new ScrollMagic.Controller();

/* Inicio */
const inicioAnimation = new TimelineMax()
.from('.inicio__exposiciones', 1, { opacity: 0, y: 50 })
.from('.inicio__imagenes', 1, { opacity: 0, y: 50 }, '-=0.5');

new ScrollMagic.Scene({
    triggerElement: '.inicio',
    triggerHook: 0.8,
    reverse: false
})

.setTween(inicioAnimation)
.addTo(controller)

/* Exposiciones */
const exposicionesCards = document.querySelectorAll('.cards__card');

exposicionesCards.forEach(card => {
    new ScrollMagic.Scene({
        triggerElement: card,
        triggerHook: 0.8,
        reverse: false
    })
    .setClassToggle(card, 'visible')
    .addTo(controller);
})

/* Nosotros */
const nosotrosAnimation = new TimelineMax()
.from('.nosotros__texto', 1, { opacity: 0, y: 50 })
.from('.nosotros__imagen', 1, { opacity: 0, y: 50}, '-=0.5');

new ScrollMagic.Scene({
    triggerElement: '.nosotros',
    triggerHook: 0.8,
    reverse: false
})
.setTween(nosotrosAnimation)
.addTo(controller);

/* Galeria */
const galeriaAnimation = new TimelineMax()
.staggerFrom('.cards__img', 1, { opacity: 0, y: 50 }, 0.3);

new ScrollMagic.Scene({
    triggerElement: ".galeria",
    triggerHook: 0.5,
    reverse: false
})
.setTween(galeriaAnimation)
.addTo(controller);

/* Mostrar/ocultar menu */
let nav = document.querySelector('nav');
let buttonMenu = document.querySelector('.menu');
let enlaces = nav.querySelectorAll('a');

buttonMenu.addEventListener('click', function() {
    nav.classList.toggle('active');
    changeIcon();
})

function changeIcon() {
    let iconBtnMenu = document.querySelector('.menu i');

    if (iconBtnMenu.classList.contains('ri-menu-fold-fill')) {
        iconBtnMenu.classList.remove('ri-menu-fold-fill');
        iconBtnMenu.classList.add('ri-menu-unfold-fill');
    } else {
        iconBtnMenu.classList.remove('ri-menu-unfold-fill');
        iconBtnMenu.classList.add('ri-menu-fold-fill');
    }
}

enlaces.forEach(function(enlace) {
    enlace.addEventListener('click', function() {
        nav.classList.remove('active');
        changeIcon();
    })
})