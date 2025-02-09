const inputs = document.querySelectorAll("input");

inputs.forEach(input => input.addEventListener('change', handleUpdate));

function handleUpdate (){
  const sufix = this.dataset.sizing || '';
  document.querySelector(':root').style.setProperty(`--${this.name}`, this.value + sufix)
}
