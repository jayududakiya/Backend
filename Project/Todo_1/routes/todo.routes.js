const express = require('express');
const todoRoute = express.Router();
const Todo = require('../model/todo.model'); // Adjust the path accordingly

todoRoute.get('/', async (req, res) => {
    try {
        console.log('login User',req.user);
        const todos = await Todo.find({ isDeleted: false });
        res.status(200).json(todos);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving Todos", error });
    }
});

todoRoute.post('/createTodo', async (req, res) => {
    try {
        console.log('user Todo',req.user);
        const todo =  await Todo.create({...req.body});
        res.status(201).json({message : 'Todo ADD ',todo});
    } catch (error) {
        res.status(500).json({ message: "Error creating Todo", error });
    }
});


module.exports = todoRoute;

