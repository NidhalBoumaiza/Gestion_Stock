const APIFeatures = require('./../utils/apiFeatures');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');
const Commande = require('./../models/commandeModel');
const Product = require('./../models/prodModel');

//--------------------------------------------------
exports.getAllCommande = catchAsync(async (req, res, next) => {
  const commandes = await Commande.find();
  res.status(201).json({
    status: 'success',
    commandes,
  });
});
//--------------------------------------------------
exports.createCommande = catchAsync(async (req, res, next) => {
  let updatedProd = await Product.findById(req.params.id);

  if (updatedProd.quantity < req.body.quantitySold) {
    return next(new AppError('Le stock ne suffit pas !! ', 500));
  }

  req.body.productName = updatedProd.Name;
  console.log(req.body);

  const newcommande = await Commande.create(req.body);

  updatedProd.quantity = updatedProd.quantity - req.body.quantitySold * 1;
  await updatedProd.save();

  res.status(201).json({
    status: 'success',
    commande: newcommande,
  });
});
//--------------------------------------------------
exports.updateCommande = catchAsync(async (req, res, next) => {
  let commande = await Commande.findById(req.params.id);
  if (req.body.quantitySold) {
    let product = await Product.findOne({ Name: commande.productName });
    if (req.body.quantitySold > commande.quantitySold) {
      let qte = req.body.quantitySold - commande.quantitySold;
      product.quantity = product.quantity - qte;
    } else {
      product.quantity =
        product.quantity + (commande.quantitySold - req.body.quantitySold);
    }
    console.log(product);
    await product.save();
  }
  commande = await Commande.findByIdAndUpdate(commande._id, req.body);

  if (!commande) {
    return next(new AppError('No commande found with that ID', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      commande,
    },
  });
});
//--------------------------------------------------
exports.deleteCommande = catchAsync(async (req, res, next) => {
  const commande = await Commande.findByIdAndDelete(req.params.id);

  if (!commande) {
    return next(new AppError('No commande found with that ID', 404));
  }

  res.status(204).json({
    status: 'success',
    data: null,
  });
});
//--------------------------------------------------
exports.home = catchAsync(async (req, res, next) => {
  const productEnStock = await Product.countDocuments({ quantity: { $gt: 0 } });
  const productHorsStock = await Product.countDocuments({
    quantity: { $eq: 0 },
  });
  const nombreVente = await Commande.countDocuments();
  res.status(201).json({
    status: 'success',
    produitEnStock: productEnStock,
    productHorsStock: productHorsStock,
    nombreVente: nombreVente,
  });
});
