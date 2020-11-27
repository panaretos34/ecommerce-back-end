const env=require('dotenv');
const express=require ('express');
const app=express();
const mongoose=require('mongoose');
const path = require("path");
//routes
const authRoutes=require('./routes/auth');
const adminRoutes=require('./routes/admin/auth');
const categoryRoutes=require('./routes/category');
const productRoutes=require('./routes/product');
const cartRoutes=require('./routes/cart');
//enviroment variable//
env.config();
//mongo db connection//

//mongodb+srv://root:<password>@cluster0.rovyf.mongodb.net/<dbname>?retryWrites=true&w=majority

 mongoose.connect(
     `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.rovyf.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`, 
     {
         useNewUrlParser: true,
          useUnifiedTopology: true,
          useCreateIndex:true
        }
 ).then(()  => {
     console.log('Database connected');
 }
        );
   

app.use(express.json());
app.use("/public", express.static(path.join(__dirname, "uploads")));
app.use('/api',authRoutes);
app.use('/api',adminRoutes);
app.use('/api',categoryRoutes);
app.use('/api',productRoutes);
app.use('/api',cartRoutes);


app.listen(process.env.PORT,()=>{
console.log(`server is running on port ${process.env.PORT}`);
});

