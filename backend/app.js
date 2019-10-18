const express = require("express");
const app = express();
const bodyparser = require("body-parser")
const cors = require("cors")

const mongoose = require('mongoose');

const User = require("./models/user")

mongoose.connect("mongodb+srv://benson:a2mE.64KdzZf@cluster0-tffeu.mongodb.net/test?retryWrites=true&w=majority")
    .then( () => {
        console.log("connection to mongoDB atlas suscessful");
    })
    .catch( (error) => {
        console.log("unable to connect to mongoDB atlas");
        console.error(error);
    });
app.use(cors());

app.use(bodyparser.json());

app.post("/api/user", (req, res, next) => {
    console.log(req.body)
    const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        birthday: req.body.birthday,
        age: req.body.age,
        hobby: req.body.hobby
    })

    user.save()
        .then( () => {
        res.status(201).json({
            message: "User created successfully"
        })
        
       }).catch( (error) => {
        console.log("fail in creating User");
        res.status(400).json({
            error: error
        })
    })
});

app.use("/api/user", (req, res, next) => {
    User.find()
        .then( (user) => {
            res.status(200).json(user);
        })
        .catch( (error) => {
            console.log("fail in getting User");
            res.status(400).json({
                error: error
            })
        })
    
});

module.exports = app;