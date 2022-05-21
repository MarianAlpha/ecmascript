const string = "JavaScript es maravilloso, con JavaScript puedo crear el futuro de la web"

const replacesString = string.replace("JavaScript", "Python") //Solo cambia el primer elemento
console.log(replacesString);

const replacedString2 = string.replace(/Javascript/g, "Python");
console.log(replacedString2);

const replaceString3 = string.replaceAll("JavaScript", "Python");
console.log(replaceString3);