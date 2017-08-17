const express = require("express")
const app = express()
const mustache = require("mustache-express")
const bodyParser = require("body-parser")
const expressValidator = require("express-validator")


app.engine("mustache", mustache())
app.set("view engine", "mustache")
app.use(express.static("public"))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(expressValidator())


const todos = [
    "learn code",
    "learn javascript",
    "learn HTML",
    "learn CSS"
];

const complete = [
    "things"
]

app.get("/", function (req, res) {
  res.render('index', {
  todos: todos,
  complete: complete
});
});

app.post("/", function (req, res) {
  todos.push(req.body.todo);
  res.redirect('/');
})

//
app.post("/complete", function (req, res) {
  complete.push(req.body.button);
  res.redirect('/');
  console.log(complete)
})

app.delete("/", function (req, res) {
   todos.splice(req.body.value);
   res.redirect('/');
})


app.listen(3000, function() {
  console.log("Listening on 3000")
})
