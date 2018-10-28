const mongoose = require('mongoose');
//destructive way of writin this:
//const { Schema } = mongoose;
const Schema = mongoose.Schema;
//schema can be change easily here
//we create a schema here
const userSchema = new Schema({
    googleID: String,
    displayName: String,
    credits:{
        type: Number,
        default: 0
    },
    dates:[Date]
});
//load the schema we just create into mongoose
mongoose.model('users', userSchema);