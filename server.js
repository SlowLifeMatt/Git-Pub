const express = require(`express`);
const drinks = require("./models/drinks")
const food = require("./models/food")
const app = express();
const port = 3000;

app.get('/', (req,res) => {
    res.send(`Welcome to the Gitpub App!`)
})

app.get('/drinks/', (req,res) => {
    // res.send(drinks)
    res.render('drinks_index.ejs', {
        allDrinks: drinks
    })
})

app.get('/drinks/:id', (req,res) => {
    // res.send(req.params.id)
    res.render('drinks_show.ejs', {
        drinks: drinks[req.params.id],
        
       
    })
})

app.get('/food/', (req,res) => {
    
    res.render('food_index.ejs', {
        allFood: food
    })
})

app.get('/food/:id', (req,res) => {
    // res.send(req.params.id)
    res.render('food_show.ejs', {
        food: food[req.params.id],
        
       
    })
})



app.listen(port, () => {
    console.log(`listening`);
})