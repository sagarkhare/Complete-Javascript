'use strict'

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.btn');

const openModal = function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');

    // modal.style.display="block";
    // overlay.style.display="block";
}
const closeModal = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');

    // modal.style.display="block";
    // overlay.style.display="block";
}

for (let i = 0; i < btnOpenModal.length; i++){
    btnOpenModal[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);


document.addEventListener('keydown', function(e){
    if(!modal.classList.contains('hidden')){
        if (e.key ==='Escape'){
            closeModal();
        }
    }
    console.log(e.key);
})