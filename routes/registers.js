var express = require('express');
var router = express.Router();
var myregister = require('../Models/register');
const { name } = require('ejs');

/* GET home page. */
router.post('/', async function (req, res, next) {

    try {
        data = await myregister.create(req.body)
        res.status(201).json({
            status: 'success',
            data
        })
    }
    catch (error) {
        console.log(error);
    }

});
var data
router.get('/getdata', async function (req, res, next) {

    try {
        data = await myregister.find()
    //  var b =   res.render('index' , {name : data})
        res.status(201).json({
            status: 'success',
            data
        })
        console.log(data);
    }
    catch (error) {
        console.log(error);
    }
});

router.delete('/deletedata/:id', async function (req, res, next) {

    try {
            console.log(req.params.id);
        data = await myregister.findByIdAndDelete(req.params.id)
        res.status(201).json({
            status: 'success',
            
        })
    }
    catch (error) {
        console.log(error);
    }

});


router.patch('/editdata/:id', async function (req, res, next) {

    try {
        
        data = await myregister.findByIdAndUpdate(req.params.id , req.body)
        res.status(201).json({
            status: 'success',
        })
    }
    catch (error) {
        console.log(error);
    }

});


module.exports = router;
