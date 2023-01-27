var addArr=[];
 var prId;
var result="";
// console.log(number);
// let showincart=show[0].imgsrc[0];

const createnav=()=>{
  
    let nav=document.querySelector(".navbar");
    nav.innerHTML=`
    <div class="navbaar">
    <ul class="navbaar-li">
    <div class="logo">
    <li class="list" ><img src="/images/logo.png" id="logo" alt=""></li>
</div>
<input type="text" class="nav-inp"><button class="nav-btn">Search</button>
<a href="/user"><img src="/images/user.png" class="nav-i" alt=""></li></a>
<div class="toggle-cart">

<header class="my-cart">
<div class="cart-box">
  <div class="cart-icon">
   <img src="/images/crt.png" class="crt-logo" alt="" onclick="myFunction()"><p class="cart-counting">${number}</p>
  </div>
  </div>
  <div class="whole-cart-window " id="myDIV">
  <div class="cart-wrapper-tot">
  <div class="cart-wrapper">
    
  </div>
     
        <a href="/checkout"><div class="checkout">Checkout</div></a>
        <div class="view-cart">View Cart</div>
        </div>
  </div>
</header>

</div>
</ul>
</div><hr>
<div class="nav-two">
    <a href="/" class="list-a"><li class="listt">Home</li></a>
    <a href="/" class="list-a"><li class="listt">Kurti</li></a>
    <a href="/tradinational" class="list-a"><li class="listt">Tradinational</li></a>
    <a href="/saari" class="list-a"> <li class="listt">Saari</li></a>
    <a href="/contact" class="list-a"> <li class="listt">Contact</li></a>
    </div>
<div class="hidding">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, perspiciatis saepe, libero, iste unde nobis quia culpa quasi harum dolores ut soluta! Laborum neque dolorem, libero deleniti vel iusto tempora. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ipsum maiores et rem aliquam. Delectus recusandae modi maxime quis omnis, iure ipsam ad dolore aspernatur laudantium veniam ducimus repellendus necessitatibus minima excepturi, accusamus nihil? Quaerat fuga dolores quam itaque quis quae possimus mollitia placeat totam! Eum ab beatae, perferendis consectetur excepturi tenetur ullam. Illo perspiciatis, sapiente laborum praesentium voluptates beatae provident vel laudantium id eius suscipit possimus consectetur asperiores ipsam deserunt neque dolores atque obcaecati magnam ex, nulla cum? Vel possimus, ipsum qui corporis necessitatibus nesciunt maxime fugiat, cupiditate doloremque deserunt a iure vitae repellendus tenetur! Odio provident doloremque repellendus!</div>
<div class="btn">
<button class="shop-now">Shop Now</button>
</div>    
`;
}
createnav();
// console.log(a);
function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  // console.log(show);
  //  function clickedPr(){
  //   //     var prData="";
  //   //     await fetch("/api.json")  
  //   // .then(response => response.json())
  //   // .then(data =>{
  //   //     prData = data[0];
  //   //     allData = data;
  //   // })
    
  //   // const clickid=document.querySelector(".btn-add");
  //   // console.log(a);
  //   show.forEach(e=>{
  //   //     e.forEach(elem=>{
  //   //         if(prId == elem.id){
  //   //             elem.id=prId;        
  //   //             result = elem;
    
  //               // clickid.addEventListener("click",async(e)=>{
  //                   // clickid.innerHTML="Item Added"
  //                   let showincart=e.imgsrc[0];
  //               //       addArr.push(a);  
  //                 let viewInCart=`
  //                 <div class="cart-item">
                  
  //                          <img src="${showincart}" class="cart-img"> 
  //                          <div class="details">
  //                              <h3>Item Name</h3>
  //                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  //                               <span class="quantity">Quantity: 1</span>
  //                                  <span class="price">Price: ${e.price}</span>
  //                              </p>
  //                          </div>
  //                          <div class="cancel"><button onclick="deletee()" class="cross-b"><img src="../images/cros.png" class="cros" alt=""></button></div>
  //                       </div>
  //               <hr>
  //                   `
  //                   addinme.innerHTML +=viewInCart;
                    
  //                               })
            // }
        // })
    // })
    
    // document.getElementById("prImg").src = result.imgsrc[0];
    // document.getElementById("prImgg").src = result.imgsrc[1];
    // document.getElementById("prImggg").src = result.imgsrc[2];
    // document.getElementById("prImgggg").src = result.imgsrc[3];
    productimage[0].click(); 
    // }
    function addtocart(id){
        console.log(id);
        fetch(`/cart/${id}`,{method:"post"})
        window.location.reload()
        }
    