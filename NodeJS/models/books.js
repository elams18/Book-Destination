const mongoose = require("mongoose");

var books = mongoose.model('Books',{
    book_id:{type: String},
    goodreads_book_id:{type: String},
    best_book_id:{type: String},
    work_id:{type: String},
    books_count:{type: String},
    isbn:{type: String},
    isbn13:{type: String},
    authors:{type: String},
    original_publication_year:{type: String},
    original_title:{type: String},
    title:{type: String},
    language_code:{type: String},
    average_rating:{type: String},
    ratings_count:{type: String},
    work_ratings_count:{type: String},
    work_text_reviews_count:{type: String},
    ratings_1:{type: String},
    ratings_2:{type: String},
    ratings_3:{type: String},
    ratings_4:{type: String},
    ratings_5:{type: String},
    image_url:{type: String},
    small_image_url:{type: String},
})
module.exports = books ;