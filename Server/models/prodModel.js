const mongoose = require('mongoose');

const prodSchema = new mongoose.Schema(
  {
    Name: {
      type: String,
      trim: true,
      unique: true,
    },
    quantity: {
      type: Number,
    },
    price: {
      type: Number,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const Product = mongoose.model('Products', prodSchema);

module.exports = Product;
