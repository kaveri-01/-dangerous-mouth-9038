const mobile_data =[
    {
        "id":1,
        "title":"Samsung Galaxy M32",
        "image_url":"https://m.media-amazon.com/images/I/81OC0ojxH6L._AC_UY327_FMwebp_QL65_.jpg",
        "price":"45,541",
        "button":"Add to cart",
        "button1":"Buy Now"

    },
    {
        "id":2,
        "title":"REdmi Note 12",
        "image_url":"https://m.media-amazon.com/images/I/81E8fhm0dcL._AC_UY327_FMwebp_QL65_.jpg",
        "price":"20,000",
        "button":"Add to cart",
        "button1":"Buy Now"
  
    },
    {
        "id":3,
        "title":"Redmi A1",
        "image_url":"https://m.media-amazon.com/images/I/81UT07JsBqL._AC_UY327_FMwebp_QL65_.jpg",
        "price":"₹7,500",
        "button":"Add to cart",
        "button1":"Buy Now"
       
       
    },
    {
        "id":4,
        "title":"Realme Narzo",
        "image_url":"https://m.media-amazon.com/images/I/81QqVNKWtML._AC_UY327_FMwebp_QL65_.jpg",
        "price":"1790",
        "button":"Add to cart",
        "button1":"Buy Now"
    

    },
    {
        "id":5,
        "title":"Redmi 10 Power",
        "image_url":"https://m.media-amazon.com/images/I/81OZGH4fZiL._AC_UY327_FMwebp_QL65_.jpg",
        "price":"1790",
        "button":"Add to cart",
        "button1":"Buy Now"
        
      

    },
    {
        "id":6,
        "title":"oppo",
        "image_url":"https://m.media-amazon.com/images/I/71KCwNV6MuL._AC_UY327_FMwebp_QL65_.jpg",
        "price":"29670",
        "button":"Add to cart",
        "button1":"Buy Now"
        

    },
    {
        "id":7,
        "title":"Redmi",
        "image_url":"https://m.media-amazon.com/images/I/71poFSdDs5S._AC_UY327_FMwebp_QL65_.jpg",
        "price":"29900",
        "button":"Add to cart",
        "button1":"Buy Now"
       
    },
    {
        "id":8,
        "title":"Realme",
        "image_url":"https://m.media-amazon.com/images/I/71k86pEH5LS._AC_UY327_FMwebp_QL65_.jpg",
        "price":"29900",
        "button":"Add to cart",
        "button1":"Buy Now"
        
       
    },
    {
        "id":9,
        "title":"Redmi",
        "image_url":"https://m.media-amazon.com/images/I/81Rn38ZRpoL._AC_UY327_FMwebp_QL65_.jpg",
        "price":"1890",
        "button":"Add to cart",
        "button1":"Buy Now"
        

        
    },

    {
        "id":10,
        "title":"Viv0",
        "image_url":"https://m.media-amazon.com/images/I/81vDZyJQ-4L._AC_UY327_FMwebp_QL65_.jpg",
        "price":"4490",
        "button":"Add to cart",
        "button1":"Buy Now"
        

    },
    {
        "id":11,
        "title":"oppo 10",
        "image_url":"https://m.media-amazon.com/images/I/71yTvU9VgdL._AC_UY327_FMwebp_QL65_.jpg",
        "price":"2490",
        "button":"Add to cart",
        "button1":"Buy Now"
       

    },
    {
        "id":12,
        "title":"Vivoy53",
        "image_url":"https://m.media-amazon.com/images/I/91RzOl2jz-L._AC_UY327_FMwebp_QL65_.jpg",
        "price":"1490",
        "button":"Add to cart",
        "button1":"Buy Now"
        

    },
    {
        "id":13,
        "title":"Xiomi f1",
        "image_url":"https://m.media-amazon.com/images/I/91RzOl2jz-L._AC_UY327_FMwebp_QL65_.jpg",
        "price":"1190",
        "button":"Add to cart",
        "button1":"Buy Now"
       

    },
    {
        "id":14,
        "title":"iphone10",
        "image_url":"https://m.media-amazon.com/images/I/7135dx-aayL._AC_UY327_FMwebp_QL65_.jpg",
        "price":"15590",
        "button":"Add to cart",
        "button1":"Buy Now"
      
    }
]

const care_data= async()=>{
    // let ans= await fetch("http://localhost:3000/care")
    // let cate= await ans.json()
    // append_data(cate)
    try{
        let ans= await fetch("http://localhost:3000/mobile_data")
    let cate= await ans.json()
    append_data(cate)
    }
    catch(err){
append_data(mobile_data)
    }
}
care_data()
//let cartArr = JSON.parse(localStorage.getItem('cart')) || []

let main_container = document.getElementById("container");

const append_data=(cate)=>{

cate.forEach((el)=>{
    let card=document.createElement("div");
    let productImg=document.createElement("img");
    productImg.src=el.image_url;
    let title=document.createElement("h1")
    title.innerText=el.title;
//    productImg.addEventListener("click", function(){
//     addfun(el)
//    })
   
    let price=document.createElement("h3");
    price.innerText= "₹" + el.price;
    let button = document.createElement("button");
    button.innerHTML=el.button;
    button.addEventListener("click", function(){
        page(el)
    })

    card.append(productImg,price,title,button);
    main_container.append(card);

})
}

function page(el){
    localStorage.setItem("selected_item",JSON.stringify(el))
    window.location.href="bag.html"
    alert("Product added to cart Successfully !") 

}