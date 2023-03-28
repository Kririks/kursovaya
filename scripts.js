"use strict"
let plusi_staj = document.querySelector('#plusi_staj');
let plus_image_staj = document.querySelector('#plus_image_staj');

plusi_staj.addEventListener('click', func)

function func() { 
    plus_image_staj.classList.toggle('active');
    this.removeEventListener('click', func); 
};

let plusi_mesto = document.querySelector('#plusi_mesto');
let plus_image_mesto = document.querySelector('#plus_image_mesto');

plusi_mesto.addEventListener('mouseenter', function()
{
    plus_image_mesto.classList.add('active'); 
    plus_image_mesto.removeEventListener('click', func);
});
