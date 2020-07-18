const express = require("express");
const burger = require("../models/burger.js");
const router = express.Router();

//Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req, res) {
    burger.insertOne([
        "burger_name", "devoured"
    ],[
        req.body.name, req.body.devoured
    ], function(result) {
        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log("Devoured? ", condition);
    burger.updateOne({
        devoured: req.body.devoured
    }, condition, function(results) {
        if(results.changeRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    
    });
});

router.delete("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    burger.delete(condition, function(result) {
        if (result.affectedRows == 0) {
            return res.status(404).end();

        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;