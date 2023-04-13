/*
**********************************************************************************************************************************************************
Ejercicio 1: Crear una llamada asincronica simulando
una espera
**********************************************************************************************************************************************************
*/
function esperar(tiempo) {
    return new Promise((resolve) => {  //devuelvo una Promesa, la cual adentro siempre tiene una funcion(en este caso esta escrita como lambda)
        setTimeout(() => {  //Uso del metodo setTimeout-> tambien se puede meter una funcion dentro.
            resolve('Esperado $(tiempo) ms');   //devuelvo q se pudo resolver y el mensaje.
        }, tiempo)  //el tiempo es eparte del timeout
    }); //aca termina la creacion de la Promesa.
}

esperar(2000)
    .then((resultado) => {
        console.log(resultado);
    })
    .catch((error) => {
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
**********************************************************************************************************************************************************
Ejercicio 2: Modificar el ejercicio 1 con async / await
**********************************************************************************************************************************************************
*/
// ****** Como lo hice DESDE 0:  ******
async function esperar(tiempo) {
    try {
        const promesa1 = await new Promise((resolve) => {
            setTimeout(() => {
                resolve('Esperado $(tiempo) ms');
            }, tiempo)
        });

        console.log(promesa1);

    } catch (error) {
        console.error("Error:", error);
    }
}

esperar(2000); //Me estaba faltando esto.

/* ****** RTA ya dada del ejs:  ******
async function esperar(tiempo) {
    const resultado = await new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Esperado ${tiempo} ms`);
        }, tiempo);
    });
    console.log(resultado);
}
esperar(2000); // Espera 2 segundos antes de mostrar el mensaje

DIFERENCIAS:
    - yo use try catchs como vimos en clase.
    - {tiempo} en ves de (tiempo) //anda igual.
    - llame a la variable resultado "promesa1"
*/

/*RTA = 
Esperado $(tiempo) ms   index.html:68
*/
/*RTA (llamando el metodo en consola) = 
esperar(2000)
Promise {<pending>}[[Prototype]]: Promise[[PromiseState]]: "fulfilled"[[PromiseResult]]: undefined
index.html:68 Esperado $(tiempo) ms*/

/*
**********************************************************************************************************************************************************
Ejercicio 3: Datos del usuario
Crear una funcion que use otras dos. Todas van a ser asincronicas. Las dos
funciones hijas tienen que simular el llamado a un servicio usando setTimeout y la
clase Promise(se puede mezclar con async/await). Crear una funcion padre que use
a las anteriores. Agregarle lo que falte, como palabras reservadas y demas.
**********************************************************************************************************************************************************
*/