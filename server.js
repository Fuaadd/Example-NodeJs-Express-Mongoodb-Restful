const express = require('express')
const mongoose = require('mongoose')
const Product  = require('./models/productModel')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

//routes
app.get('/',(req,res)=>{
res.send('Hello Node API')
})


app.get('/blog',(req,res)=>{
   res.send('Hello, My name is fuad')
   })

//Get All Product
app.get('/products',async(req, res) => {
   try {
      const products = await Product.find({});
      res.status(200).json(products); 
   } catch (error)
   {
      res.status(500).json({message: error.message})
   } 
})   

//Get product by id
app.get('/products/:id',async(req, res) => {
   try {
      const {id} = req.params; 
      const product = await Product.findById(id);
      res.status(200).json(product); 
   } catch (error)
   {
      res.status(500).json({message: error.message})
   } 
})

//post, create data
app.post('/products',async(req, res) => {
    try {
           const product = await Product.create(req.body)
           res.status(200).json(product); 
        } catch (error)
        {
           console.log(error.message)
           res.status(500).json({message: error.message})
        }
}) 

//update
app.put('/products/:id',async(req, res) => {
   try {
      const {id} = req.params; 
      const product = await Product.findByIdAndUpdate(id,req.body);
      //we cannot find any product in database
      if(!product)
          {
            return res.status(404).json({message:"cannot find any product with ID ${id}"})  
          } 
      res.status(200).json(product); 
   } catch (error)
   {
      res.status(500).json({message: error.message})
   } 
})

//delete
app.delete('/products/:id',async(req,res) => {
     try {
      const {id} = req.params; 
      const product = await Product.findByIdAndDelete(id);
         if(!product) {
            return res.status(404).json({message:"cannot find any product with ID ${id}"})  
           }
           res.status(200).json(product);
         } catch (error) 
         {
            res.status(500).json({message: error.message})
         }
})

mongoose.set("strictQuery",false)
mongoose.
connect('mongodb+srv://admin:123@uphiapi.c3qeiwr.mongodb.net/')
.then(() => {
              console.log('connected to mongoodb')
              app.listen(3000, ()=>{
               console.log('Node API app is running on port 3000') 
            })
}).catch((error) => {
              console.log(error)
})              