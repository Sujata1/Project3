const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

var mongoose = require("mongoose");
// const routes = require("./routes");
var db = require("./models");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Import routes and give the server access to them.
var userroutes = require("./routes/api/users");

app.use(userroutes);

const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('bbbe5e03f1b34fdfbe7823f7a7e6e3df');

app.get("/api/sources", (req, res) => {

  newsapi.v2.sources({
    language: 'en',
    country: 'ca'
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
app.get("/api/article", (req, res) => {

  db.Article.remove({}, function (err) {
    db.Source.find({})
      .then(function (dbSource) {
        console.log(dbSource);
        for (var i = 0; i < dbSource.length; i++) {
          newsapi.v2.everything({
            sources: dbSource[i].sourceid.id,
            q:"Donald Trump",
            from: '2018-10-26',
            to: '2017-10-27',
            language: 'en',
            sortBy: 'relevancy',
          }).then(response1 => {

                var result1 = {};
                for (var j = 0; j < response1.articles.length; j++) {

                  result1 = {}
                  result1.source = response1.articles[j].source.id
                  result1.author = response1.articles[j].author
                  result1.title = response1.articles[j].title
                  result1.description = response1.articles[j].description
                  result1.url = response1.articles[j].url
                  result1.urlToImage = response1.articles[j].urlToImage
                  result1.publishedAt = response1.articles[j].publishedAt
                  result1.content = response1.articles[j].content

                  db.Article.create(result1)
                    .then(function (dbArticle) {
                      console.log(dbArticle)
                    })
                    .catch(function (err) {
                      return res.json(err);
                    });
                }
          }).catch(function (err) {
            return res.json(err);
          });
        }
      }).catch(function (err) {
        return res.json(err);
      });
  }).catch(function (err) {
    res.json(err);
  });
});
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/ptfdb";

mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);

app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
