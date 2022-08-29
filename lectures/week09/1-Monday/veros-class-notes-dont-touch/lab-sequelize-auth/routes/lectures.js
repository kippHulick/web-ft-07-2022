
const express = require('express');
const router = express.Router();

router.get('/lectures', (req,res) => {

   
    res.render('lectures')
})


module.exports = router;
