const doWorkPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve([7, 4, 1])
        reject('As coisas deram errado')
        resolve([2, 3, 2])
    }, 2000)
})

doWorkPromise.then((result) => {
    console.log('Sucesso!', result)
}).catch((error) => {
    console.log('Erro!', error)
})