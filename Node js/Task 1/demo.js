import express from "express";
import { engine } from 'express-handlebars';
const web = express();
web.engine('handlebars', engine());
web.set('view engine', 'handlebars');
web.set('views', './views');

const student = [
    {
        id: 1,
        name: "Hazem",
        age: 21
    },
    {
        id: 2,
        name: "Ahmed",
        age: 20
    },
    {
        id: 3,
        name: "Alaa",
        age: 18
    },
    {
        id: 4,
        name: "Mohsen",
        age: 20
    },
]

const studentFunction = (request, response) => {
    response.render("students", { layout: false, student: student });
};

web.get('/students', studentFunction)

web.get("/students/:id", (req, res) => {

    const id = req.params.id
    const obj = student.find((item) => {
        return item.id == id;
    })
    res.render("student", { layout: false, student: obj });
});

web.listen(5000);
