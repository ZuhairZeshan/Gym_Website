const express=require('express');
const path=require('path');
const fs=require('fs');
const app=express();
const port=8000;
const bodyparser=require('body-parser')
const mongoose = require('mongoose');
main().catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/contactDance');
}

const contactschema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    address: String,
    desc: String
});
const contact = mongoose.model('Contacts', contactschema);


app.use('/static',express.static('static')); //for static files.
app.use(express.urlencoded());

app.set('view engine', 'pug');//set template engine
app.set('views',path.join(__dirname,'views')); //Access views directory  //views => templates

app.get('/',(req,res)=>{
    const params={"title":"PUG","content":"This is a Content"};
    res.status(200).render('home.pug',params);
})

app.get('/about', (req, res) => {
    res.status(200).render('about');
});

app.get('/services', (req, res) => {
    res.status(200).render('services');
});

app.get('/contact',(req,res)=>{
    const params={"title":"PUG","content":"This is a Content"};
    res.status(200).render('contact.pug',params);
})

app.post('/contact',(req,res)=>{
    var mydata=new contact(req.body);
    mydata.save().then(()=>{
        res.send("Item Saved");
    }).catch(()=>{
        res.status(400).send("Item Not Saved");
    });
    // res.status(200).render('contact.pug');
})

app.listen(port,()=>{
    console.log("Success");
})


