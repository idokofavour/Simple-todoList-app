import TodosApi from "../services/todosApi";
import TodoList from "./TodoList";
class TodoForm {
    constructor() {
        this._form = document.querySelector('#todo-form') ;
        this._formModel = document.querySelector('#form-model');
        this._input = document.querySelector('input');
        this._todoList = new TodoList();
        this.addEventListeners()    
    }

    addEventListeners() {
    this._form.addEventListener('submit', this.handleSubmit.bind(this))
    }
    
    async handleSubmit(e) {
        e.preventDefault();

        if(!this._form.elements.description.value) {
            alert('Please enter field')
            return;
        }

        // Save Items to local storage
        localStorage.setItem('description', this._form.elements.description.value)
        
        const todo = {
            description: this._form.elements.description.value,
        }

        // Add todo to server
        const newTodo = await TodosApi.createTodo(todo)

        // Add todo to list
        this._todoList.addTodoList(newTodo.data.data)


        // Clear fields
        this._form.elements.description.value = '';
    }

    render() {
        this._formModel.innerHTML = `
        <div class="form-control">
            <input type="text" placeholder="Enter todoList Item" id="input-form" name="description"}">
        </div>
        `
    }

};

export default TodoForm;

// addBtn.addEventListener('click', submitInput)