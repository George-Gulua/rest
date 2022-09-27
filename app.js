const express = require('express')
const app = express()
const cors = require('cors')
const Todo = require('./models/todo')
const { tryConnect } = require('./connect/connect')
app.use(express.json())
app.use(cors())

tryConnect().catch()

app.get('/api/todos', (request, response) => {
    Todo.find((error, result) => {
        response.send(result)
    })
})

app.post('/api/todos/',  (request, response) => {
    Todo ({
        ...request.body,
        completed: false
    }).save().then(() => {
        Todo.find((error, result) => {
            response.send(result)
        })
    })
})

app.delete('/api/todos/:_id', (request, response) => {
    Todo.deleteOne({ _id: request.params._id }).then(() => {
        Todo.find((error, result) => {
            response.send(result)
        })
    })
})

app.listen(2000,() => console.log('Server started...'))