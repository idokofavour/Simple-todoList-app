import axios from 'axios'
class TodosApi {
    constructor() {
        this._apiUrl = 'http://localhost:5000/api/todoList';
    }

    getTodos() {
        return axios.get(this._apiUrl)
    }

    createTodo(data) {
        return axios.post(this._apiUrl, data);
    }

    updateTodo(id, data) {
        return axios.put(`${this._apiUrl}/${id}`, data)
    
    }

    
    deleteTodo(id) {
        const description = localStorage.getItem
        ('description')? localStorage.getItem('description'): '';
        return axios.delete(`${this._apiUrl}/${id}`, {
            data: {
                description,
            }
    });      
    }

    async getTodoByIdAndUpdated(id) {
        let res = await axios.get(`${this._apiUrl}/${id}`);
        const d = res.data;

        const isComplete =  d.data.completed;

        if(isComplete === false) {
            axios.put(`${this._apiUrl}/${id}`, {
                   description: d.data.description,
                   completed: true,
            })
        } else {  
            axios.put(`${this._apiUrl}/${id}`, {
                description: d.data.description,
                completed: false,

            })

            console.log(isComplete)
             
            }

}}

export default new TodosApi();
