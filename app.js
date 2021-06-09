//Esta seccion es para posicionar el video respecto a la imagen
let videoWrapper = document.querySelector('.video-wrapper')
let animation = document.querySelector('.animation');

let videoWrapperWidth = videoWrapper.offsetWidth;
let videoWrapperHeight = videoWrapper.offsetHeight;

//informacion  
//https://css-tricks.com/scaled-proportional-blocks-with-css-and-javascript/
window.addEventListener('resize', (e) => {
    let windowWidth = window.innerWidth;
    let windowHeigth = window.innerHeight; 
    let scale; //ayudara a escalar el size del video wrapper

    scale = Math.min(
        windowWidth / videoWrapperWidth,
        windowHeigth / videoWrapperHeight
    );
    
    videoWrapper.style.webkitTransform = `scale(${scale})`;
    animation.style.width = videoWrapperWidth * scale;
    animation.style.height = videoWrapperHeight * scale;
});

//gsap es una libreria para animaciones, licencia gratis dependiendo del giro de la pagina
//Usage in 100% free apps, games, sites, and other software even if you charge a fee to develop these products
//animacion para el zoom 
gsap.timeline({
    scrollTrigger: {
        trigger: ".animation",  
        start: "top top", //donde inicia la animacion
        end: "bottom top", //donde termina
        scrub: true, //acepta valores 1+, ayuda a la suavidad de la transicion
        pin: ".animation", //sujeta elemento hasta que termine la transicion
    }
})
.to(".main-text", { y: innerHeight * - 1 })
.to(".overlay", {opacity: 0})
.fromTo(".video-wrapper",
    { scale: 15, x: '4900px', y:'2100px' },
    { scale: 1, x:0, y:0}
);

//animacion segunda seccion, la rotacion de las brands y opacidad del titulo
gsap.timeline({
    scrollTrigger: {
        trigger: ".hero",  
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
    }
})
.from(".hero__title", { opacity: 0 })
.from(".hero__brand", { y: innerHeight * 1, rotate: 360 });
