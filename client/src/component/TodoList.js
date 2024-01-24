import todosApi from "../services/todosApi";
import TodosApi from "../services/todosApi";
class TodoList {
    constructor() {
        this._todoListEl = document.querySelector('#card');

        this._todos = []
        this.getTodos();
    }

    addEventListeners() {
        this._todoListEl.addEventListener('click', (e)=> {
            if(e.target.classList.contains('fa-times')) {
                e.stopImmediatePropagation();
                const todoId = e.target.parentElement.parentElement.dataset.id;
                // console.log(todoId)
                this.deleteTodo(todoId);
            }
            if(e.target.classList.contains('checkbox')) {
                e.stopImmediatePropagation();
                const todoId = e.target.parentElement.parentElement.dataset.id;
                this.markAsCompleted(todoId);
            }
        })
    }

    // async updatedTodo() {
    //     try {
    //         const res = await todosApi.updateTodo()
    //     } catch (error) {
            
    //     }
    // }

    async markAsCompleted(todoId) {
        try {
            const res = await TodosApi.getTodoByIdAndUpdated(todoId);
            console.log(this._todos[0])

            const date = new Date(); 
            const formatter = new Intl.DateTimeFormat('en-NG', 
            { day: '2-digit', month: '2-digit', year: 'numeric' }); 
            const formattedDate = formatter.format(date); 

            console.log(formattedDate);

            console.log()
        
            

        } catch (error) {
            console.log(error);
        }
        
    }


    
    // async onClick(e) {
    //     if(this._checkInput.checked === true) {
    //         const clickedP = document.querySelector('.description');
    //         clickedP.style.color = '#cfcfcfef';
    //     } else {
    //         const clickedP = document.querySelector('.description');
    //         clickedP.style.color = '#000';

    //     }

    // }


    async getTodos() {
        try {
            const res = await TodosApi.getTodos();
            this._todos = res.data.data;
            // console.log(this._todos)
            // console.log(this._todos)
            this.render();

        } catch (error) {
            console.log(error)
        }

    }

    async deleteTodo(todoId) {
        try {
            // Delete from server
            console.log(todoId)
            const res = await TodosApi.deleteTodo(todoId);
            // console.log(res);
            this.getTodos();
            console.log(this.getTodos());
        } catch (error) {
            alert('You can not delete this resource');
        }
    }

   
    addTodoList(todo) {
        this._todos.push(todo);
        this.getTodos();
        this.render();
    }

    render() {
       this._todoListEl.innerHTML = this._todos.map((todo) => {
                return `
                <div id="list-div" data-id="${todo._id}"> 
                    <div id="todo-items" d>
                        <input type="checkbox" class="checkbox check-input">
                         <p class="description">${todo.description}</p>
                        <i class="fa-solid fa-times"></i>
                        </div>
                        `
                    }).join('');
                    
                    this.addEventListeners();
                    
                    // this._checkInput = document.querySelector('.checkbox');
                    // this._listItem = document.querySelector('.description');
                    
                    // this._checkInput.addEventListener('click', this.checkIfCompleted.bind(this));
        

                // });
    // });
    }
};

    export default TodoList;

    // const deleteBtn = todo.description === localStorage.getItem('description') ? `<i class="fa-solid fa-times"></i>`: ''

    // ${deleteBtn}