const img = document.getElementById('carousel');
const rightBtn = document.getElementById('right-btn');
const leftBtn = document.getElementById('left-btn');

// Images are from unsplash
let pictures = ['DEVOTIONNEL - Tout est accompli/DEVOTIONNEL - Tout est accompli-01.png', 'DEVOTIONNEL - Tout est accompli/DEVOTIONNEL - Tout est accompli-02.png', 'DEVOTIONNEL - Tout est accompli/DEVOTIONNEL - Tout est accompli-03.png', 'DEVOTIONNEL - Tout est accompli/DEVOTIONNEL - Tout est accompli-04.png', 'DEVOTIONNEL - Tout est accompli/DEVOTIONNEL - Tout est accompli-05.png', 'DEVOTIONNEL - Tout est accompli/DEVOTIONNEL - Tout est accompli-06.png', 'DEVOTIONNEL - Tout est accompli/DEVOTIONNEL - Tout est accompli-07.png', 'DEVOTIONNEL - Tout est accompli/DEVOTIONNEL - Tout est accompli-08.png', 'DEVOTIONNEL - Tout est accompli/DEVOTIONNEL - Tout est accompli-09.png', 'DEVOTIONNEL - Tout est accompli/DEVOTIONNEL - Tout est accompli-10.png', 'DEVOTIONNEL - Tout est accompli/DEVOTIONNEL - Tout est accompli-11.png', 'DEVOTIONNEL - Tout est accompli/DEVOTIONNEL - Tout est accompli-12.png', 'DEVOTIONNEL - Tout est accompli/DEVOTIONNEL - Tout est accompli-13.png', 'DEVOTIONNEL - Tout est accompli/DEVOTIONNEL - Tout est accompli-14.png', 'DEVOTIONNEL - Tout est accompli/DEVOTIONNEL - Tout est accompli-15.png', 'DEVOTIONNEL - Tout est accompli/DEVOTIONNEL - Tout est accompli-16.png', 'DEVOTIONNEL - Tout est accompli/DEVOTIONNEL - Tout est accompli-17.png', 'DEVOTIONNEL - Tout est accompli/DEVOTIONNEL - Tout est accompli-18.png', 'DEVOTIONNEL - Tout est accompli/DEVOTIONNEL - Tout est accompli-19.png', 'DEVOTIONNEL - Tout est accompli/DEVOTIONNEL - Tout est accompli-20.png', 'DEVOTIONNEL - Tout est accompli/DEVOTIONNEL - Tout est accompli-21.png', 'DEVOTIONNEL - Tout est accompli/DEVOTIONNEL - Tout est accompli-22.png', 'DEVOTIONNEL - Tout est accompli/DEVOTIONNEL - Tout est accompli-23.png', 'DEVOTIONNEL - Tout est accompli/DEVOTIONNEL - Tout est accompli-24.png', 'DEVOTIONNEL - Tout est accompli/DEVOTIONNEL - Tout est accompli-25.png', 'DEVOTIONNEL - Tout est accompli/DEVOTIONNEL - Tout est accompli-26.png', 'DEVOTIONNEL - Tout est accompli/DEVOTIONNEL - Tout est accompli-27.png', 'DEVOTIONNEL - Tout est accompli/DEVOTIONNEL - Tout est accompli-28.png', 'DEVOTIONNEL - Tout est accompli/DEVOTIONNEL - Tout est accompli-29.png', 'DEVOTIONNEL - Tout est accompli/DEVOTIONNEL - Tout est accompli-30.png', 'DEVOTIONNEL - Tout est accompli/DEVOTIONNEL - Tout est accompli-31.png', 'DEVOTIONNEL - Tout est accompli/DEVOTIONNEL - Tout est accompli-32.png', 'DEVOTIONNEL - Tout est accompli/DEVOTIONNEL - Tout est accompli-33.png', 'DEVOTIONNEL - Tout est accompli/DEVOTIONNEL - Tout est accompli-34.png', 'DEVOTIONNEL - Tout est accompli/DEVOTIONNEL - Tout est accompli-35.png', 'DEVOTIONNEL - Tout est accompli/DEVOTIONNEL - Tout est accompli-36.png', 'DEVOTIONNEL - Tout est accompli/DEVOTIONNEL - Tout est accompli-37.png', 'DEVOTIONNEL - Tout est accompli/DEVOTIONNEL - Tout est accompli-38.png', 'DEVOTIONNEL - Tout est accompli/DEVOTIONNEL - Tout est accompli-39.png', 'DEVOTIONNEL - Tout est accompli/DEVOTIONNEL - Tout est accompli-40.png', 'DEVOTIONNEL - Tout est accompli/DEVOTIONNEL - Tout est accompli-41.png', 'DEVOTIONNEL - Tout est accompli/DEVOTIONNEL - Tout est accompli-42.png', 'DEVOTIONNEL - Tout est accompli/DEVOTIONNEL - Tout est accompli-43.png', 'DEVOTIONNEL - Tout est accompli/DEVOTIONNEL - Tout est accompli-44.png', 'DEVOTIONNEL - Tout est accompli/DEVOTIONNEL - Tout est accompli-45.png', 'DEVOTIONNEL - Tout est accompli/DEVOTIONNEL - Tout est accompli-46.png', 'DEVOTIONNEL - Tout est accompli/DEVOTIONNEL - Tout est accompli-47.png', 'DEVOTIONNEL - Tout est accompli/DEVOTIONNEL - Tout est accompli-48.png'];

img.src = pictures[0];
let position = 0;



const moveRight = () => {
    if (position >= pictures.length - 1) {
        position = 0
        img.src = pictures[position];
        return;
    }
    img.src = pictures[position + 1];
    position++;
}

const moveLeft = () => {
    if (position < 1) {
        position = pictures.length - 1;
        img.src = pictures[position];
        return;
    }
    img.src = pictures[position - 1];
    position--;
}
/****  SOMMAIRE  _____________________________________________________________________*****/
/**** PREFACE *****/
const x1 = document.getElementById('x1');

x1.addEventListener("click", function () {
    img.src = pictures[4];;
});

/****  PRESENTATION  *****/

const x2 = document.getElementById('x2');

x2.addEventListener("click", function () {
    img.src = pictures[5];;
});
/****  INTRODUCTION  *****/

const x3 = document.getElementById('x3');

x3.addEventListener("click", function () {
    img.src = pictures[7];;
});
/****  PARTIE1 *****/
const x4 = document.getElementById('x4');

x4.addEventListener("click", function () {
    img.src = pictures[10];;
});
/****  PARTIE2  *****/

const x5 = document.getElementById('x5');

x5.addEventListener("click", function () {
    img.src = pictures[16];;
});
/****  PARTIE3  *****/

const x6 = document.getElementById('x6');

x6.addEventListener("click", function () {
    img.src = pictures[19];;
});
/****  PARTIE4  *****/

const x7 = document.getElementById('x7');

x7.addEventListener("click", function () {
    img.src = pictures[22];;
});

/****  PARTIE5  *****/

const x8 = document.getElementById('x8');

x3.addEventListener("click", function () {
    img.src = pictures[27];;
});

/****  PARTIE6  *****/

const x9 = document.getElementById('x9');

x9.addEventListener("click", function () {
    img.src = pictures[31];;
});

/****  PARTIE7  *****/

const x10 = document.getElementById('x10');

x10.addEventListener("click", function () {
    img.src = pictures[35];;
});

/****  PARTIE8  *****/

const x11 = document.getElementById('x11');

x11.addEventListener("click", function () {
    img.src = pictures[40];;
});


/****  PARTIE9  *****/

const x12 = document.getElementById('x12');

x12.addEventListener("click", function () {
    img.src = pictures[46];;
});




rightBtn.addEventListener("click", moveRight);
leftBtn.addEventListener("click", moveLeft);


if (window.location.Le - Dévotionnel) {
    var hash = window.location.Le - Dévotionnel;

    if ($(hash).length) {

        $('html,body').animate({ scrollTop: $(hash).offset().top }, 900, 'swing');
    }



}



/****  cookies  */

