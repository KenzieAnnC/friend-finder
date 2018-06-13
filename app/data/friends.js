var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
var friendArray = [
    {
        name: "Kenzie",
        photo: "https://farm5.staticflickr.com/4783/38921831320_b978a11abc.jpg",
        scores: [
            5, 4, 2, 2, 2, 2, 3, 2, 3, 5
        ]
    },
    {
        name: "Nicholas",
        photo: "https://s.aolcdn.com/hss/storage/midas/627f1d890718ff2c58318a280145a153/203216448/nicholas-cage-con-air.jpg",
        scores: [
            5, 5, 1, 3, 1, 5, 5, 1, 1, 2
        ]
    },
    {
        name: "Oprah",
        photo: "http://i0.kym-cdn.com/entries/icons/facebook/000/012/809/oprah-free-car.jpg",
        scores: [
            5, 3, 5, 2, 4, 1, 2, 3, 4, 5
        ]
    },
    {
        name: "Sean",
        photo: "https://consequenceofsound.files.wordpress.com/2017/02/sean-spicer.jpeg?quality=80&w=800",
        scores: [
            1, 5, 1, 2, 5, 5, 1, 4, 1, 2
        ]
    },
    {
        name: "Sophie",
        photo: "https://pbs.twimg.com/profile_images/927911465851506694/kbokWJhU_400x400.jpg",
        scores: [
            5, 5, 5, 5, 1, 5, 5, 5, 1, 1
        ]
    },
    {
        name: "Calvin",
        photo: "https://img.wennermedia.com/article-leads-horizontal/rs-10918-snoop-624-1368121236.jpg",
        scores: [
            5, 2, 4, 2, 4, 3, 4, 3, 3, 4
        ]
    },
    {
        name: "The Doctor",
        photo: "https://carboncostume.com/wordpress/wp-content/uploads/2014/09/4thdoctor.jpg",
        scores: [
            5, 3, 5, 1, 2, 2, 4, 1, 3, 3
        ]
    },
    {
        name: "Paris",
        photo: "http://ethnicelebs.com/wp-content/uploads/2008/07/paris.jpg",
        scores: [
            1, 4, 4, 3, 1, 5, 3, 3, 5, 3
        ]
    },
    {
        name: "Spock",
        photo: "http://www.startrek.com/uploads/assets/db_articles/6ee08d45f7a94d4c6fda9ee84833054a687ddf77.jpg", 
        scores: [
            2, 5, 5, 4, 5, 5, 5, 5, 2, 3
        ]
    },
    {
        name: "Tina",
        photo: "https://pmcvariety.files.wordpress.com/2018/04/tina-fey-16x9.jpg?w=1000&h=563&crop=1",
        scores: [
            5, 2, 3, 2, 3, 2, 4, 1, 3, 4
        ]
    }
]

module.exports = friendArray;