const express = require('express');
const path = require('path');
const app = express();
/* const port = 3000; */
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const router = require('./routes');
const db = require('./config/db')
const methodOverride = require('method-override')
const http = require('http');
const port = 80;

const hostname = 'render'
const server = http.createServer((req,res)=>{
  
    // Handling Request and Response 
    res.statusCode=200;
    res.setHeader('Content-Type', 'text/plain')
    res.end("Welcome to mein nodejs")
});



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

router(app);
db.connect()

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

/* app.listen(port, () => {
    console.log(`app listen an port ${port}`);
}); */
server.listen(port,hostname,()=>{
  
    // Callback 
    console.log(`Server running at http://${hostname}:${port}/`);
});
