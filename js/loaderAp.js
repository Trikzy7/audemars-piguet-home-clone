
const loader_ap = document.querySelector('.loader_ap');

const allLetterPath = document.querySelectorAll('.letter path');

const brassus = document.querySelector('.brassusWord');


const allLetterMobile = document.querySelectorAll('.letterMobile path');




document.addEventListener('DOMContentLoaded', () => {

    const TL = gsap.timeline({paused: true});


    TL
    .staggerFrom(allLetterPath, 0.27, {y: 25, opacity: 0, ease: "power2"}, 0.1)
    .staggerFrom(allLetterPath, 0.27, {fill: "#bdc3c7", ease: "power2"}, 0.1, "-=1")
    .from(brassus, 0.5, {y: 50, ease: "power2.out"}, '=0')



    TL.play();



    const TLmobile = gsap.timeline({paused: true});


    TLmobile
    .staggerFrom(allLetterMobile, 0.3, {y: 25, opacity: 0, ease: "power2"}, 0.2)
    .staggerFrom(allLetterMobile, 0.3, {fill: "#bdc3c7", ease: "power2"}, 0.2, "=0.5")




    TLmobile.play();





    setTimeout(() => {
        loader_ap.style.opacity = 0;
    }, 4000);


    setTimeout(() => {
        loader_ap.remove();
    }, 5000);


})