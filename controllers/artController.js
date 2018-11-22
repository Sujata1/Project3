const db = require('../models');
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('bbbe5e03f1b34fdfbe7823f7a7e6e3df');

module.exports = {
    addArticles: function (req, res) {
        db.Article.remove({}, function (err) {
            let options = {
                q: req.params.q,
                language: 'en',
                sortBy: 'relevancy'
            }
            if (req.params.source) options['sources'] = req.params.source;
            newsapi.v2.everything(options)
                .then(response1 => {
                    var count = 50;
                    var response_50 = [];
                    if (response1.articles.length <= count) {
                        count = response1.articles.length
                    }
                    var result1 = {};
                    for (let j = 0; j < count; j++) {

                        result1 = {}
                        result1.source = response1.articles[j].source.id
                        result1.author = response1.articles[j].author
                        result1.title = response1.articles[j].title
                        result1.description = response1.articles[j].description
                        result1.url = response1.articles[j].url
                        result1.urlToImage = response1.articles[j].urlToImage
                        result1.publishedAt = response1.articles[j].publishedAt
                        result1.content = response1.articles[j].content
                        result1.rated = false;

                        
                        // db.UserRating
                        //     .findOne({
                        //         useremail: "sujata.jhaveri@gmail.com",
                        //         articleurl: result1.url
                        //     })
                        //     .then(data => {
                               
                        //         if (data) {
                        //             console.log("message2"+"data: "+data);
                        //             result1.rated = true;
                        //             console.log("message2: "+'result1: '+JSON.stringify(result1));
                        //         }
                        //     });

                        
                        //     console.log("message1"+"url: "+result1.url+" rated: "+result1.rated)


                        response_50.push(result1);
                        db.Article.create(result1)
                            .then(function (dbArticle) {
                            })
                            .catch(function (err) {
                                console.log(err);
                            });
                    }
                    // for (let j = 0; j<response_50.length; j++){
                    //     // console.log("response_50: "+JSON.stringify(response_50[j]))
                    //     db.UserRating
                    //         .findOne({
                    //             useremail: "sujata.jhaveri@gmail.com",
                    //             articleurl: response_50[j].url
                    //         })
                    //         .then(data => {
                               
                    //             if (data) {
                    //                 console.log("message2"+"data: "+data);
                    //                 response_50[j].rated = true;
                    //                 console.log("message1: "+"response_50: "+JSON.stringify(response_50[j]))
                    //             }
                    //         });

                    //         console.log("message2: xxxx")
                    // }
                    res.json(response_50);
                }).catch(function (err) {
                    res.json(err);
                });
        }).catch(function (err) {
            res.json(err);
        });
    },
    findAll: function (req, res) {
        db.Article.find({}).then(result => {
            return res.json(result)
        });
    },
    //  updateRated: function(req,res){
    //      db.Article.find({}).then(result => {
    //          for (var j = 0; j < result.length; j++) {
                
    //         }
    //         return res.json(result)
    //     });
    //  }

};