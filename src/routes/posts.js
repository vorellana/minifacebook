const { Router } = require('express');
const router = Router();
const User = require('./../models/user');

router.get('/', (req, res) => {


    // var User = require('./../schema/user');
    User.find({})
    .then((data)=>{
        console.log(data);
        res.json(data);
    })
    .catch((err)=>{
        console.log(err);
    })


    // const data = {
    //     "name": "post",
    //     "nroLogin": "8"
    // };
    // res.json(data);
});

module.exports = router;