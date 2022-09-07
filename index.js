const express=require('express')
const app=express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
const routerProductos=require('./productos')

app.use('/api/productos', routerProductos)

app.use(express.static(__dirname + '/public'))


app.listen(8080,()=>{
    console.log('iniciado')
})