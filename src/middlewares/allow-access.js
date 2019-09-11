module.exports = (req, res, next) => {
  res.header(`Access-Control-Allow-Origin`, `*`);
  res.header(`Access-Control-Allow-Headers`, `Origin, X-Requested-With, Content-Type, Accept, appInterfaceDisabled`);
  // res.header(`Access-Control-Allow-Credentials`, true);
  next();
};
