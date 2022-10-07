

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

const x1 = document.getElementById('x1');

x1.addEventListener("click", function () {
    img.src = pictures[3];;
});




rightBtn.addEventListener("click", moveRight);
leftBtn.addEventListener("click", moveLeft);


if (window.location.Le - Dévotionnel) {
    var hash = window.location.Le - Dévotionnel;

    if ($(hash).length) {

        $('html,body').animate({ scrollTop: $(hash).offset().top }, 900, 'swing');
    }



}




