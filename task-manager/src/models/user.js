const mongoose = require('mongoose')
const validator = require('validator')

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Esse e-mail é inválido')
            }
        }
    },
    age: {
        type: Number,
        validate(value) {
            if ( value < 0) {
                throw new Error('A idade deve ser um número positivo')
            }
        } 
    },
    password: {
        type: String,
        required: true,
        minlength: 7,
        trim: true,
        validate(value) {
            if ( value.toLowerCase().includes('password')) {
                throw new Error('A senha não pode ser "password"')
            }
        }
    }
})

module.exports = User