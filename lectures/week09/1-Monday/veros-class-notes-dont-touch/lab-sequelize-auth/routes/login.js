const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/login', (req,res) => {

   
    res.render('login')
})


router.post('/login', async (req, res) => { 


    //scrape ifno from header 
    // check if user is in db
    // encrypt login password 
    // compare the encrypted passwords with what is in db
    // place the session on the login can persist
    
 })



module.exports = router;