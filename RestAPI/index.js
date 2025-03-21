import express from "express";
const PORT = 5111;
const app = express();
app.all("/", (req, res) => {
    console.log("Request > ", req);
    console.log("Response > ", res);
    res.send("I am Up!")
})

app.listen(PORT, () => {
    console.log(`Server is up and running on ${PORT}`);
})