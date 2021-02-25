const mongoose = require('mongoose')

const clienteSchema = new mongoose.Schema({
		nombre : String,
		contrasena : String,
		celular : Number,
        correo : String,
		direccion : String,
		date : {type : Date, default: Date.now}
	}
)

const Cliente = mongoose.model('cliente', clienteSchema)

module.exports.Cliente = Cliente