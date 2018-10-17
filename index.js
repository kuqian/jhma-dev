const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');

const app = express();
app.get('/', (req, res) => {
    res.send({hi: "there"});
});
const PORT = process.env.PORT || 5000;
app.listen(PORT);