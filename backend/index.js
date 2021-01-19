const express = require('express')
const app = express()
const port = 5000

var data = require('../my-app/src/data')

app.get('/api/products',(req,res)=>{

    setTimeout(function(){ 
        res.send(data.products)
     }, 10000);
    
})
 
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Ecommerce backend app listening on port ${port}!`))