const express = require('express');
const router1 = express.Router();
var ObjectId = require("mongoose").Types.ObjectId;
var user = require('../models/books');

// localhost:3000/books/
router1.get('/', (req,res)=>{
    user.find({}, (err, docs)=>{
        if(!err) { 
            console.log(docs);
            res.send(docs);}
        else{ console.log('error in retreiving data: ') +JSON.stringify(err);}
    });
});


router1.get('/:id', (req,res) =>{
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`User not found with id: $(req.params.id)`);
     user.findById(req.params.id,(err,doc)=>{
         if(!err) res.send(doc);
         else console.log('error in retreiving information'+JSON.stringify(err));
     });
});

router1.post('/', (req,res)=>{
    var u = new user({
        book_id:req.body.book_id,
        goodreads_book_id:req.body.goodreads_book_id,
        best_book_id:req.body.best_book_id,
        work_id:req.body.work_id,
        books_count:req.body.books_count,
        isbn:req.body.isbn,
        isbn13:req.body.isbn13,
        authors:req.body.authors,
        original_publication_year:req.body.original_publication_year,
        original_title:req.body.original_title,
        title:req.body.title,
        language_code:req.body.language_code,
        average_rating:req.body.average_rating,
        ratings_count:req.body.ratings_count,
        work_ratings_count:req.body.work_ratings_count,
        work_text_reviews_count:req.body.work_text_reviews_count,
        ratings_1:req.body.ratings_1,
        ratings_2:req.body.ratings_2,
        ratings_3:req.body.ratings_3,
        ratings_4:req.body.ratings_4,
        ratings_5:req.body.ratings_5,
        image_url:req.body.image_url,
        small_image_url:req.body.small_image_url
    });
    console.log(u);
    u.save((err,doc) =>{
        if(!err){ res.send(doc);}
        else{console.log('error in user save: '+JSON.stringify(err));}
    });
});

router1.put('/:id', (req,res) =>{
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`User not found with id: $(req.params.id)`);
    
    var u = {
        bookId: req.body.bookId,
        authors: req.body.authors,
        original_title: req.body.original_title,
        title: req.body.title,
        average_rating: req.body.average_rating,
        image_url: req.body.image_url,
        small_image_url: req.body.small_image_url
    }
    user.findByIdAndUpdate(req.params.id, {$set:u},{new:true}, (err,doc)=>{
        if(!err){ res.send(doc);}
        else console.log('error in user save: '+JSON.stringify(err));
    });
});

router1.delete('/:id', (req,res)=>{
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`User not found with id: $(req.params.id)`);
    user.findByIdAndRemove(req.params.id, (err,doc)=>{
        if(!err){ res.send(doc);}
        else console.log('error in user save: '+JSON.stringify(err));
    })
})

module.exports = router1;