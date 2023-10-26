const express = require('express')
const  bootcampModel = require('../models/bootcampsModels')
const router = express.Router()

//                              URI BOTCAMPS

//LISTAR TODOS
router.get,('/',(request,response)=>{
    response
    .status(200)
    .json({
        "sucess": true,
        "msg": "mostrar todos los bootcamps"
    })
});
//LISTAR ID
router.get('/:id',(request,response)=>{
    response
    .status(200)
    .json({
        "sucess": true,
        "msg": `Seleccionado el boocamp con id: ${request.params.id}`
    })
});

//ENVIAR DATO
router.post('/',(request,response)=>{
    //crear el nuevo bootcamp
    //const bootcamp= bootcampModel.create(request.body )
    response
    .status(201)
    .json({
        "sucess": true,
        "msg": request.body
    })
});
//ACTUALIZAR DATO POR ID 
router.put('/:id',(request,response)=>{
    response
    .status(200)
    .json({
        "sucess": true,
        "msg": `Actualizando el boocamp con id: ${request.params.id}`
    })
});
//ELIMINAR DATO POR ID 
router.delete('/:id',(request,response)=>{
    response
    .status(200)
    .json({
        "sucess": true,
        "msg": `eliminado el boocamp con id: ${request.params.id}`
    })
});

module.exports = router

