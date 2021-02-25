const models = require('../models/Venta');

exports.listar = async(req, res, next) => {
    try {
        const ventas = await models.Venta.find()
        res.status(200).json(ventas); 
        
    } catch (error) {
        res.status(500).send({
            message: 'Error al cargar'
        });
        next(error);
    }
};

exports.guardar = async(req, res, next) => {
    try {
        const venta = await models.Venta.create(req.body);
        res.status(201).json(venta);
    } catch (error) {
        res.status(500).send({
            message: 'Error al crear'
        });
        next(error);
    }
};

exports.findById = async(req, res, next) => {
    console.log(req.params.id)
    try {
        const venta = await models.Venta.findOne({ _id: req.body.id })
        if (venta == null)
            res.status(200).json('No hay datos');
        else
            res.status(200).json(venta);
                 
    } catch (error) {
        res.status(500).send({
            message: 'Error al cargar'
        });
        next(error);
    }
};

exports.editar = async(req, res, next) => {
    try {
        const venta = await models.Venta.findOneAndUpdate({
            _id: req.body._id
        }, {
            $set:{
                total:req.body.total,
                detalle:req.body.detalle
            } 
        }, {
            new: true
        }, (err, doc) => {
            if (err) {
                console.log("Error al actualizar");
            }        
        });
        res.status(201).json(venta);
    } catch (error) {
        res.status(500).send({
            message: 'La venta no existe'
        });
        next(error);
    }        
}

exports.eliminar = async(req, res,next) => {    
    const cliente = await models.Venta.deleteOne({_id: req.body.id},(err, doc) => {
        if (err) {
            console.log("errores: "+ err);
        }        
    });
    res.status(201).json("Venta eliminada");         
}