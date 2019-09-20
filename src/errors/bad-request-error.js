module.exports = class BadRequestError extends Error {
  constructor(reason) {
    super();
    this.code = 400;
    this.message = reason;
  }
};
