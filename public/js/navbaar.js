// console.log(showhide);
var addArr=[];
 var prId;
var result="";
// console.log(number);
// let showincart=show[0].imgsrc[0];
if(showhide==true){
  document.getElementById("formsubmition").style.display="none"
}else{
  
}
function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
function myFunctionn() {
  // alert();
    var x = document.getElementById("myDIVV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }productimage[0].click(); 
    // }
    let timeout;
    function addtocart(id){
        // console.log(id);
        fetch(`/cart/${id}`,{method:"post"})
        timeout = setTimeout(alertFunc, 200);
        // var dd= window.location.reload();
        window.location.reload();
        } 
        function alertFunc() {
         window.location.reload();
        }
    function addtocartt(id){
        // console.log(id);
        // alert()
        fetch(`/cartt/${id}`,{method:"post"})
        // timeout = setTimeout(alertFunc, 200);
        // var dd= window.location.reload();
        // window.location.reload();
        } 
        // function alertFunc() {
        //  window.location.reload();
        // }
        // function showhidee(){
         
        // }