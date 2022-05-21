//dynamic import: podremos realizar importacion dinamica de piezas de codigo
const button = document.getElementById('btn');

button.addEventListener('click', async function () {
    const module = await import('./file.js');
    module.hello();
});

const abigNumber = 9007199254740991n;
const anotherBigNumber = BigInt(9007199254740991); //Los dos son lo mismo

console.log(abigNumber);
console.log(anotherBigNumber);

// Promise all setttled

const promise1  = new Promise((resolve,reject) => reject("Reject"));
const promise2  = new Promise((resolve,reject) => resolve("resolve"));
const promise3  = new Promise((resolve,reject) => resolve("resolve 1"));

Promise.allSettled([promise1, promise2, promise3])
    .then(response => console.log(response)) //Evalua TODAS las promesas

// Global this

console.log(window);
console.log(globalThis); //Global en todos lados

// 🔍 Nuevo operador lógico: null operator, devuelve lo del lado izq

const fooo = null ?? 'default string'; //es nulo o es default string
console.log(fooo);

//Optional chaining

const user = {};
console.log(user?.profile?.email); //Leer hasta donde exista y si no existe no slaga error

if(user?.profile?.email) {
    console.log('email')
} else {
    console.log('fail')
}



