const express = require('express');
const app = express();
const multer = require('multer');
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

// Set up multer for file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/images'); // Directory to save uploaded files
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage: storage });

app.set('view engine', 'ejs');

// enable static files
app.use(express.static('public'));

app.use(express.urlencoded({
    extended: false
}));

// enable static files
app.use(express.static('public'));

app.get('/', function(req, res) {
    res.render('index');
});

app.get('/contact', function(req, res) {
    res.render('contact');
});

// GET route to render the 'about.ejs' view and send data to it
app.get('/about', function(req, res) {
    res.render('about');
});

app.get('/profile', (req, res) => {
    res.render('profile');
});

app.get('/coding', (req, res) => {
    res.render('coding');
});

app.get('/data', (req, res) => {
    res.render('data');
});

app.get('/design', (req, res) => {
    res.render('design');
});

app.get('/graphicdesign', (req, res) => {
    res.render('graphicdesign');
});

app.get('/uiuxdesign', (req, res) => {
    res.render('uiuxdesign');
});

app.get('/htmljavascriptcss', (req, res) => {
    res.render('htmljavascriptcss');
});

app.get('/mobileapp', (req, res) => {
    res.render('mobileapp');
});

app.get('/powerBI', (req, res) => {
    res.render('powerBI');
});

app.get('/Tableau', (req, res) => {
    res.render('Tableau');
});

const PORT = process.env.PORT || 3004;
app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
