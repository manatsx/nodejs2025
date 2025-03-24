### **FS (File System) en Node.js**

En **Node.js**, `fs` (**File System**) es un módulo que permite interactuar con el sistema de archivos del sistema operativo. Se usa para leer, escribir, modificar y manipular archivos y directorios.

---

## **📌 Importar el módulo FS**

Para usarlo, lo importamos con `require` o `import`:

```js
const fs = require("fs"); // CommonJS
```

```js
import fs from "fs"; // ESM (si tienes "type": "module" en package.json)
```

---

## **📂 Operaciones principales con FS**

El módulo **FS** permite trabajar de dos maneras:  
1️⃣ **Sincrónico (Bloqueante)**  
2️⃣ **Asincrónico (No bloqueante, recomendado)**

---

### **📌 Leer un archivo**

**Asincrónico (`readFile`)**

```js
fs.readFile("archivo.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error al leer el archivo:", err);
    return;
  }
  console.log("Contenido del archivo:", data);
});
```

**Sincrónico (`readFileSync`)**

```js
const data = fs.readFileSync("archivo.txt", "utf8");
console.log("Contenido del archivo:", data);
```

---

### **📌 Escribir en un archivo**

**Asincrónico (`writeFile`)**

```js
fs.writeFile("archivo.txt", "Hola Mundo!", (err) => {
  if (err) throw err;
  console.log("Archivo guardado!");
});
```

**Sincrónico (`writeFileSync`)**

```js
fs.writeFileSync("archivo.txt", "Hola Mundo!");
console.log("Archivo guardado!");
```

---

### **📌 Agregar contenido a un archivo**

**Asincrónico (`appendFile`)**

```js
fs.appendFile("archivo.txt", "\nNueva línea agregada", (err) => {
  if (err) throw err;
  console.log("Texto agregado!");
});
```

**Sincrónico (`appendFileSync`)**

```js
fs.appendFileSync("archivo.txt", "\nNueva línea agregada");
console.log("Texto agregado!");
```

---

### **📌 Eliminar un archivo**

```js
fs.unlink("archivo.txt", (err) => {
  if (err) throw err;
  console.log("Archivo eliminado!");
});
```

---

### **📌 Crear un directorio**

```js
fs.mkdir("mi_carpeta", (err) => {
  if (err) throw err;
  console.log("Carpeta creada!");
});
```

---

### **📌 Verificar si un archivo existe**

```js
fs.access("archivo.txt", fs.constants.F_OK, (err) => {
  console.log(err ? "No existe" : "Existe");
});
```

---

### **📌 Leer archivos de un directorio**

```js
fs.readdir(".", (err, files) => {
  if (err) throw err;
  console.log("Archivos en el directorio:", files);
});
```

---

## **📝 Recomendación: Usar Promesas**

En lugar de `fs.readFile`, `fs.writeFile`, etc., puedes usar **fs.promises** para trabajar con `async/await`.

```js
const fs = require("fs").promises;

async function leerArchivo() {
  try {
    const data = await fs.readFile("archivo.txt", "utf8");
    console.log("Contenido:", data);
  } catch (err) {
    console.error("Error:", err);
  }
}

leerArchivo();
```

---

## **🔍 Resumen**

✅ `fs` permite manejar archivos y directorios en Node.js.  
✅ Es mejor usar la versión **asincrónica** (`fs.promises` o callbacks) para evitar bloqueos.  
✅ `fs.readFile`, `fs.writeFile`, `fs.appendFile` sirven para manipular archivos.  
✅ `fs.mkdir`, `fs.readdir`, `fs.unlink` ayudan con directorios.

🔥 **¡Ahora ya sabes cómo usar el módulo FS en Node.js!** 🚀
