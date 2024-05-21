const express = require('express');
const app = express();

require('dotenv').config({ path: './config/.env'});

app.set('views', path.join(__dirname, 'views')); // Set the correct views directory
app.set('view engine', 'ejs');

app.set("view engine", "ejs");

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (request,response) => {
        response.sendFile(__dirname + './public/index.html')
    });

app.get('/portfolio', (request,response) => {
        response.render('portfolio')
    });    

app.listen(process.env.PORT, () => {
    console.log(`Server is running, you better go catch it`);
});
