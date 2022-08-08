const mongoose = require('mongoose');

const commandeSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      required: [true, '....'],
    },
    clientName: {
      type: String,
      required: [true, '....'],
    },
    quantitySold: {
      type: Number,
      required: [true, '....'],
    },
    priceofSale: {
      type: Number,
      required: [true, '....'],
    },
    addingTime: {
      type: Date,
      default: Date.now(),
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const Commande = mongoose.model('Commande', commandeSchema);

module.exports = Commande;
