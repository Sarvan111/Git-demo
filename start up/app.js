const path = require('path');

const express = require('express');

const errorController = require('./controllers/error.js');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const contactRoutes=require('./routes/contact')

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(contactRoutes);

app.use(errorController.get404);

app.listen(3000);
