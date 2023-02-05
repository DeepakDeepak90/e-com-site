// console.log(a);
var addArr=[];
 var prId;
var result="";
const productimage=document.querySelectorAll(".product-images img");
const productImageSlide=document.querySelector(".image-slider");
const addinme=document.querySelector(".cart-wrapper")
let activeImageSlide=0;

productimage.forEach((item,i)=>{
    item.addEventListener("click",()=>{
        productimage[activeImageSlide].classList.remove("active");
        item.classList.add("active");
        productImageSlide.style.backgroundImage=`url("${item.src}")`;
        activeImageSlide=i;
    })
})


// Toggle size Button
var dataful;
const sizeBtn=document.querySelectorAll(".size-radio-btn");
let checkbtn=0;
sizeBtn.forEach((item,i)=>{
    item.addEventListener("click",()=>{
        sizeBtn[checkbtn].classList.remove("check");
        item.classList.add("check");
        checkbtn=i;
    })
})

// fetch("/api.json")  
// .then(response => response.json())
// .then(data =>{
//     let fetch=data[0][0];
    
//     // console.log(fetch);
//      productimage.forEach((img,i)=>{
//         if(fetch.imgsrc[0]){
//             img.src=fetch.imgsrc[i];
//             console.log(fetch.imgsrc[i]);
//         }
//      })
//     })
var allData;
// async function clickedPr(){
// //     var prData="";
// //     await fetch("/api.json")  
// // .then(response => response.json())
// // .then(data =>{
// //     prData = data[0];
// //     allData = data;
// // })
// const clickid=document.querySelector(".btn-add");
// // console.log(a);
// // allData.forEach(e=>{
// //     e.forEach(elem=>{
// //         if(prId == elem.id){
// //             elem.id=prId;        
// //             result = elem;

//             clickid.addEventListener("click",async(e)=>{
//                 clickid.innerHTML="Item Added"
//                 let showincart=a.imgsrc[0];
//                   addArr.push(a);  
//               let viewInCart=`
//               <div class="cart-item">
              
//                        <img src="${showincart}" class="cart-img"> 
//                        <div class="details">
//                            <h3>Item Name</h3>
//                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//                             <span class="quantity">Quantity: 1</span>
//                                <span class="price">Price: ${a.price}</span>
//                            </p>
//                        </div>
//                        <div class="cancel"><button onclick="deletee()" class="cross-b"><img src="../images/cros.png" class="cros" alt=""></button></div>
//                     </div>
//             <hr>
//                 `
//                 addinme.innerHTML +=viewInCart;
                
//                             })
//         // }
//     // })
// // })

// // document.getElementById("prImg").src = result.imgsrc[0];
// // document.getElementById("prImgg").src = result.imgsrc[1];
// // document.getElementById("prImggg").src = result.imgsrc[2];
// // document.getElementById("prImgggg").src = result.imgsrc[3];
// productimage[0].click(); 
// }
// function addtocart(id){
//     console.log(id);
//     fetch(`/cart/${id}`,{method:"post"})
//     }
productimage[0].click(); 
