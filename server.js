const express = require(`express`);
const drinks = require("./models/drinks")
const app = express();
const port = 3000;

app.get('/', (req,res) => {
    res.send(`Welcome to the Gitpub App!`)
})

app.get('/drinks/', (req,res) => {
    // res.send(drinks)
    res.render('index.ejs', {
        allDrinks: drinks
    })
})

app.get('/drinks/:id', (req,res) => {
    res.send(req.params.id)
})



app.listen(port, () => {
    console.log(`listening`);
})