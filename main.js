/*
**********************************************************************************************************************************************************
Ejercicio 1: Crear una llamada asincronica simulando
una espera
**********************************************************************************************************************************************************
*/
function esperar(tiempo) {
    return new Promise((resolve) => {  //devuelvo una Promesa, la cual adentro siempre tiene una funcion(en este caso esta escrita como lambda)
        setTimeout(() => {  //Uso del metodo setTimeout-> tambien se puede meter una funcion dentro.
            resolve(`Esperado ${tiempo} ms`);   //devuelvo q se pudo resolver y el mensaje.
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
                resolve(`Esperado ${tiempo} ms`);
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
//devuelve un objetito
async function obtenerUsuario(id) { 
    try {
        const tiempo = 2000;
        const resultado = await new Promise( (resolve) => {
            setTimeout(() => {
                //resolve("Usuario id $(id) | Esperado $(tiempo) ms");
                resolve({ nombre: "Usuario $(id)", id: id }); //directamente devuelvo el usuario.
            }, tiempo);
        });

        console.log(resultado);
        
    } catch (error) {
        console.error('Error:', error);
    }
}

//devuelve un array de strings
async function obtenerPublicaciones(idUsuario) { 
    try {
        const tiempo = 4000;
        const arrayResultante = ["bobby", "hadz", "com"];/*[
                    { nombre: "Usuario", id: idUsuario, publicacion: "publi_1"}, 
                    { nombre: "Usuario", id: idUsuario, publicacion: "publi_2"}, 
                    { nombre: "Usuario", id: idUsuario, publicacion: "publi_3"}
                ];*/
        const resultado = await new Promise( (resolve) => {
            setTimeout(() => {
                //resolve("Usuario id $(id) | Esperado $(tiempo) ms");
                resolve(arrayResultante); //directamente devuelvo el array de publicaciones.
            }, tiempo);
        });

        console.log(resultado);

    } catch (error) {
        console.error('Error:', error);
    }
}

async function obtenerInfoCompletaUsuario(idUsuario) {
    try {
        const usuario = obtenerUsuario(idUsuario);
        const publicaciones = obtenerPublicaciones(idUsuario);

        console.log(`Nombre de usuario: ${usuario.nombre}`);
        console.log(`Publicaciones del usuario: ${publicaciones.join(', ')}`);
    } catch (error) {
        console.error('Error:', error);
    }
}

obtenerInfoCompletaUsuario(1);

/*RTA = 
Nombre de usuario: undefined
index.html:126 Error: TypeError: publicaciones.join is not a function
    at obtenerInfoCompletaUsuario (index.html:124:65)
    at index.html:130:1
{nombre: 'Usuario $(id)', id: 1}id: 1nombre: "Usuario $(id)"[[Prototype]]: Object
index.html:111 (3) [{…}, {…}, {…}]
*/

//Creo q en ambos tira sin definir pq no me toma como q publicaciones sea un array a pesar de q en el metodo le devuelvo un array.
    //[asi anda pero con el metodo de publicaciones no]probar si directamente en publicaciones reemplazo por un array y listo.

/*
**********************************************************************************************************************************************************
Ejercicio 4:
Modificar el ejercicio anterior para hacer
las llamadas en simultaneo.
**********************************************************************************************************************************************************
*/
                                                            //Copio mi ejs3:
//devuelve un objetito
async function obtenerUsuario(id) { 
    try {
        const tiempo = 2000;
        const resultado = await new Promise( (resolve) => {
            setTimeout(() => {
                resolve({ nombre: "Usuario $(id)", id: id }); //directamente devuelvo el usuario.
            }, tiempo);
        });

        console.log(resultado);
        
    } catch (error) {
        console.error('Error:', error);
    }
}

//devuelve un array de strings
async function obtenerPublicaciones(idUsuario) { 
    try {
        const tiempo = 4000;
        const arrayResultante = ["bobby", "hadz", "com"];
        const resultado = await new Promise( (resolve) => {
            setTimeout(() => {
                resolve(arrayResultante); //directamente devuelvo el array de publicaciones.
            }, tiempo);
        });

        console.log(resultado);

    } catch (error) {
        console.error('Error:', error);
    }
}

async function obtenerInfoCompletaUsuario(idUsuario) {
    try {
        const [usuario, publicaciones] = await Promise.all([obtenerUsuario(idUsuario), obtenerPublicaciones(idUsuario)]);

        console.log(`Nombre de usuario: ${usuario.nombre}`);
        console.log(`Publicaciones del usuario: ${publicaciones.join(', ')}`);
    } catch (error) {
        console.error('Error:', error);
    }
}

obtenerInfoCompletaUsuario(1);

//Para hacerlo con async await, ejemplo-> https://es.stackoverflow.com/questions/419017/como-usar-promise-all-en-async-await
/*Segun lo visto en clase:
Si quiero q sean al mismo tiempo?
    Podemos usar el Promise.all() con un await adelante:
        await Promise.all()
*/