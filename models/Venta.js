const mongoose = require('mongoose')

const detalleSchema = new mongoose.Schema({
        idLibro         : {type: mongoose.Schema.Types.ObjectId, ref: 'Libro', required: true},
        nombre          : {type: String, required: true},
        valorUnitario   : {type: Number, required: true, min: 0},
        cantidad        : {type: Number, required: true, min: 1}
})

const ventaSchema = new mongoose.Schema({
        fecha       : {type : Date, default: Date.now},
        total       : {type: Number, required: true, min: 1},
        idCliente   : {type: mongoose.Schema.Types.ObjectId, ref: 'Cliente', required: true,},
        detalle     : {type: detalleSchema, required: true}  
})

const Venta = mongoose.model('ventas', ventaSchema)

module.exports.Venta = Venta