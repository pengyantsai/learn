const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("You are in the first page!");
});

app.listen(3000, () => {
    console.log("serve is listening on port 3000");
});