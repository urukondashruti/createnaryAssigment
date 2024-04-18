const express = require("express")
const mongoose = require("mongoose")
const app = express();
app.use(express.json());
const bodyParser = require('body-parser'); 
app.use(bodyParser.json()); 
const db ="mongodb+srv://dhana:dhanashruti@cluster0.5lwskm1.mongodb.net/project?retryWrites=true&w=majority&appName=Cluster0";

const componentSchema = new mongoose.Schema({
    _id:String,
    head:String,
    para:String,
    img1:String,
    img2:String
})

const componentModel = mongoose.model("componentsData",componentSchema)


app.get("/get-all",(req,res) => {
    componentModel.find({}, 'head para img1 img2').then(function(data) {
        res.json(data);
    }).catch(function(err) {
        console.log(err);
        res.json({ error: 'Internal server error' }); 
    });
});


mongoose.connect(db).then(() => {
    console.log("connection successful");
}).catch((err) => console.log("no connection"));

app.listen(3002, () => {
    console.log("server is running");
});
