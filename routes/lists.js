const express = require('express');
const router = express.Router();
const Todo = require('../models/Todo')

router.get('/', async (req, res) => {
    try {
        const todos = await Todo.find();
        res.json({success: true, data: todos })
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, error: 'Something went wrong' })
    }
});

// Get single todoList
router.get('/:id', async (req, res)=> {
   try {
    const todo = await Todo.findById(req.params.id);
    return res.json({ success: true, data: todo })

   } catch (error) {
    console.log(error)
    return res.status(500).json({ success: false, error: 'Something went wrong' })

   }

    // res.json({ success: true, data: todo })
})

//add new todoList
router.post('/', async (req, res) => {
    const todo = new Todo({
        description: req.body.description,
        completed: req.body.completed,
    });
    try {
        const savedTodo = await todo.save();
        res.json({ success:'true', data: savedTodo});
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, error:'Something went wrong' });
    }
})

// Update todoList
router.put('/:id', async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.id);

        // Match description
        if(todo.description === req.body.description) {
            console.log("IN " + req.body)
            const updatedTodo = await Todo.findByIdAndUpdate(
                req.params.id,
                {
                    $set: {
                        description: req.body.description,
                        completed: req.body.completed,
                   },
                    },
                    { new: true }
                );
                return res.json({ success: true, data: updatedTodo })
        }

        // description do no match
        res.status(403).json({ success: false, error: 'You are not authorized to Update this resources' });

    } catch (error) {
        console.log(error);
        res.status(404).json({ success: false, error: 'Something went wrong' });
    }
})

// delete todo
router.delete('/:id', async (req, res) => {
    try {
            await Todo.findByIdAndDelete(req.params.id);
            return res.json({ success: true, data: {} });

    } catch (error) {
        console.log(error);
        res.status(404).json({ success: false, error: 'Something went wrong' });
    }
});

module.exports = router;