const express = require("express");
const app = express();
const port = 5000;
const cors = require('cors');

app.use(cors())
const categories = require('./data/categories.json');
const courses = require('./data/courses.json');

app.get('/', (req, res) => {
    res.send('Nws API Running');
});

app.get('/course-categories', (req, res) => {
    res.send(categories);
})

app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    if(id==="06"){
        res.send(news);
    }
    else{
        const category_courses = news.filter(n => n.category_id === id);
    res.send(category_courses);

    }
})

app.get('/courses', (req, res)=> {
    res.send(news);
})

app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourses = news.find(n => n._id === id);
    res.send(selectedCourses);
})

app.listen(port, () => {
    console.log('HELLO NEWS', port);
});