function getTime(){
  const now = new Date();

  const second = now.getSeconds();
  const secHandDeg = ((second/60) * 360)
  document.querySelector('.second-hand').style.transform = `rotate(${secHandDeg}deg)`;

  const minute = now.getMinutes();
  const minHandDeg = ((minute/60) * 360) + ((second/60)*6);
  document.querySelector('.minute-hand').style.transform = `rotate(${minHandDeg}deg)`;

  const hour = now.getHours();
  const hourHandDeg = ((hour % 12) / 12) * 360 + (minute / 60) * 30;
  document.querySelector('.hour-hand').style.transform = `rotate(${hourHandDeg}deg)`;
}
getTime();
setInterval(getTime, 1000);

