function errorHandler(err, req, res, next) {
   console.log(err, 2);
  let status = 500;
  let message = "Internal Server Error";

  if (err.name === "SequelizeUniqueConstraintError") {
    status = 400;
    message = err.errors[0].message;
  }
  if (err.name === "SequelizeValidationError") {
    status = 400;
    message = err.errors[0].message;
  }
  if (err.message === "Please Input Email/Password") {
    status = 400;
    message = err.message;
  }
  if (err.message === "Invalid Login") {
    status = 400;
    message = err.message;
  }
  if (err.message === "Invalid Email/Password") {
    status = 400;
    message = err.message;
  }
  if (err.name === "Unauthorized") {
    status = 401;
    message = err.message;
  }

  return res.status(status).json({ message, status });
}

module.exports = errorHandler;
