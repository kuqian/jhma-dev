const passport = require('passport');
const path = require('path');
module.exports = app => {
    app.get('/', (req, res) => {
        res.send({hi: "what"});
    });
    app.get('/auth/google', passport.authenticate('google', {
        scope: ['profile', 'email']
    }));
    app.get(
        '/auth/google/callback', 
        passport.authenticate('google'),
        (req, res)=>{
            res.redirect('/surveys');
        }
    );
    app.get('/google60e985a04c73366b.html', (req, res) => {
        res.sendFile(path.join(__dirname + '/public/google60e985a04c73366b.html'));
    });
    //logout
    app.get('/api/logout', (req, res) => {
        req.logout();
        res.redirect('/');
    });
    //passport authomiatically attach 'user' to req object 
    app.get('/api/current_user', (req, res)=>{
        res.send(req.user);
    });
}