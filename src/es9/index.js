const obj = {
    name: 'Oscar',
    age: 32,
    country: 'MX'
};

let { name, ...all } = obj; //No mostrar el name
console.log(all);

//
const obj2 = {
    name: 'Oscar',
    age: 32,
};

const obj3 = {  //Pone los elementos de obj2 en obj3
    ...obj2,
    country: 'MX',
}

console.log(obj3);

// Cuando ha terminado el llamado del promise

const helloWorld = () => {
    return new Promise((resolve,reject) => {
        (true)
        ? setTimeout(() => resolve('Hello World'), 3000)
        : reject(new Error('Test Error'))
    });
}

helloWorld()
.then(response => console.log(response))
.catch(error => console.log(error))
.finally(() => console.log('Finalizó'))

//
//Numero de 0 a 9 con 4 digitos año, mes 0-9, 3 digitos, dia
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20');
const year = match[1]
const month = match[2]
const day = match[3]

console.log(year, month, day)