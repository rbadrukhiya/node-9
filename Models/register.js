const mongoose = require('mongoose');
const user = mongoose.Schema;

const schema = new user({
    name:({
        type:String
    }),
    email:({
        type:String
    }),
    password:({
        type:String
    })
})

const MyModel = mongoose.model('demo', schema);

module.exports = MyModel