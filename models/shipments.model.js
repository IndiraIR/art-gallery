const mongoose = require('mongoose')

const shipmentsSchema = new mongoose.Schema({
  shipmentNo: {
    type: String,
    required: true
  },
  artwork: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'artwork'
  }],
  from: {
      type: String,
      required: true
  },
  to: {
    type: String,
    required: true
  },
  departure: {
    type: Date,
    required: true
  },
  arrival: {
    type: Date,
    required: true
  },
  shipper: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'contact'
  }],
  currency: {
    type: String,
    default: "EUR"  
  },  
  price: Number,
  exportDeadline: Date,
  client: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'contact'
  }]
})

const contactsModel = mongoose.model('contact', contactsSchema)
module.exports = contactsModel