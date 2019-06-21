const express = require('express');
const db = require('./models');

const app = express();

app.use(express.urlencoded({extended:false}));

app.get('/',function(req,res){
    req.send("everthing works");
})
app.get('/users',function(req,res){
    db.user.findAll().then(function(users){
        res.json(users);
    });
});
app.get('users/:id',function(req,res){
    db.user.findOne({
        where:{id:parseInt(req.params.id)}
    }).then(function(user){
        res.json(user);
    })
})
app.post('/users',function(req,res){
    db.user.create({
        name:req.body.name,
        author:req.body.author,
        chapters:parseInt(req.body.chapters)
    }).then(function(data){
        console.log(data);
        res.json(data);
    })
})
app.put('/users/:id',function(req,res){
    bd.user.update({
        name:req.body.name,
        author:req.body.author,
        chapters:parseInt(req.body.chapters)
    },{
        where:{
            id:parseInt(req,res)
        }
    }).then(function(data){
        res.json(data);
    });
});
app.delete('/users/:id',function(req,res){
    db.user.destroy({
        where:{
            id:parseInt(req.params.id)
        }
    }).then(function(data){
        res.json(data);
    })
})
//Create one record route, read one record route, 
//read all records route
//update one record route
//delete one record route
app.listen(3000,function(){
    console.log( "you are listeining to Post 3000")
})