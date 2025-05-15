const mongoos = require('mongoose')
const connection = mongoos.connect('mongodb://0.0.0.0/men').then(()=>{
    console.log("connected to database")
})

module.exports = connection