const express=require("express");
const ejs=require("ejs");
const path=require("path");
const port=process.env.PORT ||3000;
const bodyParser=require("body-parser")
const app=express();
// const http = require('http');
const mongoose=require("mongoose");
const e = require("express");
app.use(express.urlencoded({extended:false}));
app.set("view engine","ejs");
const staticPath=path.join(__dirname,"/public");
app.use(express.static(staticPath));

main().catch(err=>console.log(err));
async function main() {
    await mongoose.connect("mongodb+srv://iam000:iam000@cluster0.tqecyoq.mongodb.net/deepak?retryWrites=true&w=majority");
    console.log("connection succesfull...");
}
const deepakSchema=mongoose.Schema({
imgsrc:Array,
desc:String,
price:String,
id:String
});
const Deepu= mongoose.model("Deepu",deepakSchema);
const Udmi= mongoose.model("Udmi",deepakSchema);
const Saari= mongoose.model("Saari",deepakSchema);
const Tradinational= mongoose.model("Tradinational",deepakSchema);
app.get("/",async(req,res)=>{
    const data=await Deepu.find();
    // console.log(data);
    const listofData=await Udmi.find();

    let number= listofData.length;
    
    // console.log(listofData);
    res.render("home",{data:data,list:listofData,number});
})
app.get("/user",(req,res)=>{
    res.render("user");
})
app.get("/login",(req,res)=>{
    res.render("login");
})
app.get("/tradinational",async(req,res)=>{
    const data=await Tradinational.find();
    const listofData=await Udmi.find();
    let number= listofData.length;
    // console.log(data);
    res.render("tradinational",{number,data:data,list:listofData});
})
app.get("/saari",async(req,res)=>{
    const data=await Saari.find();
    const listofData=await Udmi.find();
    let number= listofData.length;
    // console.log(data);
    res.render("saari",{number,data:data,list:listofData});
})
app.get("/checkout",(req,res)=>{
    res.render("checkout");
})
app.get("/contact",(req,res)=>{
    res.render("contact");
})
var result;
var allData;
var prId;
app.get("/product/:id/",async(req,res)=>{
    const id = req.params.id;
    const data0=await Deepu.find();
    const data1=await Saari.find();
    const data2=await Tradinational.find();
    const listofData=await Udmi.find();
    let number= listofData.length;
    var data=[data0,data1,data2]
    // console.log(data[0]);
    allData=data;
    prId=id;
    allData.forEach(e=>{
        e.forEach(elem=>{
            if(prId == elem.id){
                elem.id=prId;
                result = elem;
                // console.log(result);
            }
        })
    }) 

    res.render("product",{number,id:id,result:result,list:listofData,data:data0});
})
app.get("/product",async(req,res)=>{
    const data=await Saari.find();
    res.render("product",{data:data});
})
app.post("/cart/:id",async(req,res)=>{
    // console.log(req.params.id );
     let id=req.params.id;
    const data0=await Deepu.find();
    const data1=await Saari.find();
    const data2=await Tradinational.find();
    var data=[data0,data1,data2];
    var newdata=data[0];
    var newdata1=data[1];
    var newdata2=data[2];

    newdata.forEach(element=>{
     if(element.id==id){
        let id=element.id;
        let imgsrc=element.imgsrc;
        let desc=element.desc;
        let price=element.price;
         const newone=new Udmi({id,imgsrc,price,desc});
        //  console.log(element);
        newone.save();
     }
    })
    newdata1.forEach(element=>{
     if(element.id==id){
        let id=element.id;
        let imgsrc=element.imgsrc;
        let desc=element.desc;
        let price=element.price;
         const newone=new Udmi({id,imgsrc,price,desc});
        //  console.log(element);
        newone.save();
     }
    })
    newdata2.forEach(element=>{
     if(element.id==id){
        let id=element.id;
        let imgsrc=element.imgsrc;
        let desc=element.desc;
        let price=element.price;
         const newonw=new Udmi({id,imgsrc,price,desc});
        //  console.log(element);
        newonw.save();
     }
    })

})
app.post("/remover/:id",async(req,res)=>{
    let id=req.params.id;
    const matchdata=await Udmi.find();
    matchdata.forEach(e=>{
    //   console.log(e.id);
    if (e.id==id) {
        e.delete()
    }
    })
})
app.listen(port,()=>{
    console.log(`Connected on ${port}....`);
})
