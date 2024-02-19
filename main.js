const input = document.getElementById('taskInput');
const list = document.getElementById('taskList');

function newTask() {
  const task = input.value.trim();
  if (task !== '') {
    const li = document.createElement('li');

    li.textContent = task;
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '❌';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.onclick = function () {
      li.remove();
    };
    li.appendChild(deleteBtn);
    list.appendChild(li);
    input.value = '';
  }
}

input.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    newTask();
  }
});
