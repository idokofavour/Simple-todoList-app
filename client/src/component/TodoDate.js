class TodoDateCreation {
    constructor() {
        this._date = document.querySelector('.date')
    }

    addEventListeners() {
        this._date.addEventListener('click', this.selectDate.bind(this))
    }

    selectDate(){
        console.log('Date was clicked')
    }
}

export default TodoDateCreation;