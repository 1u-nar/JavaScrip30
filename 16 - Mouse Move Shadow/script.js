const title = document.querySelector("h1").style;
const x = document.querySelector("body").offsetWidth;
const y = document.querySelector("body").offsetHeight;
const walk = 100;

function getMousePosition(e) {
  const [mouseX, mouseY] = [e.clientX, e.clientY];

  const xWalk = Math.round((mouseX / x * walk) - (walk / 2));
  const yWalk = Math.round((mouseY / y * walk) - (walk / 2));

  console.log(xWalk);
  title.textShadow = `
    ${xWalk}px ${yWalk}px 0 rgb(255,255,50,0.5),
    ${-xWalk}px ${yWalk}px 0 rgb(50,255,0,0.5),
    ${-xWalk}px ${-yWalk}px 0 rgb(0,50,255,0.5),
    ${xWalk}px ${-yWalk}px 0 rgb(0,255,255,0.5)
  `
}

document.addEventListener('mousemove', getMousePosition);
