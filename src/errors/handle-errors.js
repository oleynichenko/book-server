const BadRequestError = require(`./bad-request-error`);
const NotFoundError = require(`./not-found-error`);

module.exports = (exception, req, res, next) => {
  let statusCode = 500;
  let data = {
    message: `Server has fallen into unrecoverable problem.`
  };

  if (exception instanceof BadRequestError) {
    statusCode = exception.code;
    data.message = exception.message;
  }

  if (exception instanceof NotFoundError) {
    statusCode = exception.code;
    data.message = exception.message;
  }
  
  console.log(exception);
  res.status(statusCode).send(data);
  next();
};
