const { Router } = require('express'); // "express" "Router" method required
const router = Router(); // the Router method is executed

router.get('/test', (req, res) => {
    // res.json({"Title":"Hello World"});
    const data = {
        "name": "Vitucho",
        "websiste": "vorellana"
    };
    res.json(data);
});

module.exports = router;