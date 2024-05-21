const express = require('express');
const path = require('path');
const app = express();

require('dotenv').config({ path: './config/.env'});

app.set('views', path.join(__dirname, 'views')); // Set the correct views directory
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (request,response) => {
        response.sendFile(path.join(__dirname, 'public', 'index.html'));
    });

app.get('/portfolio', (request,response) => {
        response.render('portfolio')
    });    

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running on port ${process.env.Port || 3000}, you better go catch it`);
});
