
const todoList = [
  { name: 'Todo 1', status: false },
  { name: 'Todo 2', status: false },
  { name: 'Todo 3', status: false },
  { name: 'Todo 4', status: false },
  { name: 'Todo 5', status: false },
  { name: 'Todo 6', status: false },
  { name: 'Todo 7', status: false },
];

let firstChecked;
let lastChecked;

function render() {
  const todoListHTML = todoList.map((todo, index) => {
    const status = todo.status ? 'checked' : '';
    return `
      <div class="todo">
        <div><input type="checkbox" data-order="${index}" ${status}></div>
        <p class="${status}">${todo.name}</p>
      </div>
    `;
  }).join('');
  document.querySelector('.checklist-container').innerHTML = todoListHTML;
  addEventListeners();
}

function swapChecked() {
  let temp = lastChecked;
  lastChecked = firstChecked;
  firstChecked = temp;
}

function multiSelect() {
  let status;

  if (firstChecked > lastChecked) swapChecked();
  todoList.forEach((todo, index) => {
    if (index === firstChecked) status = todo.status;
    if (index >= firstChecked && index <= lastChecked) {
      todo.status = status;
    }
  });

  firstChecked = undefined;
  lastChecked = undefined;

  render();
}

function addEventListeners() {
  document.querySelectorAll('input').forEach(item => {
    item.addEventListener('click', function(event) {
      const order = parseInt(item.dataset.order); // Convert to integer

      if (event.shiftKey && firstChecked === undefined) {
        firstChecked = order;
        todoList[order].status = !todoList[order].status;
      } else if (event.shiftKey && firstChecked !== undefined) {
        lastChecked = order;
        todoList[order].status = !todoList[order].status;
        if (firstChecked !== undefined) multiSelect();
      } else {
        firstChecked = order;
        todoList[order].status = !todoList[order].status;
      }

      render();
    });
  });
}

render();
