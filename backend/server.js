const { MongoClient } = require('mongodb');
const express = require('express');
const bodyParser = require("body-parser");

const app = express();
const cors = require('cors');

app.use(cors())
app.use(bodyParser.json())


var db;
const uri = "mongodb://127.0.0.1:27017/";

MongoClient.connect(uri).then((client)=>{
    db = client.db('progig');
    console.log("Database Connected");
}
).catch((err)=>{console.log("MongoDB Connection Error")});

app.post("/loginUser", async(req, res) => {
    const {email, password } = req.body;

        const user = await db.collection('Buyer').findOne({email})

        if(user == null){
            return res.json({message : "UNF"})
        }
        else{

            if(user.email == email && user.password == password){
                return res.json({
                    message : "true",
                    userName : user.username,
                    email : user.email
                })
            }
            else{
                return res.json({message : "false"})
            }

        }
        
    
});

app.post("/signUp", async(req, res) => {

    const {name, email, userName, password} = req.body;

    const user = await db.collection("Buyer").findOne({email});

    if(user == null){
        const insert = await db.collection("Buyer").insertOne({
            name : name,
            email : email,
            username : userName,
            password : password
        })

        if(insert){
            return res.json({message : "true"})
        }
        
    }
    else if (user.email == email){
        return res.json({message : "user exist"})
    }
    else if(user.username == userName){
        return res.json({message : "userName exist"})
    }

});


app.listen(5000, ()=>{
    console.log("Server running on Port 5000")
})
