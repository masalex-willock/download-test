let dropdown = document.getElementById('dropdown');
let mainMenu = document.getElementById('elems');

dropdown.style.transition = 'display .4s ease-in-out';

dropdown.addEventListener('click', function(){
  if(mainMenu.style.display == 'block') mainMenu.style.display = 'none';
  else mainMenu.style.display = 'block';
});