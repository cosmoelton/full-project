import app from "./src/app.js";

const port = process.env.port || 3300;

app.listen(port, () => {
console.log("Servidor funcionando ");


});