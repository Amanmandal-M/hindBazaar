const express = require('express');
const {GetExcavator,GetExcavatorById,PostExcavator,UpdateExcavator,DeleteExcavator,GetLimit,GetbyTitle,GetbySortAscToDsc,
    GetbySortDscToAsc} = require('../Controllers/ExcavatorController')
const ExcavatorRouter = express.Router();

// Get
ExcavatorRouter.get('/ExcavatorData',GetExcavator)

//Get By Id
ExcavatorRouter.get('/Excavator/:id',GetExcavatorById)

// Post
ExcavatorRouter.post("/ExcavatorPost",PostExcavator)

// Update
ExcavatorRouter.patch("/Exupdate/:id",UpdateExcavator)

// Delete
ExcavatorRouter.delete("/Exdelete/:id",DeleteExcavator)

//Pagination
ExcavatorRouter.get('/Exlimit',GetLimit)

//Title
ExcavatorRouter.get("/Extitle",GetbyTitle)

// Sort By price asc to dsc
ExcavatorRouter.get("/Exasctodesc",GetbySortAscToDsc)

// Sort By price dsc to asc
ExcavatorRouter.get("/Exdesctoasc",GetbySortDscToAsc)

module.exports = {ExcavatorRouter}