
function showMenu(){
let menuList = document.getElementById('list');
let menu = document.querySelector('ul');
if (menuList === 'flex'){
 menu.style.display = 'none';
}
else{
  menuList.style.display = 'flex';
}
}
