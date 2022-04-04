const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api')

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
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
    }
})

const me = new User({
    name: 'Hugo',
    email: 'hugo@teste.com'
})

me.save().then(() => {
    console.log(me)
}).catch((error) => {
    console.log('Erro', error)
})


// const Tasks = mongoose.model('Tasks', {
//     description: {
//         type: String
//     },
//     completed : {
//         type: Boolean
//     }

// })

// const task = new Tasks({
//     description: 'Levar o lixo',
//     completed: false
// })

// task.save().then(() => {
//     console.log(task)
// }).catch((error) => {
//     console.log('Ops! Algo de errado!', error)
// })