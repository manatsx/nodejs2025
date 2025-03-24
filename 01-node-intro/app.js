// Importamos el módulo 'fs' para trabajar con archivos en Node.js
const fs = require("fs");

// Leemos el contenido del archivo 'react.md' en formato de texto ('utf8')
const data = fs.readFileSync("react.md", "utf8");

// Reemplazamos todas las ocurrencias de 'React' (sin importar mayúsculas o minúsculas) por 'Angular'
const newData = data.replace(/React/gi, "Angular");

// Escribimos el contenido modificado en un nuevo archivo llamado 'angular.md'
fs.writeFileSync("angular.md", newData);
