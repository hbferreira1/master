const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api')

// const User = mongoose.model('User', {
//     name: {
//         type: String
//     },
//     age: {
//         type: Number
//     }
// })

// const me = new User({
//     name: 'Hugo',
//     age: 21
// })

// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log('Erro', error)
// })


const Tasks = mongoose.model('Tasks', {
    description: {
        type: String
    },
    completed : {
        type: Boolean
    }

})

const task = new Tasks({
    description: 'Levar o lixo',
    completed: false
})

task.save().then(() => {
    console.log(task)
}).catch((error) => {
    console.log('Ops! Algo de errado!', error)
})