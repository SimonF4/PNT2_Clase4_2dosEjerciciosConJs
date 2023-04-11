/*
Ejercicio 1: Crear una llamada asincronica simulando
una espera
*/
function esperar(tiempo) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Esperado ${tiempo} ms`);
        }, tiempo);
    });
}

esperar(2000)
    .then((resultado) => {
        console.log(resultado);
    })
    .catch((error) => {
        console.error('Error:', error);
    });

/* **********************PARA TESTEAR EL CASO DE ERROR:**********************
function esperar(tiempo) {
            return new Promise((reject) => {
                setTimeout(() => {
                    reject(new Error("Error 4000"));
        }   , tiempo);
            });
        }

        esperar(2000)
            .then((resultado) => {
            console.log(resultado);
            })
            .catch((error) => {
            console.error('Error:', error);
            });

//rta = Error: Error 4000
    at index.html:26:28*/