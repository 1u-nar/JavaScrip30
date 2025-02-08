function getTime(){
  const date = new Date();

  const hour = date.getHours();
  const hourHandDeg = ((hour/12) * 360)
  document.querySelector('.hour-hand').style.transform = `rotate(${hourHandDeg}deg)`;


  const minute = date.getMinutes();
  const minHandDeg = ((minute/60) * 360)
  document.querySelector('.minute-hand').style.transform = `rotate(${minHandDeg}deg)`;

  const second = date.getSeconds();
  const secHandDeg = ((second/60) * 360)
  document.querySelector('.second-hand').style.transform = `rotate(${secHandDeg}deg)`;

  console.log(second);
}

setInterval(getTime, 1000);

