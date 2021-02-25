const models = require('../models/Cliente');

exports.listar = async(req, res, next) => {
    try {
        console.log('api/client/list')
        const clientes = await models.Cliente.find();
        res.status(200).json(clientes);
    } catch (error) {
        res.status(500).send({
            message: 'Error al cargar'
        });
        next(error);
    }
};

exports.guardar = async(req, res, next) => {
    try {
        const cliente = await models.Cliente.create(req.body);
        res.status(201).json(cliente);
    } catch (error) {
        res.status(500).send({
            message: 'Error al crear'
        });
        next(error);
    }
};

exports.editar = async(req, res, next) => {
    let data = req.body;
    
    try {
        const cliente = await models.Cliente.findOneAndUpdate({
            _id: data._id
        },{
            $set:{
                nombre:data.nombre,
                direccion: data.direccion,
                celular:data.celular,
                contrasena: data.contrasena, 
                correo: data.correo} 
            },{
                new: true
            }, (err, result) => {
                if (err) {
                    console.log("Error al actualizar");
                }
            });
            res.status(201).json(cliente);
        } catch (error) {
            res.status(500).send({
                message: 'Cliente no existe'
            });
            next(error);
        }
    }

exports.eliminar = async(req, res,next) => {
    const cliente = await models.Cliente.deleteOne({_id: req.body.id}, (err, doc) => {
        if (err) {
            console.log("errores: "+ err);
        }        
        console.log("Cliente eliminado");                    
    });
    res.status(201).json("Cliente eliminado");         
}

