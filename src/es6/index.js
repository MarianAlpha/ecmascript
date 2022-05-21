function newFunction(name, age, country) {
    var name = name || "Oscar";
    var age = age || 32;
    var country = country || "Col";
    console.log(name,age,country);
};

// es lo mismo que ___ en es6

function newFunction2(name = "Oscar", age = 32, country="Col") { //Se ponen por defecto
    console.log(name, age, country);
}

newFunction2(); //toma los elemtos por defecto
newFunction2("Ricardo", 32, "Mx");

//Separar o unir varios elementos

let hello = "Hello";
let wolrd = "World";
let fraseEpica = hello + " " + wolrd;
console.log(fraseEpica);

let fraseEpica2 = `${hello} ${wolrd}`; //es6
console.log(fraseEpica2);

// Texto con saltos de linea

let lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. \n" + "Otra frase lo que sea"

//es6
let lorem2 = `otra frase epica  
ahora es otra frase
`;

console.log(lorem);
console.log(lorem2);

// Acceder a objetos

let person = {
    'name': 'oscar',
    'age': 32,
    'country': 'MX'
};

console.log(person.name,person.age);

//es6
let {name, age} = person;

console.log(name,age);

//Operador de propagacion es6

let team1 = ['Oscar','Julian','Ricardo'];
let team2 = ['Valeria','Yesica','Camila'];

let education = ['David', ...team1, ...team2]; //Traer los elemtos 

console.log(education);

// var o let
 var hola = 'Hola'; //Disponible de forma global
 let Hi = 'Hi'; //Solo disponible en el bloque que voy a usar 

 {
     var globalVar = 'Global Var';
 }

 {
     let globalLet = 'Global Let'
 }

 console.log(globalVar);
 console.log(globalLet); //Sale error

 const a = 'b'; //No se puede re-asignar
 a = 'a'; //Sale error

 //Creacion de objetos
 let Name = 'Oscar';
 let age = 32;

 obj = { Name:Name,age:age}; //Normal
 obj2 = {Name,age}; //Con es6

 console.log(obj2);

 //Arrow function

 const names = [
     {name: 'Oscar', age :32},
     {name: 'Yesica', age : 26},
 ]

 let listOfNames = names.map(function(item){
     console.log(item.name);
 }); // Nomal

 let listOfNames2 = names.map(item => console.log(item.name)); //es6
 //ó
 const listOfNames3 = (name, age, country) => {
     //Codido
 };

 const listOfNames4 = name =>{
     //Codigo
 };

 const square = num => num*num;

 //Promesas, java no es sincronico las promesas es 'algo va a pasar'

 const helloPromise = () => {
     return new Promise((resolve, reject) => {
         //Codigo
         if(true) { resolve('Hey!')}
         else { reject('Ups!')}
     });
 }

 helloPromise()
 .then(response => console.log(response))
 .then(() => console.log('Hola'))
 .catch(error => console.log(error));

 // Clases

 class calculator {
     constructor() {       //Asigma las variables
         this.valueA = 0;  
         this.valueB = 0;
     }
     sum(valueA, valueB) {     //Metodo
         this.valueA = valueA;
         this.valueB = valueB;
         return this.valueA + this.valueB;
     }
 }

 const calc = new calculator();
 console.log(calc.sum(2,2));

 
 // importar y exportar

//import hello from './module'
const hello = require('./module');

 console.log(hello());

 //Multiple returns

 function* helloWorld() {
    if (true) {
        yield 'Hello, ';
    }
    if (true) {
        yield 'world';
    }
 };

 const generaorHello = helloWorld();
 console.log(generaorHello.next().value);
 console.log(generaorHello.next().value);
 console.log(generaorHello.next().value);