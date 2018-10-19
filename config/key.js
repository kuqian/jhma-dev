//key.js
if(process.env.NODE_ENV === 'production'){
    //we are in production, return the production key
    module.exports = require('./prodkey');
}else{
    //we are in development, return the developkent key
    module.exports = require('./devkey');
}