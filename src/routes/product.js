const express=require('express');
const { requireSignin,adminMiddleware } = require('../common-middleware');
const router=express.Router();
const multer=require('multer');

//const { addCategory, getCategories } = require('../controller/category');
const{createProduct} = require ('../controller/product')
const shortid=require('shortid');
const path =require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null,path.join (path.dirname(__dirname),'uploads'))
    },
    filename: function (req, file, cb) {
      cb(null, shortid.generate() + '-' + file.originalName)
    }
  })
   
  const upload=multer({storage});


router.post('/product/create',requireSignin,adminMiddleware,upload.array('productPicture'),createProduct);





module.exports=router;