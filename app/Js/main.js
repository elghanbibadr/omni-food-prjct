const navHamburger=document.querySelector('.nav__hamburger');
const navCheck=document.querySelector('.nav__check');
const navCollapsible=document.querySelector('.nav__collapsibles');

navHamburger.addEventListener('click',showNav);
navCheck.addEventListener('click',hideNav);


function showNav(){
    navCollapsible.classList.add('showNav');
}
function hideNav(){
    navCollapsible.classList.remove('showNav');
}