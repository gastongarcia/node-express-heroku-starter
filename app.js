const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 5000;

const app = express();

//set the path to the public folder for static assets
app.use(express.static(path.join(__dirname, 'public')));

//set the path to the views folder
app.set('views', path.join(__dirname, 'views'));

//use express-handlebars as the views engine
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');


app.get('/', (req,res) => {
    const pageTitle = "Home";
    res.render("index", {
        pageTitle: pageTitle
    })
});


app.listen(PORT, () => console.log(`Listening on ${ PORT }`));