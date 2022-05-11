const axios = require('axios');

exports.homeRoutes = (req,res)=>{
    
    //Make a get request to api/supplements
    
    axios.get('http://localhost:3000/api/supplements')
    .then(function(response){
        res.render('index', { supplements : response.data });
    })
    .catch(err =>{
        res.send(err);
    })
}

exports.add_supplement = (req,res)=>{
    res.render('add_supplement');
}

exports.update_supplement = (req,res)=>{
    axios.get('http://localhost:3000/api/supplements',{params:{id:req.query.id}})
    .then(function(userdata){
        res.render("update_supplement",{ supplement : userdata.data})
        })
        .catch(err =>{
            res.send(err);
        })
}