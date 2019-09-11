 const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const pointSchema = new mongoose.Schema({
  type: {
    type: String,
    "enum": ['Point'],
    required: true
  },
  coordinates: {
    type: [Number],
    required: true
  }
});

const EventoSchema = new Schema({
  nombre: String,
  descripcion: String,
  fecha: {
    type: Date,
    default: '1996/06/24'
  },
  hora: String,
  /*status: {
    type: Boolean,
    default: false
  },*/
  ubicacion: pointSchema,
  direccion: String,
  precio: Number,
  limitePersonas: Number,
  sponsors= Array,
  disertantes: Array,
});

// collections eventos
module.exports =  mongoose.model('evento', EventoSchema);
