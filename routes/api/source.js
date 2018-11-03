const db = require("../.././models");
const router = require("express").Router();

router.get("/api/rating/", (req, res) => {


});


router.post("/api/source/", (req, res) => {

    db.Source.find({ sourceid: req.params.sourceid }).then(dbsource => {
        var source = []

        console.log(dbsource)
        if (dbsource.length === 0) {
           
            source.sourceid = req.params.sourceid;
            source.credtotal = dbsource.credtotal + req.params.credtotal;
            source.inttotal = dbsource.credtotal + req.params.credtotal;
            source.acctotal = dbsource.credtotal + req.params.credtotal;
            source.totalusers = 1;

            db.Source.create(source).then(result => {
                res.json("New Source");
            }).catch(err => {
                res.json(err);
            })
        }
        else{
            source.credtotal = dbsource.credtotal + req.params.credtotal;
            source.inttotal = dbsource.credtotal + req.params.credtotal;
            source.acctotal = dbsource.credtotal + req.params.credtotal;
            source.totalusers += 1;
            db.Source.findByIdAndUpdate({_id: dbsource._id},source).then(result =>{
                res.json("Ratings Submitted")
            })
        }
    })


});

module.exports = router;