const express = require('express');
const exphbs  = require('express-handlebars');
const app = express();
const path = require('path');
app.use(express.static(path.join(__dirname,'public')));
app.use(express.static('public/images'));
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/LogIn',  (req, res)=>
{
    res.render('home/LogIn');
});
app.get('/SignUp',  (req, res)=>
{
    res.render('home/SignUp');
});
app.get('/',  (req, res)=>
{
    res.render('home/HomePage');
});
app.get('/Profile',  (req, res)=>
{
    res.render('home/Profile');
});
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));