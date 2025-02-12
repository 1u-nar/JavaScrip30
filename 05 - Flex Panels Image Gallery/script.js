const panels = document.querySelectorAll('.panel');

panels.forEach(panel => panel.addEventListener('click', open))

function open(){
  this.classList.toggle("open-active");
}

function close(panel){
 panel.classList.remove("open-active");
}
