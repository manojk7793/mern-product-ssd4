const Joi = require('joi');

const productSchema = Joi.object({
    name: Joi.string().min(3).max(50).required(),
    price: Joi.number().min(0).required(),
    description: Joi.string().max(500),
    imageUrl: Joi.string().optional()
});

const validateProduct = (req, res, next) => {
    const { error } = productSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }
    next();
};

module.exports = { validateProduct };