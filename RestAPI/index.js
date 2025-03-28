import express from "express";
import bodyParser from "body-parser";


const PORT = 5111;
const app = express();
app.use(bodyParser.json());
app.all("/", (req, res) => {
    console.log("Request > ", req);
    console.log("Response > ", res);
    res.send("I am Up!")
})


const todos = [{
    id: "1",
    title: "Task 1",
    completed: false,
}, {id: "2",
    title: "Task 2",
    completed: true,
}];

//Read data
app.get("/todos", (req, res) => {
    res.json(todos);
})

//Create
app.post("/todos", (req, res) => {
    const newTodo = req.body;
    todos.push(newTodo);
    res.json({message: "New Todo Added!"}) 
})


//Update
app.put("/todos/:id", (req, res) => {
    const newTodoData = req.body;
    const todoParamId = req.params.id
    const todoIndex = todos.findIndex(td => td.id === todoParamId);
    if(todoIndex !== -1){
        todos[todoIndex] = {
            id: todoParamId,
            ...newTodoData,
        }
    }
    res.json({
        message: "Todo updated Successfully!"
    })
})


//Delete
app.delete("/todos/:id", (req, res) => {
    
    const todoParamId = req.params.id
    const todoIndex = todos.findIndex(td => td.id === todoParamId);
    if(todoIndex !== -1){
        todos.splice(todoIndex, 1);
    }

    res.json({
        message: "Todo deleted successfully!"
    })

})


app.listen(PORT, () => {
    console.log(`Server is up and running on ${PORT}`);
})