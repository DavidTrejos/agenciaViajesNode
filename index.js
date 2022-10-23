
import express from 'express';
import router from './routes/index.js';
import db from './config/db.js';

const app = express(); //app contiene la función para ejecutar express

//Conectar a la base de datos 

db.authenticate()
    .then(()=> console.log('Base de datos conectada'))
    .catch ( error => console.log(error));

//Definir puerto

const port = process.env.PORT || 4000;



//Habilitar PUG
app.set('view engine', 'pug');

//Obtener el año actual
app.use( (req, res, next)=>{ //req: Lo que estás enviando al servidor. res:Lo que el servidor me manda a mi next: Ya terminé vamonos al siguiente middleware
        
    //Crear variable y pasarla hacia la vista.
    const year= new Date();
    res.locals.actualYear = year.getFullYear();
    res.locals.nombresitio= "Agencia de Viajes";

       next();
});

//Agregar  body parser para leer los datos del formulario
app.use(express.urlencoded({extended: true}));

//Definir la carpeta publica
app.use(express.static('public'));

//Agregar Router 
app.use('/', router); //Soporta todos los verbos. GET,PUT,POST,DELETE.

//app le decimos arranca el servidor, con .listen  
app.listen(port, ()=>{
    console.log(`El servidor está funcionando en el puerto ${port}`)
})