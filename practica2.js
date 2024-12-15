function crearTimer(ms) {
    return new Promise((resolve, reject) => {
        const timer = setTimeout(() => {
            resolve("Tiempo concluido");
        }, ms);

        const limite = setTimeout(() => {
            clearTimeout(timer); 
            reject("El tiempo no va bien");
        }, ms * 2);
    });
}

const resultadoDiv = document.getElementById("resultado");

crearTimer(5000)
    .then((mensaje) => {
        resultadoDiv.textContent = mensaje;
    })
    .catch((error) => {
        resultadoDiv.textContent = error;
    });
