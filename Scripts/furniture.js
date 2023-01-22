const furniture_data=[
    {
        "id":"1",
        "title":"dwarakaplywood 01 Interior Door",
        "image_url":"https://rukminim1.flixcart.com/image/612/612/xif0q/interior-door/b/1/y/01-dwarakaplywood-187-5-original-imagjfq2xnw754h9.jpeg?q=70",
        "price":"3001",
        "button":"Add to cart",
        "button1":"Buy Now"
    },

    {
        "id":"2",
        "title":"DD2",
        "image_url":"https://rukminim1.flixcart.com/image/612/612/l41n2q80/interior-door/x/r/s/lamination001-a-to-z-0-80-original-imagff5zcgwyrjwm.jpeg?q=70",
        "price":"4150",
        "button":"Add to cart",
        "button1":"Buy Now"
    },

    {
        "id":"3",
        "title":"GOOD DOOR",
        "image_url":"https://rukminim1.flixcart.com/image/612/612/xif0q/interior-door/w/j/g/radhakrishna1-goraiwoods-205-original-imaghzkdy7rnuexu.jpeg?q=70",
        "price":"3000",
        "button":"Add to cart",
        "button1":"Buy Now"
    },

    {
        "id":"4",
        "title":"candes cooler",
        "image_url":"https://rukminim1.flixcart.com/image/612/612/l4bn5ow0/air-cooler/4/j/t/130-130-icecool-35-candes-original-imagf9y9sfemdmz9.jpeg?q=70",
        "price":"5224",
        "button":"Add to cart",
        "button1":"Buy Now"
    },

    {
        "id":"5",
        "title":"Dessert Air cooler",
        "image_url":"https://rukminim1.flixcart.com/image/612/612/xif0q/air-cooler/w/a/b/-original-imaghnyqahpscfmk.jpeg?q=70",
        "price":"10,399",
        "button":"Add to cart",
        "button1":"Buy Now"
    },

    {
        "id":"6",
        "title":"7litr cooler",
        "image_url":"https://rukminim1.flixcart.com/image/612/612/l05lx8w0/air-cooler/x/k/n/-original-imagcy8qyyy5gwhx.jpeg?q=70",
        "price":"15,000",
        "button":"Add to cart",
        "button1":"Buy Now"
    },

    {
        "id":"7",
        "title":"3 burner straighner",
        "image_url":"https://rukminim1.flixcart.com/image/612/612/kyeqjrk0/gas-stove/x/i/6/3-3-5-hf3bslb-hindflame-77-original-imagangyhmzav6yx.jpeg?q=70",
        "price":"1,999",
        "button":"Add to cart",
        "button1":"Buy Now"
    },

    {
        "id":"8",
        "title":"2 burner steel",
        "image_url":"https://rukminim1.flixcart.com/image/612/612/l1b1oy80/gas-stove/i/a/5/2-4-5-2b-ultimate-ss-bb-suryaflame-11-original-imagcweba6yguh2g.jpeg?q=70",
        "price":"15,00"
    },

    {
        "id":"9",
        "title":"4 burner",
        "image_url":"https://rukminim1.flixcart.com/image/612/612/l2jcccw0/gas-stove/f/f/n/4-8-4-burner-tornado-delux-design-sigri-wala-53-original-imagduptgyzwqzhp.jpeg?q=70",
        "price":"23,00",
        "button":"Add to cart",
        "button1":"Buy Now"
    },

    {
        "id":"10",
        "title":"Wet & Dry vaccum cleaner",
        "image_url":"https://rukminim1.flixcart.com/image/312/312/k7285u80/vacuum-cleaner/h/j/f/agaro-rapid-1000-watt-10-litre-wet-dry-vacuum-cleaner-with-original-imafpd9kadgsmtds.jpeg?q=70",
        "price":"23,200",
        "button":"Add to cart",
        "button1":"Buy Now"
    },

    {
        "id":"11",
        "title":"cordless vaccum cleaner",
        "image_url":"https://rukminim1.flixcart.com/image/312/312/k0vbgy80/vacuum-cleaner/h/e/6/eureka-forbes-trendy-zip-original-imafkka7zzg8qr6w.jpeg?q=70",
        "price":"20,111",
        "button":"Add to cart",
        "button1":"Buy Now"
    },

    {
        "id":"12",
        "title":"quick clean & dry",
        "image_url":"https://rukminim1.flixcart.com/image/312/312/xif0q/vacuum-cleaner/c/o/r/-original-imaghh9q3q7hy5sf.jpeg?q=70",
        "price":"3,499",
        "button":"Add to cart",
        "button1":"Buy Now"
    }
]

    const furnit_data= async()=>{
    // let ans= await fetch("http://localhost:3000/care")
    // let cate= await ans.json()
    // append_data(cate)
    try{
        let ans= await fetch("http://localhost:3000/furniture_data")
    let cate= await ans.json()
    append_data(cate)
    }
    catch(err){
append_data(furniture_data)
    }
}
furnit_data()
//let cartArr = JSON.parse(localStorage.getItem('cart')) || []

let main_container = document.getElementById("furniture");

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
// function addfun(el){
//     localStorage.setItem("selected_item",JSON.stringify(el))
//     window.location.href="cart.html"
    
// }
function page(el){
    localStorage.setItem("selected_item",JSON.stringify(el))
    window.location.href="bag.html"
    alert("Product added to cart Successfully !") 

}