const mongoose = require("mongoose")

const schema = mongoose.Schema;

const user = schema({
    firstName: {type: String, required: true},
    lastName:{type: String, required: true},
    birthday:{type: String, required: true},
    age:{type: Number, required: true},
    hobby:{type: String, required: true}
})

module.exports = mongoose.model("User", user)