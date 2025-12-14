const addBtn = document.getElementById('add-btn');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

// Add new task
addBtn.addEventListener('click', () => {
  const taskText = todoInput.value.trim();
  if(taskText === "") return;

  const li = document.createElement('li');
  li.textContent = taskText;

  // Delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '✖';
  deleteBtn.classList.add('delete-btn');
  li.appendChild(deleteBtn);

  // Toggle completed
  li.addEventListener('click', (e) => {
    if(e.target.tagName !== 'BUTTON') {
      li.classList.toggle('completed');
    }
  });

  // Delete task
  deleteBtn.addEventListener('click', () => {
    li.remove();
  });

  todoList.appendChild(li);
  todoInput.value = '';
});

// Optional: Enter key to add task
todoInput.addEventListener('keypress', (e) => {
  if(e.key === 'Enter') addBtn.click();
});
