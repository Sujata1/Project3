const db = require("../.././models");
const router = require("express").Router();
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('bbbe5e03f1b34fdfbe7823f7a7e6e3df');

router.get("/api/sources", (req, res) => {

    newsapi.v2.sources({
        language: 'en',
        country: ''
    }).then(response => {


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
            result.credtotal = 0;
            result.reltotal = 0;
            result.acctotal = 0;
            result.totalusers = 0;
            db.Source.create(result)
                .then(function (dbSource) {
                })
                .catch(function (err) {
                    return res.json(err);
                });
        }
        res.json(response)

    }).catch(function (err) {
        return res.json(err);
    });
});

router.post("/api/srating/", (req, res) => {
    console.log("req:"+req.body.sourceid);
    db.Source.find({ sourceid: req.body.sourceid }).then(dbsource => {
        var source = []
        console.log(dbsource);
        if (dbsource.length != 0) {
            console.log("id: "+dbsource[0]._id)
            
            source.credtotal = dbsource[0].credtotal +parseInt(req.body.credtotal);
            source.reltotal = dbsource[0].reltotal + parseInt(req.body.reltotal);
            source.acctotal =dbsource[0].acctotal +  parseInt(req.body.acctotal);
            source.totalusers = dbsource[0].totalusers + 1;
            console.log(source)
            db.Source.findByIdAndUpdate(dbsource[0]._id,   {$set:{
                "credtotal": source.credtotal,
                "reltotal": source.reltotal,
                "acctotal": source.acctotal, 
                "totalusers": source.totalusers
               
            }}).then(result => {
                console.log("result: "+result);
                res.json("Source Rating Updated");
            }).catch(err => {
                res.json(err);
            })
        }
    })


});

router.get("/api/sourcesdb",(req,res) =>{
        db.Source.find({})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  });

module.exports = router;