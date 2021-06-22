/*
const quitar = document.getElementById('quitar');
const agregar = document.getElementById('agregar');
const animacion =  document.getElementById('animacion')

quitar.addEventListener('click', function(){
    animacion.classList.add('sin__ciudad')
})

agregar.addEventListener('click', function(){
    animacion.classList.remove('sin__ciudad')
})
*/

const header = document.getElementById("header");

const button = document.getElementById("button__menu");

button.addEventListener('click',
function(){
   if(header.classList.contains('header__movil')){
    header.classList.remove('header__movil')
   }else{
    header.classList.add('header__movil')
   }
})

