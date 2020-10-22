const mongodb = require('mongodb')
const connectionString = 'mongodb+srv://MyToDoApp:MyToDo2055@cluster0.idykx.mongodb.net/FamilyApp?retryWrites=true&w=majority'

mongodb.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true }, function(err, client) {
    module.exports = client.db()
    const app = require('./server')
    app.listen(5000)
})