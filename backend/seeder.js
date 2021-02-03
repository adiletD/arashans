import mongoose from 'mongoose'
import dotenv from 'dotenv'
import users from './data/users.js'
import products from './data/products.js'
import User from './models/userModel.js'
import Product from './models/productModel.js'
import Order from './models/orderModel.js'
import connectDB from './config/db.js'

dotenv.config()

connectDB()

const importData = async () => {
  try {
    //get rid of data in collections
    await Order.deleteMany()
    await Product.deleteMany()
    await User.deleteMany()

    const createdUsers = await User.insertMany(users)

    const adminUser = createdUsers[0]._id //cuz we mad ethe admin the user no 1

    // objecrt containing products but with modified user field
    const sampleProducts = products.map((product) => {
      // return all props in the product with additional user parameter
      return { ...product, user: adminUser }
    })

    await Product.insertMany(sampleProducts)

    console.log('Data imported!')
    process.exit()
  } catch (error) {
    console.error(`${error}`)
    process.exit()
  }
}

const destroyData = async () => {
  try {
    //get rid of data in collections
    await Order.deleteMany()
    await Product.deleteMany()
    await User.deleteMany()

    console.log('Data Destroyed!')
    process.exit()
  } catch (error) {
    console.error(`${error}`)
    process.exit()
  }
}

if (process.argv[2] == '-d') {
  destroyData()
} else {
  importData()
}
