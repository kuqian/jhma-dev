const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const path = require('path');

const app = express();
// passport.use(new GoogleStrategy( {}, function(){}))
// app.get('/', (req, res) => {
//     res.send({hi: "what"});
// });
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/google60e985a04c73366b.html'));
});
const PORT = process.env.PORT || 5000;
app.listen(PORT);