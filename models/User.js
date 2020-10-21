const validator = require("validator")

let User = function(userData) {
    this.data = userData
    this.errors = []
}

User.prototype.cleanUp = function() {
    if (typeof(this.data.username) != "string") { this.data.username = "" }
    if (typeof(this.data.email) != "string") { this.data.email = "" }
    if (typeof(this.data.password) != "string") { this.data.password = "" }

    // Get rid of any bogus properties
    this.data = {
        username: this.data.username.trim(),
        email: this.data.email.trim().toLowerCase(),
        password: this.data.password
    }
}

User.prototype.validate = function() {
    if (this.data.username == "") { this.errors.push("You must provide a username") }
    if (this.data.username != "" && !validator.isAlphanumeric(this.data.username)) { this.errors.push("Username can only contain letters and numbers") }
    if (!validator.isEmail(this.data.email)) { this.errors.push("You must provide a valide email address") }
    if (this.data.password == "") { this.errors.push("You must provide a password") }
    if (this.data.password.length > 0 && this.data.password.length < 8) { this.errors.push("Password must be at least 8 charecters") }
    if (this.data.password.length > 100) { this.errors.push("Password cannot exceed 100 charecters") }
    if (this.data.username.length > 20) { this.errors.push("Username cannot exceed 20 charecters") }
}

User.prototype.register = function() {
    // Validate user data
    this.cleanUp()
    this.validate()

    // Only if there are no validation errors
    // then save the user data into a database
}

module.exports = User