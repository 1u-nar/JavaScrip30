const startMenu = [
  {name: 'Tacos', status:true},
  {name: 'Squid', status:false},
];

let menu = JSON.parse(localStorage.getItem('menu')) || [...startMenu];

function render (){
  const menuHTML = menu.map((item,i) => {
    return `
      <li class="item">
        <input type="checkbox"${item.status ? 'checked' : ''} data-index=${i} id="item${i}"/>
        <label for="item${i}">${item.name}</label>
      </li>
    `}).join('');
  document.querySelector('.items-list').innerHTML = menuHTML;
}

function addItem (e){
  e.preventDefault();
  const newItemName = document.querySelector("[name='new-item-name']").value;
  const newItem = {name: newItemName, status: false};
  menu.push(newItem);
  save();
  render();
}

function toggleCheckbox(e){
  if (!e.target.matches('input')) return;
  const index = e.target.dataset.index;
  menu[index].status = e.target.checked;
  save();
}

function save (){
  localStorage.setItem('menu', JSON.stringify(menu));
}


document.querySelector('#add-form').addEventListener('submit', addItem);
document.querySelector('.items-list').addEventListener('click', toggleCheckbox)

render();


