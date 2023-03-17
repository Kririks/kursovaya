"use strict"
let plusi = document.querySelector('#plusi');
let plus_image = document.querySelector('#plus_image');

plusi.addEventListener('mouseenter', function()
{
 plus_image.classList.toggle('active');   
});