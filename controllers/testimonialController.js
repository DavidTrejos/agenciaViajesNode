import { Testimonial } from "../models/Testimoniales.js";

const guardarTestimonial = async (req, res)=>{
    
    //Validar...
    const {nombre,correo,mensaje} =req.body;

    const errores =[]
    if(nombre.trim()=== ''){  //Trim quita espacios en blanco al inicio y al final.
        errores.push({mensaje: 'El nombre está vacio'});
    }
    if(correo.trim()=== ''){
        errores.push({mensaje: 'El correo está vacio'});
    }
    if(mensaje.trim()=== ''){
        errores.push({mensaje: 'El mensaje está vacio'});
    }
    if(errores.length>0){

        //Consultar testimoniales existentes
        const testimoniales = await Testimonial.findAll();

        //Mostrar la vista con errrores
        res.render('testimoniales',{
            pagina: 'testimoniales',
            errores,
            nombre,
            correo,
            mensaje,
            testimoniales
        })
    } else {
        //Almacenarlo en la base de datos

        try {
            await Testimonial.create({
                nombre,
                correo,
                mensaje
            });

            res.redirect('/testimoniales');
        } catch (error) {
            console.log(error)
        }

    }
}

export { 
    guardarTestimonial
}