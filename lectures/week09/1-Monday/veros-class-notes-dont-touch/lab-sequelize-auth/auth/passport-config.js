const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const db = require('../models')



const init = (passport) => {

    //req => passport => sessionid req.isAuthenticated() => respspose
    //done = next
    passport.use(new LocalStrategy({usernameField: 'email'}, async  (email, password, done)=>{

        //scrape ifno from header 
        // check if user is in db
        // encrypt login password 
        // compare the encrypted passwords with what is in db
        // place the session on the login can persist
        try{

            let records = await db.users.findAll({where: {email:email}})// [{}]

            if(records){

                let record = records[0]
                //get the db password and compare it to the password that was entered in the form 

                bcrypt.compare(password, record.password, (err,  match)=>{

                    if(match){
                        console.log('passwords matched');
                        return done(null, record)
                    }
                    else{
                        console.log(`passwords didn't match`);

                        return done(null, false)
                    }
                })
            }
            else{
                // no user in our dabase 
                return done(null, false)
            }
        }
        catch(error){

            //error in trying to retrieve something from our db
            console.log(error);

            return done(error)
        }
    }))
    
}