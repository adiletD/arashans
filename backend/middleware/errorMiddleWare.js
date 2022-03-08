// format is good, but theres no such product
const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${res.originalUrl}`)
  res.status(404)
  next(error)
}

// format is not appropriate
const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode // if its 200 we make it 500, else whatever the status code is
  res.status(statusCode)
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  })
}

export { notFound, errorHandler }
