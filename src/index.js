const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const router = require('./routes');
const db = require('./config/db')
const methodOverride = require('method-override')





/* app.use(morgan('combined')); */
app.use(express.static(path.join(__dirname, 'public')));

//middleware doc body dulueu gui bamg fomr hoac js, htmlrequest, axios, fetch, 
app.use(express.urlencoded());
app.use(express.json());

app.use(methodOverride('_method'))

app.engine(
    'hbs',
    handlebars.engine({
        extname: 'hbs',
        helpers: {
            sum: (a, b) => a + b
        }
    }),
);



app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

db.connect()
router(app);

app.listen(port, () => {
    console.log(`app listen an port ${port}`);
});

