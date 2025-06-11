const Joi = require('joi');

exports.bookSchema = Joi.object({
  title: Joi.string().required(),
  image: Joi.string().uri().required(),
  author: Joi.string().required(),
  genre: Joi.object({
    type: Joi.string().valid('Fiction', 'Non Fiction').required(),
    category: Joi.string().required()
  }).required(),
  ratings: Joi.number().min(0).max(5).required(),
  price: Joi.number().optional()
});