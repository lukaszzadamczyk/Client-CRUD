const express = require('express');
const hbs = require('express-handlebars');
const {clientRouter} = require("./routers/client");
const {homeRouter} = require("./routers/home");
const {db} = require('./utils/db');

const app = express();

app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({
    extended: true,
}));

app.engine('.hbs', hbs.engine({
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

app.use('/', homeRouter);
app.use('/client', clientRouter);

app.listen(3000, 'localhost', () => {
    console.log('Listening on http://localhost:3000');
})