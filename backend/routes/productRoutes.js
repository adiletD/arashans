import express from 'express'
import Product from '../models/productModel.js'
import asyncHandler from 'express-async-handler'
// easier way to process async 

const router = express.Router()

// @desc Fetch all products
// @route GET /api/products
// access Public (u dont need to be logged in), some need token proving u are logged in
router.get(
  '/',
  asyncHandler(async (req, res) => {
    const products = await Product.find({})
    res.json(products)
    // if theres some error here it will be reflected in the error variable of state

  })
)

// @desc Fetch product by id
// @route GET /api/products/:id
// access Public
router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)

    if (product) {
      res.json(product)
    } else {
      res.status(404)
      throw new Error('Product not found')
    }
  })
)

export default router
