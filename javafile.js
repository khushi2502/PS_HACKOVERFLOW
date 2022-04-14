const btnHamburger = document.querySelector('#btnHamburger');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');

btnHamburger.addEventListener('click', function(e){

    if(header.classList.contains('open')){ 
        //closing menu
        body.classList.remove('noscroll')
        header.classList.remove('open');
        fadeElems.forEach(function(element){
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        });
        
    }
    else{ 
        e.stopPropagation();
        //open menu
    body.classList.add('noscroll');
    header.classList.add('open');
    fadeElems.forEach(function(element) {
        element.classList.remove('fade-out');
        element.classList.add('fade-in');
    })
    }
})
header.addEventListener('click', function(){
    if(header.classList.contains('open')){
        body.classList.remove('noscroll')
        header.classList.remove('open');
        fadeElems.forEach(function(element){
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        });
    }
});


document.getElementById("foo").onchange = function () {
    if (this.selectedIndex !== 0) {
        
        window.location.href = this.value;

    }
};
document.getElementById("baa").onchange = function () {
    if (this.selectedIndex !== 0) {
        
        window.location.href = this.value;

    }
};
    
      
    
