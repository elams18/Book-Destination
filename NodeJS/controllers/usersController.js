const express = require('express');
const router = express.Router();
var ObjectId = require("mongoose").Types.ObjectId;
var user = require('../models/users');

// localhost:3000/users/
router.get('/', (req,res)=>{
    user.find({}, (err, docs)=>{
        if(!err) {
            console.log(docs);
            res.send(docs);}
        else{ console.log('error in retreiving data: ') +JSON.stringify(err);}
    });
});
router.get('/:id', (req,res) =>{
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`User not found with id: $(req.params.id)`);
     user.findById(req.params.id,(err,doc)=>{
         if(!err) res.send(doc);
         else console.log('error in retreiving information'+JSON.stringify(err));
     });
});

router.post('/', (req,res)=>{
    var u = new user({
        userid: req.body.userid,
        email: req.body.email,
        points: req.body.points,
        password: req.body.password
    });
    console.log(u);
    u.save((err,doc) =>{
        if(!err){ res.send(doc);}
        else{console.log('error in user save: '+JSON.stringify(err));}
    });
});

router.put('/:id', (req,res) =>{
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`User not found with id: $(req.params.id)`);
    
    var u = {
        userid: req.body.userid,
        email: req.body.email,
        points: req.body.points,
        password: req.body.password
    };
    user.findByIdAndUpdate(req.params.id, {$set:u},{new:true}, (err,doc)=>{
        if(!err){ res.send(doc);}
        else console.log('error in user save: '+JSON.stringify(err));
    });
});

router.delete('/:id', (req,res)=>{
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`User not found with id: $(req.params.id)`);
    user.findByIdAndRemove(req.params.id, (err,doc)=>{
        if(!err){ res.send(doc);}
        else console.log('error in user save: '+JSON.stringify(err));
    })
})

module.exports = router;