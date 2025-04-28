function agregarNumero(numero) {
    document.getElementById('pantalla').value += numero;
    console.log("Número agregado:", numero); // Para depuración
}

function borrarUno() {
    const pantalla = document.getElementById('pantalla').value;
    document.getElementById('pantalla').value = pantalla.slice(0, -1);
    console.log("Borrar uno. Pantalla ahora:", document.getElementById('pantalla').value); // Para depuración
}

function limpiar() {
    document.getElementById('pantalla').value = '';
    console.log("Pantalla limpiada."); // Para depuración
}

function calcular() {
    const pantalla = document.getElementById('pantalla').value;
    console.log("Calculando:", pantalla); // Para depuración
    try {
        const resultado = eval(pantalla);
        document.getElementById('pantalla').value = resultado;
        console.log("Resultado:", resultado); // Para depuración
    } catch (error) {
        document.getElementById('pantalla').value = 'Error';
        console.error("Error al calcular:", error); // Para depuración
    }
}

// Mensaje que se muestra en la consola al cargar la página
console.log("Calculadora desarrollada por NICOLAS HERRERA, EDUAR FIGUEROA, LAURA GONZALES y EIMY CLEVES.");

// Puedes agregar aquí alguna lógica adicional relacionada con los nombres si fuera necesario.
// Por ejemplo, podrías mostrar un alert con los nombres al cargar la página (solo como ejemplo):
// window.onload = function() {
//     alert("¡Calculadora desarrollada por NICOLAS HERRERA, EDUAR FIGUEROA, LAURA GONZALES y EIMY CLEVES!");