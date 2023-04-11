/*
Ejercicio 1: Crear una llamada asincronica simulando
una espera
*/
function esperar(tiempo){
    return new Promise( (resolve) => {  //devuelvo una Promesa, la cual adentro siempre tiene una funcion(en este caso esta escrita como lambda)
        setTimeout(() => {  //Uso del metodo setTimeout-> tambien se puede meter una funcion dentro.
            resolve('Esperado $(tiempo) ms');   //devuelvo q se pudo resolver y el mensaje.
        }, tiempo)  //el tiempo es eparte del timeout
    }); //aca termina la creacion de la Promesa.
}

esperar(2000)
    .then( (resultado) => {
        console.log(resultado);
    })
    .catch( (error) => {
        console.error('Error:', error); //Uso el console.ERROR()
    }); //aca termina el llamado al metodo "esperar()"

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

/*
Ejercicio 2: Modificar el ejercicio 1 con async / await
*/
