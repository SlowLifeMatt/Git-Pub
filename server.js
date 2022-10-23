const express = require(`express`);
const drinks = require("./models/drinks")
const food = require("./models/food")
const app = express();
const port = 3000;

//since you have a home route, why not create links to drinks and food
app.get('/', (req,res) => {
    res.send(`Welcome to the Gitpub App!
    <button><a href='/drinks'>DRINKS</a></button>
    <button><a href='/food'>FOOD</a></button>
    `)
})

app.get('/drinks/', (req,res) => {
    // res.send(drinks)
    res.render('drinks_index.ejs', {
        allDrinks: drinks
    })
})

app.get('/drinks/:id', (req,res) => {
    //how i solved the extension challenge
    //then i use image on line 17 in drinks_show.ejs
    let image = drinks[req.params.id].image
    image = image.substr(0, image.lastIndexOf('.')) + '.png'
    res.render('drinks_show.ejs', {
        drinks: drinks[req.params.id],
        image: image
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