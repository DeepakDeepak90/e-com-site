var namefilter;
let dd;
var abcd=false;
const express=require("express");
const ejs=require("ejs");
const path=require("path");
const port=process.env.PORT ||3000;
const bodyParser=require("body-parser")
const app=express();
// const http = require('http');
const mongoose=require("mongoose");
// const e = require("express");
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
id:String,
name:String,
email:String,
number:String,
password:String
});
const Deepu= mongoose.model("Deepu",deepakSchema);
const Udmi= mongoose.model("Udmi",deepakSchema);
const Registration=mongoose.model("Registration",deepakSchema);
const Saari= mongoose.model("Saari",deepakSchema);
const Tradinational= mongoose.model("Tradinational",deepakSchema);

app.get("/",async(req,res)=>{
    const data=await Deepu.find();
    // console.log(data);
    const listofData=await Udmi.find();
    
    let number= listofData.length;    
    // console.log(listofData);
    if (abcd==true) {
        const Cart=mongoose.model(dd,deepakSchema);
      const listof=await Cart.find();
      let number= listof.length;
    //   res.render("saari",{number,data:data,list:listofData});
      res.render("home",{number,data:data,list:listof,abcd});
      
  }else{
  res.render("home",{data:data,list:listofData,number,abcd});
  }
})
app.get("/user",(req,res)=>{

    // var deepak="deepak";
        // var show=deepak.charAt(0).toUpperCase()+deepak.slice(1);
        // console.log(show);
    res.render("user",{abcd});
})
app.get("/login",(req,res)=>{

    res.render("login",{abcd});
})
app.get("/tradinational",async(req,res)=>{
    const data=await Tradinational.find();
    const listofData=await Udmi.find();
    let number= listofData.length;
    // console.log(data);
    if (abcd==true) {
        const Cart=mongoose.model(dd,deepakSchema);
      const listof=await Cart.find();
      let number= listof.length;
    //   res.render("saari",{number,data:data,list:listofData});
      res.render("tradinational",{number,data:data,list:listof});
      
  }else{
//   res.render("saari",{number,data:data,list:listofData});
  res.render("tradinational",{number,data:data,list:listofData});
  }
})
app.get("/saari",async(req,res)=>{
    
    // console.log(abcd);
    const data=await Saari.find();
    const listofData=await Udmi.find();
    let number= listofData.length;
    // console.log(dd);
    if (abcd==true) {
          const Cart=mongoose.model(dd,deepakSchema);
        const listof=await Cart.find();
        let number= listof.length;
        res.render("saari",{number,data:data,list:listof});
        
    }else{
    res.render("saari",{number,data:data,list:listofData});
    }
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
    if (abcd==true) {
        const Cart=mongoose.model(dd,deepakSchema);
      const listof=await Cart.find();
      let number= listof.length;
      res.render("product",{number,id:id,result:result,list:listof,data:data0});
    //   res.render("s",{number,data:data,list:listof});
      
  }else{
//   res.render("saari",{number,data:data,list:listofData});
res.render("product",{number,id:id,result:result,list:listofData,data:data0});
  }
})
app.get("/product",async(req,res)=>{
    const data=await Saari.find();
    res.render("product",{data:data});
})
app.post("/cart/:id",async(req,res)=>{
    // console.log(dd );
     let id=req.params.id;
    const data0=await Deepu.find();
    const data1=await Saari.find();
    const data2=await Tradinational.find();
    var data=[data0,data1,data2];
    var newdata=data[0];
    var newdata1=data[1];
    var newdata2=data[2];
    const matchdata=await Registration.find();
    
    if (abcd==true) {
    const Cart=mongoose.model(dd,deepakSchema);
    // const Cart=mongoose.model(dd,deepakSchema);
    const dataNames=mongoose.modelNames();
    dataNames.forEach(e=>{
        if(dd==e){
            // console.log("yeeee");
            newdata.forEach(element=>{
             if(element.id==id){
                let id=element.id;
                let imgsrc=element.imgsrc;
                let desc=element.desc;
                let price=element.price;
                 const newone=new Cart({id,imgsrc,price,desc});
                //  console.log(element);
                newone.save();
             }
            })
        }
    })
    newdata1.forEach(element=>{
        if(element.id==id){
           let id=element.id;
           let imgsrc=element.imgsrc;
           let desc=element.desc;
           let price=element.price;
           const newone=new Cart({id,imgsrc,price,desc});
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
           const newone=new Cart({id,imgsrc,price,desc});
           //  console.log(element);
           newone.save();
        }
       })
    }else{
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
               const newone=new Udmi({id,imgsrc,price,desc});
               //  console.log(element);
               newone.save();
            }
           })
    }
})
app.post("/remover/:id",async(req,res)=>{
    let id=req.params.id;
    if(abcd==true){
        const Cart=mongoose.model(dd,deepakSchema);
        const matchdata=await Cart.find();
        matchdata.forEach(e=>{
        //   console.log(e.id);
        if (e.id==id) {
            e.delete()
        }
        })

    }else{
        const matchdata=await Udmi.find();
        matchdata.forEach(e=>{
        //   console.log(e.id);
        if (e.id==id) {
            e.delete()
        }
        })
    }
})
app.post("/user",async(req,res)=>{
    const data=new  Registration(req.body);
    const email=data.email;
    const matchdata=await  Registration.find({email:email});
    const newdata=await Deepu.find();
    const listofData=await Udmi.find();
    // let number= listofData.length;
    abcd=true;
    //   console.log(matchdata);
    namefilter=data;
    let name=data.name;
    let namebig=name.charAt(0).toUpperCase()+name.slice(1);
    // let dd;
    dd=namebig;
    
    // const namebig= mongoose.model("Saari",deepakSchema); 
  if(matchdata.length==0){
      data.save();
      const Cart=mongoose.model(dd,deepakSchema);
      if (abcd==true) {
        const listof=await Cart.find();
        let number= listof.length;
        res.render("home",{data:newdata,list:listof,number,abcd});
    }
    //   res.render("home",{data:newdata,list:listofData,number,abcd});
    }
    else{
      res.send("email already axist");
  }
     // console.log(listofData);
     
})
app.post("/login",async(req,res)=>{
    const email=req.body.email;
    const password=req.body.password;
    const data=await Registration.findOne({email:email});
    if(password===data.password){
        const newdata=await Deepu.find();
        // console.log(data);
        const listofData=await Udmi.find();
        let newname=data.name;
        let namebig=newname.charAt(0).toUpperCase()+newname.slice(1);
        dd=namebig
        const Cart= mongoose.model(namebig,deepakSchema);
        // console.log(newname);
        let number= listofData.length;
         abcd=true;
        // console.log(listofData);
        if (abcd==true) {
            const listof=await Cart.find();
            let number= listof.length;
            res.render("home",{data:newdata,list:listof,number,abcd});
        }
        // res.render("home",{data:newdata,list:listofData,number,abcd});
        
    }else{
        res.send("Enter correct User Details")
    }
})
app.listen(port,()=>{
    console.log(`Connected on ${port}....`);
})
