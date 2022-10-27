const express = require("express");
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;


app.use(cors())

const course = require('./Data/course.json');

app.get('/', (req, res) => {
    res.send('Nws API Running');
});


app.get('/course', (req, res)=> {
    res.send(course);
})

app.get('/course/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourse = course.find(n => n._id === id);
    res.send(selectedCourse);
})

app.get('/premium/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourse = course.find(n => n._id === id);
    res.send(selectedCourse);
})

app.listen(port, () => {
    console.log('HELLO NEWS', port);
});