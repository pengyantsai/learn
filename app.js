const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});


app.get('/daniel', (req, res) => {
    res.send("this is daine pages");
});

app.get('/jack', (req, res) => {
    res.send("this is jack daine pages!");
});

app.get('/fruit/:someFruit', (req, res) => {
    let {someFruit} = req.params;
    res.send("you are looking for " + someFruit);
})

app.post("/formHandling",(req, res) => {
    let {fullname , age} = req.body;
    res.send(`thanks for posting your name is ${fullname} and your age is ${age}`);
})

/*IF USE METHOD GET
app.get('/formHandling', (req, res) => {
    let {fullname , age} = req.query;
    res.send(`thanks ${fullname} for sending data`);
})*/


app.get('*', (req, res) => {
    res.send("can not find what you want");
})


app.listen(3000, () => {
    console.log("serve is listening on port 3000");
});