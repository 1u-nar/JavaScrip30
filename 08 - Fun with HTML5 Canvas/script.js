//Canva & Context
const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');

//canva Size Configuration
canvas.width= window.innerWidth;
canvas.height= window.innerHeight;

//State Variables (let)
let isDrawing = false;
let lastX = 0, lastY = 0;
let growing = true;
let width = 10;
let hue = 0 ;

//Context (ctx) Brush Settings
function getSettings(){
  ctx.lineJoin = 'round';
  ctx.lineCap = 'round';

  //Brush Color
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  hue = (hue + 1) % 360;

  //Brush Size
  if (width > 100 || width < 10) growing = !growing;
  if (growing) ctx.lineWidth =  width++;
  else ctx.lineWidth = width--;
}

//Draw Function ( me = Mouse Event )
function drawOn(me) {

  getSettings();
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(me.offsetX, me.offsetY);
  ctx.stroke();

}

//Mouse Events
document.addEventListener('mousemove', (me)=>{
  [lastX, lastY] = [me.offsetX, me.offsetY]
  if (isDrawing) drawOn(me);
})
document.addEventListener('mousedown', () => isDrawing = true )
document.addEventListener('mouseup', () => isDrawing = false )
document.addEventListener('mouseout',() => isDrawing= false )
canvas.addEventListener('mouseleave',() => isDrawing= false )
