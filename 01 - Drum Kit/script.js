document.querySelectorAll('.btn').forEach((btn)=> {
  btn.addEventListener('click', () => {
    const sound = btn.getAttribute ("data-sound");
    const som = new Audio(`./sounds/${sound}.wav`);
    som.play();
  })

  document.addEventListener('keydown', (event) => {
    const key = btn.getAttribute ("data-key");
    const sound = btn.getAttribute ("data-sound");

    if (event.key.toUpperCase() === key) {
      const som = new Audio(`./sounds/${sound}.wav`);
      som.play();
      btn.classList.toggle('active');
    }
  })

  document.addEventListener('keyup', (event)=>{
    const key = btn.getAttribute ("data-key");
    if (event.key.toUpperCase() === key) {
      btn.classList.toggle('active');
    }
  })

});
