import Sequelize from 'sequelize';
import db from '../config/db.js';

//Clase que administra la información de la base de datos.

export const Testimonial = db.define('testimoniales', {
   nombre: {
        type: Sequelize.STRING
    },
    correo: {
        type: Sequelize.STRING
    },
    mensaje: {
        type: Sequelize.STRING
    },
    
});