var Supplementdb = require('../model/model');

//create and save new supplement
exports.create = (req,res)=>{
    //validate request
    if(!req.body){
        res.status(400).send({message : "Content can not be empty!"});
        return;
    }

    //new supplement
    const supplement = new Supplementdb({
        name:req.body.name,
        price:req.body.price,
        category:req.body.category
    })

    //save supplement in the databasae

    supplement
        .save(supplement)
        .then(data =>{
            res.redirect('/add-supplement')
        })
        .catch(err=>{
            res.status(500).send({
                message:err.message || "Some error has occured while creating the create operation"
            });
        });
            
}

//retrieve and return all supplements / retrieve and return a single supplement

exports.find = (req,res)=>{

    if(req.query.id){
        const id = req.query.id;

        Supplementdb.findById(id)
            .then(data =>{
                if(!data){
                    res.status(404).send({ message : "Not found supplement with id "+ id})
                }else{
                    res.send(data)
                }
            })
            .catch(err =>{
                res.status(500).send({ message: "Error retrieving supplement with id " + id})
            })

    }else{
        Supplementdb.find()
            .then(supplement => {
                res.send(supplement)
            })
            .catch(err => {
                res.status(500).send({ message : err.message || "Error Occurred while retriving supplement information" })
            })
    }
    
}

// Update a new identified supplement by supplement ID

exports.update = (req,res)=>{
    
    if(!req.body){
        return res
            .status(400)
            .send({ message : "Data to update can not be empty"})
    }

    const id = req.params.id;
    Supplementdb.findByIdAndUpdate(id, req.body, { useFindAndModify: false})
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Update supplement with ${id}. Maybe supplement not found!`})
            }else{
                res.send(data)
            }
        })
        .catch(err =>{
            res.status(500).send({ message : "Error Update supplement information"})
        })
}

//Delete a supplement with specified Supplement ID in the request
exports.delete = (req,res)=>{    
        const id = req.params.id;
    
        Supplementdb.findByIdAndDelete(id)
            .then(data => {
                if(!data){
                    res.status(404).send({ message : `Cannot Delete with id ${id}. Maybe the id is wrong`})
                }else{
                    res.send({
                        message : "Supplement was deleted successfully!"
                    })
                }
            })
            .catch(err =>{
                res.status(500).send({
                    message: "Could not delete Supplement with id=" + id
                });
            });
    
}