const keys = require('../config/key');
const stripe = require('stripe')(keys.stripeSecretKey);
const path = require('path');
const requireLogin = require('../middlewares/requireLogin');
//express does not automatically parse the post require body
module.exports = app => {
    app.post('/api/stripe', requireLogin, async (req, res) => {
        const charge = await stripe.charges.create({
            amount: 5000,
            currency: 'usd',
            description: 'adding credit',
            source: req.body.id
        });
        console.log(charge);
        //why can we access user by using req.user? this is set up by passport
        req.user.credits += 50;
        const updatedUser = await req.user.save();
        res.send(updatedUser);
    });
}