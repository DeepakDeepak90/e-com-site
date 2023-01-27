const productcontainer=[...document.querySelectorAll(".product-container")];
const nextbtn=[...document.querySelectorAll(".next-btn")];
const prebtn=[...document.querySelectorAll(".pre-btn")];
var prData;
productcontainer.forEach((item,i)=>{
let containerdimantion=item.getBoundingClientRect();
let containerWidth=containerdimantion.width;

nextbtn[i].addEventListener("click",()=>{
    item.scrollLeft +=containerWidth;
})
prebtn[i].addEventListener("click",()=>{
    item.scrollLeft -=containerWidth;
})
})
// const createcards=()=>{
//     let cards=document.querySelector(".product-container");
//     let uses='';
// fetch("/api.json")
// .then(response => response.json())
// .then(data => {
// prData = data;
// data[1].forEach(function(number) {
// // console.log(number);
//     uses+=`   <div class="product-card">
//     <div class="product-image">
//         <span class="discount-tag">
//             50% Off
//         </span>
//         <img onclick="singleProduct(${number.id})" src="${number.imgsrc[0]}" class="product-thumb" alt="">
//         <button class="wish-list"><img src="/images/heart.png" style="width: 14px" alt=""> Add To
//             Wishlist</button>
    
//     </div>
//     <div class="product-info">
//         <h2 class="brand">BRAND</h2>
//         <p class="discription">A Short Line About This Drees</p>
//         <h2 class="price">${number.price} <div class="actual-price">Rs 1600/-</h2>
//     </div>
//     </div>`;
// cards.innerHTML=uses;
// });
// })
// }

// createcards();


function singleProduct(id){
    window.location.href = `/product/${id}`;
}   