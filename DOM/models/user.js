const mongoos = require("mongoose")
const userSchema = new mongoos.Schema({
    usernmae:String,
    email:String,
    password:String,
})

const userModel = mongoos.model('user',userSchema)

module.exports = userModel