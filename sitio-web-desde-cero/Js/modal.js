var imagenes = document.querySelectorAll('.gallery__img');
var modal = document.querySelector('#modal');
var img = document.querySelector('#modal__img');
var btn = document.querySelector('#modal__btn');

for (var i = 0; i < imagenes.length; i++) {
    imagenes[i].addEventListener('click', function (e){
        modal.classList.toggle("modal--open");
        var src = e.target.src;
        img.setAttribute("src", src);
    });
}
btn.addEventListener('click', function(){
    modal.classList.toggle("modal--open");
});