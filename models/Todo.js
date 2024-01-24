const mongoose = require('mongoose');

const date = new Date(); 

const formatter = new Intl.DateTimeFormat('en-US', { day: '2-digit', month: '2-digit', year: 'numeric' }); 
const formattedDate = formatter.format(date); 


const TodoSchema = new mongoose.Schema({
    description: {
        type : String,
        required: [true, 'Please add a text field']
    }, 
    completed: {
        type: Boolean,
        default: false,
    },

    date: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model('Todo',TodoSchema);


