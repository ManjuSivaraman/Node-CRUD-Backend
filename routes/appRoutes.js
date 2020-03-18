var express = require('express');
var router = express.Router()
var Data = require('../models/dataSchema');

router.post('/create', (req, res, next) => {
    var newData = new Data({
        name: req.body.name,
        email: req.body.email
    });
    newData.save((err, data) => {
        if (err)
            res.status(500).json({
                errmsg: err
            });
        res.status(200).json({
            msg: data
        });
    })
});
router.get('/read', (req, res, next) => {
    Data.find({}, (err, data) => {
        if (err)
            res.status(500).json({
                errmsg: err
            });
        res.status(200).json({
            msg: data
        });
    })
});
router.put('/update/:id', (req, res, next) => {
    Data.findById({ _id: req.params.id }, (err, data) => {
        if (err)
            res.status(500).json({
                errmsg: err
            });
        data.name = req.body.name;
        data.email = req.body.email;
        data.save((err, data) => {
            if (err)
                res.status(500).json({
                    errmsg: err
                });
            res.status(200).json({
                msg: data
            });
        })
    })
});
router.delete('/delete/:id', (req, res, next) => {
    Data.findOneAndRemove({ _id: req.params.id }, (err, data) => {
        if (err)
            res.status(500).json({
                errmsg: err
            });
        res.status(200).json({
            msg: data
        });
    })
});

module.exports = router;