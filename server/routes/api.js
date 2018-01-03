const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/user');



const db = "mongodb://deeptiii:deeptiii@ds050739.mlab.com:50739/users";
mongoose.Promise = global.Promise;
mongoose.connect(db, function(err){
    if(err){
        console.error("Error!" + err);
    }
});


router.get('/users',function(req,res){
    console.log("Get Request");
    User.find({})
    .exec(function(err, users){
        if(err){
            console.log("Error");
        }else{
            res.json(users);

        }
    });
});

router.get('/users/:id',function(req,res){
    console.log("Get Request single user");
    User.findById(req.params.id)
    .exec(function(err, user){
        if(err){
            console.log("Error");
        }else{
            res.json(user);

        }
    });
});

router.post('/user',function(req,res){
    console.log('Add a user');
    var newUser = new User();
    newUser.firstname = req.body.firstname;
    newUser.lastname = req.body.lastname;
    newUser.age = req.body.age;
    newUser.email = req.body.email;
    newUser.save(function(err, insertedUser){
        if(err){
            console.log('Error inserting user');
        }else{
            res.json(insertedUser);
        }
    });
});

router.put('/user/:id',function(req,res){
    console.log('update a user');
    User.findByIdAndUpdate(req.params.id,
        {
            $set:{firstname:req.body.firstname,
                lastname:req.body.lastname,
                age:req.body.age,
                email:req.body.email
            }
        },
        {
            new:true
        },
        function(err, updatedUser){
            if(err){
                res.send("Error updatind user");
            }else{
                res.json(updatedUser);
            }
        }
    );
});

router.delete('/user/:id',function(req,res){
    console.log('Deleting a user');
    User.findByIdAndRemove(req.params.id,function(err,deletedUser){
        if(err){
            res.send("Error updatind user");
        }else{
            res.json(deletedUser);
        }  
    });
});

module.exports = router;