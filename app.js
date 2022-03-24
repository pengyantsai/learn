const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("<h1>You are in the first page!<h1>");
});


app.get('/daniel', (req, res) => {
    res.send("this is daine pages");
});

app.get('/jack', (req, res) => {
    res.send("this is jack daine pages!");
});


app.listen(3000, () => {
    console.log("serve is listening on port 3000");
});