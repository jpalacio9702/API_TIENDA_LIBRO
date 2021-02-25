const mongoose = require('mongoose')

const libroSchema = new mongoose.Schema({
		caratula 		: String,
		nombre 	 		: String,
		descripcion 	: String,
        valorUnitario 	: Number,
        categorias 		: [],
		date : {type : Date, default: Date.now}
})

const Libro = mongoose.model('libro', libroSchema)

const getLibro = (req,res) => {
	Libro.findById(req.params.id,(error, libro) =>{
		if(error){
			res.status(404).send(error)
		}else{
			res.status(200).json(libro);
		}
	})
}

module.exports.Libro = Libro