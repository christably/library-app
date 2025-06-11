module.exports = function (req, res, next) {
  res.success = (data, message = 'Success') => res.json({ status: 'success', message, data });
  res.error = (error, status = 400) => res.status(status).json({ status: 'error', message: error.message || error });
  next();
};