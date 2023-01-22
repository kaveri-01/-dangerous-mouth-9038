let selectedTest = JSON.parse(localStorage.getItem("selected_item")) || {};
let cartImgDiv = document.getElementById("cart-image");
let productImg=document.createElement("img");
    productImg.src=selectedTest.image_url;

//     productImg.addEventListener("click", function(){
//     addfun(selectedTest)
//    })
    let title=document.createElement("h1")
    title.innerText=selectedTest.title;
    let price=document.createElement("h3");
    price.innerText= "₹" + selectedTest.price;
    let button1=document.createElement("button");
    button1.innerHTML=selectedTest.button1;
    button1.addEventListener("click", function(){
    addfun(selectedTest)
   })
    cartImgDiv.append(productImg,price,title,button1);

    function addfun(selectedTest){
    localStorage.setItem("selected_item",JSON.stringify(selectedTest))
    window.location.href="cart.html"
    
}