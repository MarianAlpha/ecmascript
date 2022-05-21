/* Array.prototype.flat(nivel_de_profundidad): un nuevo método que nos permite aplanar arreglos.

Array.prototype.flatMap() lo mismo que flat con el beneficio de que primero manipular la data para luego 
poder aplanar.

String.prototype.trimStart() | String.prototype.trimEnd() permite quitar los espacios al inicio o al final
 dependiendo de la funciona.

try/catch: ahora puedes utilizarlo sin necesidad de especificaro como catch(error) sino directamente usarlo 
en el scope del catch.

Object.fromEntries() lo inverso a Object.entries(), es decir podemos convertir un objeto en una matriz 
clave/valor con Object.entries(), y hace lo inverso es decir de una matriz clave/valor a un objeto con 
Object.fromEntries().

Symbol.prototype.description: permite regresar el descripcion opcional del Symbol */
let array = [1,2,3,[1,2,3,[1,2,3]]];

console.log(array.flat(2)); //flat recibe la profundidad y aplana el arreglo

let array1 = [1,2,3,4,5];
console.log(array1.flatMap(value => [value, value * 2])); //imprime el numero y luego el num x 2

let hello = '      Hello world';
console.log(hello);
console.log(hello.trimStart()); //Elimina espacio al inicio

let hello2 = 'Hello world       ';
console.log(hello2);
console.log(hello2.trimEnd());

try {

} catch {
    error
}

let entries = [["name","Oscar"],["age",32]];
console.log(Object.fromEntries(entries));  //Crea un objeto desde un arreglo

let mySymbl  = 'My symbol';
let symbol = Symbol(mySymbl);
console.log(symbol.description);