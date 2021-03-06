const express = require('express');
const mongoose = require('mongoose');
const key = require('./config/key');
const cookieSession = require('cookie-session');
const passport = require('passport');
//authroutes become a function
const bodyParser = require('body-parser');
const authroutes = require('./routes/authroutes');
const billingroutes = require('./routes/billingroutes');
//following two has to maintain this specitic order
require('./models/User');
require('./services/passport');
mongoose.connect(key.mongodbURI, { useNewUrlParser: true });
const app = express();
//app.use use middleware
//fix express post require issue
app.use(bodyParser.json());
app.use(cookieSession({
    //maxAge is two days in milliseconds
        maxAge: 2*24*60*60*1000,
        keys: [key.cookieKey]
    })
);
//telling passport to use cookie for authentication
app.use(passport.initialize());
app.use(passport.session());
authroutes(app);
billingroutes(app);
if(process.env.NODE_ENV == 'production'){
    //Express server will serve up production assets
    // like main.js file or main.css file
    app.use(express.static('client/build'));
    //Express will serve up index.html if it does not recognize the route
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}
const PORT = process.env.PORT || 5000;
app.listen(PORT);