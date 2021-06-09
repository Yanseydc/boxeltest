let videoWrapper = document.querySelector('.video-wrapper')
let animation = document.querySelector('.animation');

let videoWrapperWidth = videoWrapper.offsetWidth;
let videoWrapperHeight = videoWrapper.offsetHeight;

window.addEventListener('resize', (e) => {
    console.log('resize');
    let windowWidth = window.innerWidth;
    let windowHeigth = window.innerHeight;
    let scale;

    //exit
    if(windowWidth >= videoWrapperWidth && windowHeigth >= videoWrapperHeight) {
        videoWrapper.style.webkitTransform = "";
        animation.style.width = "";
        animation.style.height = "";
    }

    scale = Math.min(
        windowWidth / videoWrapperWidth,
        windowHeigth / videoWrapperHeight
    );

    videoWrapper.style.webkitTransform = `scale(${scale})`;
    animation.style.width = videoWrapperWidth * scale;
    animation.style.height = videoWrapperHeight * scale;
});

//animations
gsap.timeline({
    scrollTrigger: {
        trigger: ".animation",  
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: ".animation",
    }
})
.to(".main-text", { y: innerHeight * - 1 })
.to(".overlay", {opacity: 0})
.fromTo(".video-wrapper",
    { scale: 15, x: '4900px', y:'2100px' },
    { scale: 1, x:0, y:0}
);

gsap.timeline({
    scrollTrigger: {
        trigger: ".hero",  
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
        markers: true
    }
})
.from(".hero__title", { opacity: 0 })
.from(".hero__brand", { y: innerHeight * 1, rotate: 360 });
