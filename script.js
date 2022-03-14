let myNav = document.querySelector('nav');
window.onscroll = function () { 
    "use strict";
    if (document.body.scrollTop >= 700 || document.documentElement.scrollTop >= 700  ){

    
        myNav.classList.add("nav-colored");
        myNav.classList.remove("nav-transparent");
    } 
    else {
        myNav.classList.add("nav-transparent");
        myNav.classList.remove("nav-colored");
    }
};


function fly() {
    if (window.innerWidth >= 1370) {
        gsap.from("#leRespect", {x:1500, duration: 0.8, ease:"power1.out"})
        gsap.from("#votreVie", {x:1500, duration: 0.8, ease:"power1.out", delay:0.5})
        gsap.from("#privee", {x:1500, duration: 0.8, ease:"power1.out", delay:0.9})
    }
    else 
        gsap.from("#leRespect", {y:-500, duration: 0.8, ease:"power1.out"})
        gsap.from("#votreVie", {y:-500, duration: 0.8, ease:"power1.out", delay:0.5})
        gsap.from("#privee", {y:-500, duration: 0.8, ease:"power1.out", delay:0.9})
};
fly();

function myFunction() {
    let x = document.querySelector(".wrap");
    if (x.style.display === "block" && window.innerWidth <= 800) {
    x.style.display = "none";
    }
    else {
    x.style.display = "block";
    }
}

