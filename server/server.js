const express = require("express");
const fs = require('fs');
const app = express();
const port = 4201;

app.get('/api/questions/:id', function (req, res) {
    res.send({ title: "Do you like our app?", id: req.params['id'] });
});
app.post('/api/questions', function (req, res) {
    console.log(req);
    res.send("success");
});
app.listen(port);
console.log('Backend Server started! At http://localhost:' + port);