const video = document.querySelector("video");
const toggleBtn = document.querySelector("[name='toggle']");
const timeRng = document.querySelector("[name='time']");
const volumeRng = document.querySelector("[name='volume']");
const speedBtn = document.querySelector("[name='speed']");
const goBackBtn = document.querySelector("[name='go-back']")
const goFowardBtn = document.querySelector("[name='go-foward']")

timeRng.value = 0;
volumeRng.value = 75;

function toggleVideo(){
  if (video.paused) {
    video.play();
    toggleBtn.innerHTML = '||'
  }
  else {
    video.pause();
    toggleBtn.innerHTML = '|>'
  }
}

async function changeTimeRgn(){
  setInterval(()=>{
      const currentTime = video.currentTime;
      timeRng.value = currentTime;
  },1000)
}

function getVideoDuration(){
  const duration = video.duration;
  timeRng.min = 0;
  timeRng.max = duration;
}

function changeCurrentTime(){
  const newTime = timeRng.value;
  video.currentTime = newTime;
}

function changeVolume(){
  const newVolume = (volumeRng.value / 100);
  video.volume = newVolume;
}

function changeSpeed(){
  let speed = parseFloat(speedBtn.innerHTML.replace("x",""));

  if (speed === 1 ) speed = 2;
  else if (speed === 2) speed = 0.5;
  else  speed = 1;
  
  video.playbackRate = speed;
  speedBtn.innerHTML = `${speed}x`;
}

function goBack(){
  video.currentTime -= 10;  
}

function goFoward(){
  video.currentTime += 25;  
}

video.addEventListener("click", toggleVideo);
video.addEventListener("loadedmetadata", getVideoDuration);

toggleBtn.addEventListener("click", toggleVideo);
timeRng.addEventListener("change", changeCurrentTime);
volumeRng.addEventListener("change", changeVolume);
speedBtn.addEventListener("click", changeSpeed);
goBackBtn.addEventListener("click", goBack);
goFowardBtn.addEventListener("click", goFoward);

changeTimeRgn();
changeVolume();
