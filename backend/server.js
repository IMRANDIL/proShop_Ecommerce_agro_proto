require('dotenv').config();


const express = require('express');

const products = require('./data/data')
const cors = require('cors')
const app = express();



//some middleware...

app.use(cors())




app.get('/',(req,res)=>{
    res.send('API is ready')
})


app.get('/api/products',(req,res)=>{
   res.json(products)
});



app.get('/api/products/:id',(req,res)=>{
    const product = products.find((p)=>p._id === req.params.id);
    res.json(product)
 });




const PORT=process.env.PORT || 7000;


app.listen(PORT,()=>{
    console.log(`server runs on port: ${PORT}😃`);
})