const navBar = document.querySelector('.mobile');
const menuButton = document.querySelector('.menu');

menuButton.addEventListener('click', ()=>
{
  navBar.classList.toggle('active');
  menuButton.classList.toggle('action');
});