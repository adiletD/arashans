import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux' // selector to select parts of the state
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import { listProducts } from '../actions/productActions'
import Loader from '../components/Loader'
import Message from '../components/Message'

const HomeScreen = () => {
  const dispatch = useDispatch() // we use hooks here

  const productList = useSelector((state) => state.productList) //we stored the productList stored in the redux state to the 'productList' variable
  const { loading, error, products } = productList // parts of the state that could be sent down

  useEffect(() => {
    // fire the actions off
    dispatch(listProducts()) //this is shown in redux state monitoring
  }, [dispatch]) //to get rid of warning
  // to get rid of errors

  return (
    <>
      <h1>Latest Products</h1>
      {/*if loading print loading else if error print error, else do the normal thing*/}
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message> // if we throw an error from the router it will show up in this component
      ) : (
        <Row>
          {products.map((
            product // taking te product prop
          ) => (
            // the key here has to be an id, unique
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  )
}

export default HomeScreen
