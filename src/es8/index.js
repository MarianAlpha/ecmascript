const data = {
    fronted: 'Oscar',
    backend: 'Isabel',
    desind: 'ana',
}

const entries = Object.entries(data); //Convierte el objeto en una matriz
console.log(entries);
console.log(entries.length); //Numero de elementos

const values = Object.values(data); //Devuelve una lista con los valores
console.log(values);

const string = 'Hello';
console.log(string.padStart(7,'Hi')); //Agregar al inicio de cadena de caracteres, numero total y lo que añadir
console.log(string.padEnd(12,'-----'));

//

const helloWorldd = () => {
    return new Promise((resolve,reject)=> {
        (false)
        ? setTimeout(()=>resolve('Hello World'),3000)
        : reject(new Error('Test Error'))
    })
}

const haelloAsync = async () => {
    const hello = await helloWorldd();
    console.log(hello);
}

haelloAsync();

const anotherFunction = async () => {
    try {
        const hello = await helloWorldd();
        console.log(hello);
    } catch (error) {
        console.log(error);
    }
};


anotherFunction();