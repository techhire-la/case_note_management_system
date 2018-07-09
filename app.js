const express = require('express');
const app = express();
app.set('view engin', 'pug');
app.get('/', (req, res) => {

res.send('<h1>Index Page Goes Here!!!<h1>');

});

app.listen(4000, () => {
console.log('the application is running')
});
