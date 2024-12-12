//mediante una variable llamada app, del documento html va a traer un elemento con su id llamado app
var app = document.getElementById('app');

// estilo typewriterJS v2 rocopilada de Bootstrap con su CDN-ayuda a incluir mi proyecto con la etiqueta script  
// antes colocado en el html antes del cierre de body y vinculado el script del archivo main.js primero la libreria y despues el archivo js
// crear otra variable llamada typewriter y vamos a hacer un nuevo typewriter con el id que trajimos
var typewriter = new Typewriter(app, {
    // hacer que se repita
    loop: true
});

// definir mediante una cadena de texto como sera
// typeString=tipo texco (texto definido)
typewriter.typeString('Desarrolladora Frontend Jr.')
    // pausar unos milisegundos
    .pauseFor(2000)
    // borrar el texto
    .deleteAll()
    // escribir otro texto (texto definido)
    .typeString('"¡Si lo puedes imaginar, lo puedes crear!"')
    // PAUSAR
    .pauseFor(2000)
    // borrar 6 caracteres
    .deleteChars(7)
    // escribir
    .typeString('<strong>programar!"</strong>')
    // pausar
    .pauseFor(2000)
    // comenzar nuevamente
    .start();