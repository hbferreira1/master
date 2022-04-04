// CRUD create read update delete

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'


MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Não foi possível conectar ao banco de dados')
    }

    const db = client.db(databaseName)

    const updatePromise = db.collection('users').updateOne({
        _id: new ObjectID("624a0d94e36d10b6fef23f35")
    }, {
        $inc: {
            age: 22
        }
    })
    updatePromise.then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })



    // db.collection('users').findOne({ _id: new ObjectID("624a400433cd35e6b44eb2c2") }, (error, user) => {
    //     if (error) {
    //         return console.log('não foi possível localizar')
    //     }

    //     console.log(user)
    // })

    // db.collection('users').find({age: 17}).toArray((error, users) => {
    //     console.log(users)
    // })
    // db.collection('users').find({age: 17}).count((error, count) => {
    //     console.log(count)
    // })



    // ------------------insertOne----------------------

    // db.collection('users').insertOne({
    //     name: ' Victor Hugo',
    //     age: 22
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Não foi possível inserir usuário')
    //     }

    //     console.log('Id criado ' + result.insertedId)
    // })


    // ------------------insertMany----------------------


    // db.collection('users').insertMany([
    //     {
    //        name: 'Bernardo',
    //        age: 17 
    //     },
    //     {
    //         name: 'Cleide',
    //         age: 57
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Não foi possível inserir usuários')
    //     }

    //     console.log(result.insertedIds)
    // })


//----------------------desafio---------------------------


    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Levar o lixo',
    //         completed: true
    //     },
    //     {
    //         description: 'Lavar a louça',
    //         completed: false
    //     },
    //     {
    //         description: 'comprar o pão',
    //         completed: true
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Não foi possível adicionar tarefas')
    //     }

    //     console.log(result.insertedIds)
    // })
})