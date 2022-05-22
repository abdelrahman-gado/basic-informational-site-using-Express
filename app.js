const express = require('express');
const path = require('path')

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/about', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "public", 'about.html'));
});

app.get('/contact-me', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, 'public', 'contact-me.html'));
});


// if user enter other paths not handled in our app (wrong route), This middleware will
// end the request/response cycle
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
})

app.listen(PORT, () => console.log(`The server is running at port 3000`));