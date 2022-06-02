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



// nav-fixed
const nav=document.querySelector('.nav');
const header=document.querySelector('header')
const observer=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        return (!entry.isIntersecting)?nav.classList.add('nav-fixed'):nav.classList.remove('nav-fixed');
    })
},{
 threshold:0.1,
})

observer.observe(header)