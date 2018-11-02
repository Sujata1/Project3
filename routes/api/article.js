const db = require("../.././models");
const router = require("express").Router();
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('bbbe5e03f1b34fdfbe7823f7a7e6e3df');

router.get("/api/sources", (req, res) => {

  newsapi.v2.sources({
    language: 'en',
    country: ''
  }).then(response => {

    db.Source.remove({}, function (err) {
      var result = {};

      for (var i = 0; i < response.sources.length; i++) {
        result = {}
        result.sourceid = response.sources[i].id
        result.name = response.sources[i].name
        result.description = response.sources[i].description
        result.url = response.sources[i].url
        result.category = response.sources[i].category
        result.language = response.sources[i].language
        result.country = response.sources[i].country

        db.Source.create(result)
          .then(function (dbSource) {
            console.log(dbSource)
          })
          .catch(function (err) {
            return res.json(err);
          });
      }
      res.json(response)
    }).catch(function (err) {
      return res.json(err);
    });
  }).catch(function (err) {
    return res.json(err);
  });
});

router.get("/api/article/:q/:source?", (req, res) => {

   db.Article.remove({}, function (err) {
    let options = {
      q: req.params.q,
      language: 'en',
      sortBy: 'relevancy'
    }
    if(req.params.source) options['sources'] = req.params.source;
    newsapi.v2.everything(options)
      .then(response1 => {
      var count = 50;
      var respnse_50=[];
      if(response1.articles.length<=count)
      {
        count = response1.articles.length
      }
      console.log(count);
      var result1 = {};
      for (var j = 0; j < count; j++) {

        result1 = {}
        result1.source = response1.articles[j].source.id
        result1.author = response1.articles[j].author
        result1.title = response1.articles[j].title
        result1.description = response1.articles[j].description
        result1.url = response1.articles[j].url
        result1.urlToImage = response1.articles[j].urlToImage
        result1.publishedAt = response1.articles[j].publishedAt
        result1.content = response1.articles[j].content
        // console.log(j);
        respnse_50.push(result1);
        db.Article.create(result1)
          .then(function (dbArticle) {
            console.log(dbArticle);
            // console.log(dbArticle)
          })
          .catch(function (err) {
            console.log(err);
          });
      }
      res.json(respnse_50);
    }).catch(function (err) {
      res.json(err);
    });
  }).catch(function (err) {
    res.json(err);
  });
});

router.get('/articlesdb/',function(req,res){
  db.Article.find({}).then(result => {
    return res.json(result)
  })
})
module.exports = router;