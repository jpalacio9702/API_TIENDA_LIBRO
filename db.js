const mongoose = require('mongoose');
const { MONGODB } = require('./config');

mongoose.connect( MONGODB, {
    useNewUrlParser: true, 
    useFindAndModify: false, 
    useUnifiedTopology: false, 
    useCreateIndex: true
});

const con = mongoose.connection;
con.on('error',console.error.bind(console,'Error al conectar a MongoDb'));

con.once('open', () =>{
    console.log('Conectado a Mongo db exitosamente')
})