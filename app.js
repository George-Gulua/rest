const express = require('express')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())

let TODOS = []

app.get('/api/todos', (request, response) => {
    response.status(200).json(TODOS)
})

app.post('/api/todos/', (request, response) => {
    const todo = {
        ...request.body,
        completed: false
    }
    TODOS.push(todo)
    response.status(201).json(TODOS)
})

app.delete('/api/todos/:id', (request, response) => {
    TODOS = TODOS.filter(todo => todo.id !== +request.params.id)
    response.status(200).json(TODOS)
})

app.listen(2000,() => console.log('Server started...'))