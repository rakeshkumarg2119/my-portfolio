const hamb = document.querySelector('.header .nav-bar .navlist .hamb');
const mobile_menu = document.querySelector('.header .nav-bar .navlist ul');
const header = document.querySelector('.header.container');

hamb.addEventListener('click',()=>{
    hamb.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll',()=>{
    let scroll_position = window.scrollY;
    if(scroll_position > 250) {
        header.style.backgroundColor = '#29323c ';
    }
    else {
        header.style.backgroundColor = 'transparent';
    }
});
document.querySelector('a').addEventListener('click', function(e) {
  e.preventDefault();
  
});