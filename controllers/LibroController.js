const models = require('../models/Libro');

exports.listar = async(req, res, next) => {
    try {
        const libros = await models.Libro.find();
        res.status(200).json(libros);
    } catch (error) {
        res.status(500).send({
            message: 'Error al cargar'
        });
        next(error);
    }
};

exports.guardar = async(req, res, next) => {
     try {
        const libro = await models.Libro.create(req.body);
        res.status(201).json(libro);
    } catch (error) {
        res.status(500).send({
            message: 'Error al crear'
        });
        next(error);
    } 
};

 exports.editar = async(req, res,next) => {
    try {
        const libro = await models.Libro.findOneAndUpdate({
            _id: req.body._id
        }, {
            $set:{
                caratula: req.body.caratula,
                nombre: req.body.nombre,
                descripcion: req.body.descripcion,
                valorUnitario: req.body.valorUnitario,
                categorias: req.body.categorias
            }
        },{
            new: true
        }, (err, doc) => {
            if (err) {
                console.log("Error al actualizar");
            }                 
        });
        res.status(200).json(libro);
    } catch (error) {
        res.status(500).send({
            message: 'Libro no existe'
        });
        next(error);
    }        
}
 
exports.eliminar = async(req, res,next) => {
    const libro = await models.Libro.deleteOne({_id: req.body.id},(err, doc) => {
        if (err) {
            console.log("errores: "+ err);
        }                    
    });
    res.status(202).json("Libro eliminado");         
}
