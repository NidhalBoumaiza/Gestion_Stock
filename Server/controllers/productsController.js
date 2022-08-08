const APIFeatures = require('./../utils/apiFeatures');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');
const Product = require('./../models/prodModel');
exports.Home = catchAsync(async (req, res, next) => {});

exports.getAllProducts = catchAsync(async (req, res, next) => {
  const features = new APIFeatures(Product.find(), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate();
  const products = await features.query;

  res.status(200).json({
    status: 'success',
    products,
  });
});

exports.createprod = catchAsync(async (req, res, next) => {
  const newprod = await Product.create(req.body);

  res.status(201).json({
    status: 'success',
    product: newprod,
  });
});

exports.updateprod = catchAsync(async (req, res, next) => {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, {});

  if (!product) {
    return next(new AppError('No product found with that ID', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      product,
    },
  });
});

exports.updateprodExist = catchAsync(async (req, res, next) => {
  let product = await Product.findById(req.params.id);
  product.quantity = product.quantity + req.body.quantity * 1;
  product.price = req.body.price;
  await product.save();

  res.status(201).json({
    status: 'success',
    product,
  });
});

exports.deleteprod = catchAsync(async (req, res, next) => {
  const product = await Product.findByIdAndDelete(req.params.id);

  if (!product) {
    return next(new AppError('No Product found with that ID', 404));
  }

  res.status(204).json({
    status: 'success',
    data: null,
  });
});
