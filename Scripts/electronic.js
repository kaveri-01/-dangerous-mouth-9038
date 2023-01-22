const electron_data=[
    {
        "id":"1",
        "title":"Lenovo core 3",
        "image_url":"https://rukminim1.flixcart.com/image/312/312/xif0q/computer/p/s/r/15iml05-thin-and-light-laptop-lenovo-original-imaghnzgqgrguusr.jpeg?q=70",
        "price":"29,990",
        "button":"Add to cart",
        "button1":"Buy Now"
    },
    
    {
        "id":"2",
        "title":"Hp core 5",
        "image_url":"https://rukminim1.flixcart.com/image/312/312/xif0q/computer/5/6/i/-original-imaggshd5zgfe8ev.jpeg?q=70",
        "price":"56,899",
        "button":"Add to cart",
        "button1":"Buy Now"
    },
    
    {
        "id":"3",
        "title":"Asus Vivobook",
        "image_url":"https://rukminim1.flixcart.com/image/312/312/xif0q/computer/o/t/h/-original-imagg6t9pauha4t7.jpeg?q=70",
        "price":"34,000",
        "button":"Add to cart",
        "button1":"Buy Now"
    },
    
    {
        "id":"4",
        "title":"Dell core i3",
        "image_url":"https://rukminim1.flixcart.com/image/312/312/l58iaa80/computer/q/s/w/inspiron-3511-laptop-dell-original-imagfycrbnpu2nbh.jpeg?q=70",
        "price":"41,000",
        "button":"Add to cart",
        "button1":"Buy Now"
    },
    
    {
        "id":"5",
        "title":"Mi 5A 80 cm ",
        "image_url":"https://rukminim1.flixcart.com/image/312/312/l2ghgnk0/television/u/a/c/l32m7-5ain-mi-original-imagdsdwqf6bkmkz.jpeg?q=70",
        "price":"13,000",
        "button":"Add to cart",
        "button1":"Buy Now"
    },
    
    {
        "id":"6",
        "title":"SAMSUNG 80 cm",
        "image_url":"https://rukminim1.flixcart.com/image/416/416/l2ghgnk0/television/u/a/c/l32m7-5ain-mi-original-imagdsdwqf6bkmkz.jpeg?q=70",
        "price":"14000",
        "button":"Add to cart",
        "button1":"Buy Now"
    },
    
    {
        "id":"7",
        "title":"Realme",
        "image_url":"https://rukminim1.flixcart.com/image/312/312/xif0q/television/h/a/r/-original-imaghgphdj9fsvzt.jpeg?q=70",
        "price":"17,000",
        "button":"Add to cart",
        "button1":"Buy Now"
    },
    
    {
        "id":"8",
        "title":"",
        "image_url":"https://rukminim1.flixcart.com/image/312/312/kph8h3k0/television/k/9/h/40y1-40fa1a00-oneplus-original-imag3p45tdgyvpqa.jpeg?q=70",
        "price":"20,000",
        "button":"Add to cart",
        "button1":"Buy Now"
    },
    
    {
        "id":"9",
        "title":"Intex IT-2616 BT 55",
        "image_url":"https://rukminim1.flixcart.com/image/612/612/k5h2jrk0/speaker/home-theatre/c/w/n/intex-it-2616-tufb-os-original-imafz5g7njyhb2vg.jpeg?q=70",
        "price":"2,000",
        "button":"Add to cart",
        "button1":"Buy Now"
    },
    
    {
        "id":"10",
        "title":"etmax Nano",
        "image_url":"https://rukminim1.flixcart.com/image/612/612/xif0q/speaker/v/z/m/-original-imagkqhkgxjtbgb3.jpeg?q=70",
        "price":"1099",
        "button":"Add to cart",
        "button1":"Buy Now",
        "button":"Add to cart",
        "button1":"Buy Now"
    },
    
    {
        "id":"11",
        "title":"ZEBRONICS BT440",
        "image_url":"https://rukminim1.flixcart.com/image/612/612/jydaqa80/speaker/home-audio-speaker/n/s/c/zebronics-bt4440rucf-original-imaeafwzccgtczx8.jpeg?q=70",
        "price":"3,299",
        "button":"Add to cart",
        "button1":"Buy Now"
    },
    
    {
        "id":"12",
        "title":"",
        "image_url":"https://rukminim1.flixcart.com/image/612/612/l1zc6fk0/speaker/home-theatre/l/y/g/v7171-vox-original-imagdfey4y3ymgj3.jpeg?q=70",
        "price":"2499",
        "button":"Add to cart",
        "button1":"Buy Now"
    } 
]
    


    const electronic_data= async()=>{
    // let ans= await fetch("http://localhost:3000/care")
    // let cate= await ans.json()
    // append_data(cate)
    try{
        let ans= await fetch("http://localhost:3000/electron_data")
    let cate= await ans.json()
    append_data(cate)
    }
    catch(err){
append_data(electron_data)
    }
}
electronic_data()
//let cartArr = JSON.parse(localStorage.getItem('cart')) || []

let main_container = document.getElementById("electronic");

const append_data=(cate)=>{

cate.forEach((el)=>{
    let card=document.createElement("div");
    let productImg=document.createElement("img");
    productImg.src=el.image_url;
    let title=document.createElement("h2")
    title.innerText=el.title;
//    productImg.addEventListener("click", function(){
//     addfun(el)
//    })
   
    let price=document.createElement("p");
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