const express=require('express')
const{Router}=express

const router=Router()
const Productos=[]


// ● GET '/api/productos' -> devuelve todos los productos.
router.get('/', (req,res)=>{
    res.send({Productos})
})

// ● GET '/api/productos/:id' -> devuelve un producto según su id.
router.get('/:id', (req,res)=>{
    const{id}=req.params
    if (Productos.indexOf(Productos[id-1])===-1){
        res.send({ error : 'producto no encontrado' })
    }
    else{
        const ProdFind=Productos[id-1]
        res.send({ProdFind})
    }
})

// ● POST '/api/productos' -> recibe y agrega un producto, y lo devuelve con su id 
// asignado.
router.post('/', (req,res)=>{
    const newProd= req.body
    newProd.id=Productos.length +1
    Productos.push(newProd)
    res.send({newProd})
})

// ● PUT '/api/productos/:id' -> recibe y actualiza un producto según su id.
router.put('/:id', (req,res)=>{
    const{id}=req.params
    if (Productos.indexOf(Productos[id-1])===-1){
        res.send({ error : 'producto no encontrado' })
    }
    else{
        const updateProd=req.body
        updateProd.id=id
        Productos[id-1]=updateProd
        res.send({updateProd})       
    }
})

// ● DELETE '/api/productos/:id' -> elimina un producto según su id.
router.delete('/:id', (req,res)=>{
    const{id}=req.params
    if (Productos.indexOf(Productos[id-1])===-1){
       res.send({ error : 'producto no encontrado' })
    }
    else{
        Productos.splice(id-1,1)
        res.send({Productos})
    }
})


module.exports=router