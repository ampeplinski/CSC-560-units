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
mongoose.connect('mongodb://localhost/tours')


//router.use(cors());

var allowedOrigins = ['http://localhost:4200'];
router.use(cors({
    origin: allowedOrigins
}));

//requred fields
var cyclistSchema = new mongoose.Schema({
    name:String,
    age:Number,
    pointstotal:Number,
    tours:[{
        //type:mongoose.Schema.Types.ObjectId,
        stageoneminutes:Number,
        stageonepoints:Number,

	stagetwominutes:Number,
        stagetwopoints:Number,

        stagethreeminutes:Number,
        stagethreepoints:Number,

	stagefourminutes:Number,
        stagefourpoints:Number,

        stagefiveminutes:Number,
        stagefivepoints:Number,

	stagesixminutes:Number,
        stagesixpoints:Number,

        stagesevenminutes:Number,
        stagesevenpoints:Number,

	stageeightminutes:Number,
        stageeightpoints:Number,

        stagenineminutes:Number,
        stageninepoints:Number,

	stagetenminutes:Number,
        stagetenpoints:Number,

        stageelevenminutes:Number,
        stageelevenpoints:Number,

	stagetwelveminutes:Number,
        stagetwelvepoints:Number,
        
        stagethirtheenminutes:Number,
        stagethirtheenpoints:Number,

	stagefourteenminutes:Number,
        stagefourteenpoints:Number,

        stagefifteenminutes:Number,
        stagefifteenpoints:Number,

	stagesixteenminutes:Number,
        stagesixteenpoints:Number,

        stageseventeenminutes:Number,
        stageseventeenpoints:Number,

	stageeighteenminutes:Number,
        stageeighteenpoints:Number,

        stagesninteenminutes:Number,
        stagesninteenpoints:Number,

	stagetwentyminutes:Number,
        stagetwentypoints:Number,

        stagetwentyoneminutes:Number,
        stagetwentyonepoints:Number,

        
        //ref: 'Tours'
    }
    ]
});

//
var tourSchema = new mongoose.Schema({
    fltdataDurationMinutesMean:Number,
    smtdataDurationMinutesMean:Number,
    mtdataDurationMinutesMean:Number,
    raceMetadataYear:Number,
    cyclist:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Cyclist'
    }
})

var tourSchema = new mongoose.Schema

var toursSchema = new mongoose.Schema

//the name of the collection is cyclist 
var Cyclist = mongoose.model("Cyclist",cyclistSchema,'cyclist');


//model
//var Tour = mongoose.model("Tours",tourSchema,'tour');

//Tour is the collection in the mongoDB database

router.get('/',(req,res)=>{
    res.send("CYCLIST API!!");
})

router.get('/cyclist/:id',(req,res)=>{
    Cyclist.findById(req.params.id).then(cyclists=>{
        res.send(cyclists);
    }).catch(err=>{
        console.log(err);
    })
})


router.get('/cyclists',(req,res)=>{
    Cyclist.find().then(cyclists=>{
        res.send(cyclists);
    }).catch(err=>{
        console.log(err);
    })
})

//connect that onto your UI layer

// create a service classs and connect the api endpoint

// export class () {
//	Private cyclist: string = '/cyclists';
//
//}

//uses the Promise syntax
//cyclist.save() is the name of the collection?
router.post('/cyclists',(req,res)=>{
    //declare a model object the json that is in the request ist the body
    var cyclist = new Cyclist(req.body);
    cyclist.save().then(cyclist=>{
        res.send(cyclist);
    }).catch(err=>{
        console.log(err);
    })
})

router.put('/cyclists/:id',(req,res)=>{
    var cyclist = {
        "name":req.body.name,
        "age":req.body.age,
        "pointstotal":req.body.pointstotal,
    "tours": req.body.tours
	//[{
        //type:mongoose.Schema.Types.ObjectId,
    //    "stageoneminutes":req.body.stageoneminutes,
    //    "stageonepoints":req.body.stageonepoints
    //}
    //]
    }
    Cyclist.findOneAndUpdate({_id:req.params.id},{$set:cyclist}).then(cyclist=>{
        res.send("Cyclist Updated!")
    }).catch(err=>{
        console.log(err);
    })
})

router.delete('/cyclists/:id',(req,res)=>{
    Cyclist.findByIdAndDelete({_id:req.params.id}).then(cyclists=>{
    res.send(cyclists)
    }).catch(err=>{
        console.log(err);
    })
})

router.get('/youngestrider',(req,res)=>{
    Cyclist.find().sort({ "age": 1 }).limit(1).then(cyclist=>{
    res.send(cyclist)
    }).catch(err=>{
        console.log(err);
    })
})

router.get('/fasteststageone',(req,res)=>{
   Cyclist.find().sort({"tours.stageoneminutes":1}).limit(1).then(cyclist=>{
       res.send(cyclist)
    }).catch(err=>{
        console.log(err);
        })
})

router.get('/stageonesorted',(req,res)=>{
    var player_list = [];
    var result = Cyclist.find().sort({"tours.stageoneminutes":1}).limit(10).then(cyclists=>{
        res.send(cyclists)
    }).catch(err=>{
        console.log(err);
    })
})
 


router.get('/mostpoints',(req,res)=>{
    var player_list = [];
    Cyclist.find().sort({"totalpoints":1}).limit(1).then(cyclists=>{
        res.send(cyclists)
    }).catch(err=>{
        console.log(err);
    })
})

router.get('/stageonepoints',(req,res)=>{
    var player_list = [];
    var result = Cyclist.find().sort({"tours.stageonepoints":-1}).limit(10).then(cyclists=>{
        res.send(cyclists)
    }).catch(err=>{
        console.log(err);
    })
})

module.exports = router;