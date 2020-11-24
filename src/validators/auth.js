const { check ,validationResult} = require('express-validator');



exports.validateSignupRequest=[
check('firstName')
.notEmpty()
.withMessage('firstName is required'),
check('lastName')
.notEmpty()
.withMessage('lastName is required'),
check('lastname'),
check('email')
.isEmail()
.withMessage('Valid Email is required'),
check('password')
.isLength({min:6})
.withMessage('Password must be at least six characters length')
];

exports.validateSigninRequest=[
    
    check('email')
    .isEmail()
    .withMessage('Valid Email is required'),
    check('password')
    .isLength({min:6})
    .withMessage('Password must be at least six characters length')
    ];


exports.isRequestValidated = (req, res, next) => {
    const errors = validationResult(req);
    if(errors.array().length > 0){
        return res.status(400).json({ error: errors.array()[0].msg })
    }
    next();
}