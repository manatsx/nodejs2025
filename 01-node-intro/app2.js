// Importamos el módulo 'fs' para trabajar con archivos del sistema
const fs = require("fs");

// Leemos el contenido del archivo 'README.md' en formato de texto ('utf8')
const content = fs.readFileSync("README.md", "utf8");

// Dividimos el contenido en un array de palabras separadas por espacios
const words = content.split(" ");

// Contamos cuántas veces aparece la palabra "React" (sin importar mayúsculas o minúsculas)
// Utilizamos una expresión regular con 'match' para encontrar todas las coincidencias
const reactWordCount = content.match(/react/gi)?.length ?? 0;

// Mostramos en consola la cantidad total de palabras en el archivo
console.log("Palabras:", words.length);

// Mostramos cuántas veces aparece "React" en el archivo (sin importar mayúsculas o minúsculas)
console.log("Palabras React:", reactWordCount);
