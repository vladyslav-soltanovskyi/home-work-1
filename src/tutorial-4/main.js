window.addEventListener("DOMContentLoaded", function() {
    const todoList = getTodoList();
    const form = document.querySelector('.todo-form');
    const containerTodoList = document.querySelector('.todo-list');

    render();

    form.addEventListener('submit', handleClickAdd);
    containerTodoList.addEventListener('click', onClickTodoList);

    function handleClickRemove(index) {
        todoList.splice(index, 1);
        render();
        setTodoList();
    }
    
    function handleClickAdd(e) {
        e.preventDefault();
        let value = e.target.todo.value.trim();
    
        if(!value) {
            return;
        }
    
        todoList.push(value);
        e.target.reset();
        render();
        setTodoList();
    }
    
    function onClickTodoList(e) {
        let todoIndex = e.target.dataset.todoIndex;
        
        if(!todoIndex) {
            return;
        }
    
        handleClickRemove(todoIndex);
    }
    
    
    function setTodoList() {
        localStorage.setItem('todo-list', JSON.stringify(todoList));
    }
    
    function getTodoList() {
        let data = localStorage.getItem('todo-list');
        return data ? JSON.parse(data) : [];
    }
    
    function render() {
        let list = "<ul>";
    
        todoList.forEach((todoItem, index) => {
            list += `<li>${todoItem}<button type="button" data-todo-index="${index}">X</button></li>`;
        });
        
        list += "</ul>";
    
        containerTodoList.innerHTML = list;
    }
});