//everything lives in the same controller 
//model creation, the CRUD operations
//should spread this code accross multiple components so that it becomes easier to maintain our application
//we dont usually create classes functions like this we spread the code based on the functionality
//usually we start by creating the model class .js file
//model.js has the database or product schema
//the model class is used in the DAO class
//dao DATA ACCESS OBJECT class has all the CRUD operations
//for example DAO has the findById and save and findOneAndUpdate 
//the controller should import the DAO
//then we create the instance of the model and export it out
//the dao is used in the controller which we import the dao
//the controller has the functions
//the routes.js has all the different API endpoints like /tours /tours/:id get post put and delete and we map the routs to the methods in the controller
//import usually uses ES6
//properties.js would have the port number and the mongodb://localhost/products config

var express = require('express');
var cors = require('cors');
var router = express.Router();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/key')


//router.use(cors());

var allowedOrigins = ['http://localhost:4200'];
router.use(cors({
    origin: allowedOrigins
}));

//requred fields
var keyvaultSchema = new mongoose.Schema({
    name:String,
    token:String,
    key:String,
});

//the name of the collection is keyvault
var Keyvault = mongoose.model("Keyvault",keyvaultSchema,'keyvault');


//Keyvault is the collection in the mongoDB database

router.get('/',(req,res)=>{
    res.send("Keyvault API!!");
})

router.get('/keyvault/:id',(req,res)=>{
    Keyvault.findById(req.params.id).then(keyvault=>{
        res.send(keyvault);
    }).catch(err=>{
        console.log(err);
    })
})


//router.get('/keyvault',(req,res)=>{
//    Cyclist.find().then(cyclists=>{
//        res.send(cyclists);
//    }).catch(err=>{
//        console.log(err);
//    })
//})

//connect that onto your UI layer

// create a service classs and connect the api endpoint

// export class () {
//	Private cyclist: string = '/cyclists';
//
//}

//uses the Promise syntax
//cyclist.save() is the name of the collection?
router.post('/keyvault',(req,res)=>{
    //declare a model object the json that is in the request ist the body
    var keyvaultkey = new Keyvault(req.body);
    keyvaultkey.save().then(keyvault=>{
        res.send(keyvault);
    }).catch(err=>{
        console.log(err);
    })
})

router.put('/keyvault/:id',(req,res)=>{
    var keyvault = {
        "name":req.body.name,
        "token":req.body.token,
        "key":req.body.key
    }
    Keyvault.findOneAndUpdate({_id:req.params.id},{$set:keyvault}).then(keyvault=>{
        res.send("{"+ '"'+"response"+ '"'+":"+ '"'+"Key Updated!"+ '"'+"}")
    }).catch(err=>{
        console.log(err);
    })
})

router.delete('/keyvault/:id',(req,res)=>{
    Keyvault.findByIdAndDelete({_id:req.params.id}).then(keyvault=>{
        res.send("{"+ '"'+"response"+ '"'+":"+ '"'+"Key Deleted!"+ '"'+"}")
   
    }).catch(err=>{
        console.log(err);
    })
})

router.get('/totalkeys',(req,res)=>{
    Keyvault.countDocuments().then(keyvault=>{
    res.send("{"+ '"'+"totalkeys"+ '"'+":"+ keyvault+"}")
    }).catch(err=>{
        console.log(err);
    })
})

router.get('/getIndexes',(req,res)=>{
   Keyvault.listIndexes().then(keyvault=>{
    res.send(keyvault)
       //res.send("{"+ '"'+"indexes"+ '"'+":"+ '"'+ keyvault+'"'+"}")
    }).catch(err=>{
        console.log(err);
        })
})

module.exports = router;