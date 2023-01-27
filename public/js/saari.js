   
function deepak(){
    show.forEach(e=>{
        var id=e.id
                    let showincart=e.imgsrc[0];
                //       addArr.push(a);  
                  let viewInCart=`
                  <div class="cart-item">
                  
                           <img src="${showincart}" class="cart-img"> 
                           <div class="details">
                               <h3>Item Name</h3>
                               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                <span class="quantity">Quantity: 1</span>
                                   <span class="price">Price: ${e.price}</span>
                               </p>
                           </div>
                           <div class="cancel"><button class="cross-b" onclick="idremove(${id})"><img src="../images/cros.png" class="cros" alt=""></button></div>
                        </div>
                <hr>
                    `
                    addinme.innerHTML +=viewInCart;
                    
                                })
                                productimage[0].click();
    }
function idremove(id){
// console.log(id);
fetch(`/remover/${id}`,{method:"post"});
window.location.reload();
}
