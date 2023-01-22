const appliances_data=[
    
    {
        "id":"1",
        "title":"Sofa set",
        "image_url":"https://teja8.kuikr.com/i4/20230121/5-Seater---Cushioned-Sofa-Set-from-Home-Town-VB201705171774173-ak_LWBP36681210-1674291940.webp",
        "price":"40000",
        "button":"Add to cart",
        "button1":"Buy Now"
    },
    {
        "id":"2",
        "title":"5seater sofa",
        "image_url":"https://teja8.kuikr.com/i4/20230120/Sofas-Rs-7-499-only-with-3yrs-wrnty-Direct-factory--pick-any-sofa-3-1-1-cash-on-delivery-available-VB201705171774173-ak_WBP413858073-1674200399.webp",
        "price":"18,000",
        "button":"Add to cart",
        "button1":"Buy Now"
    },
    {
        "id":"3",
        "title":"big Sofa",
        "image_url":"https://teja8.kuikr.com/i5/20230104/2-Bhk-furniture-VB201705171774173-ak_LWBP1211980900-1672850937.webp",
        "price":"50,000",
        "button":"Add to cart",
        "button1":"Buy Now"
    },
    {
        "id":"4",
        "title":"Brown sofa",
        "image_url":"https://teja9.kuikr.com/i4/20230121/Used-brown-durable-leather-sofa-set-3-seat---2-buckets--VB201705171774173-ak_LWBP912673410-1674289803_lg.webp",
        "price":"14000",
        "button":"Add to cart",
        "button1":"Buy Now"
    },
    {
        "id":"5",
        "title":"Double bed",
        "image_url":"https://rukminim1.flixcart.com/image/612/612/xif0q/bed/p/0/g/single-216-7-na-no-102-particle-board-no-49-bed-1-flipkart-original-imagh92egucznkqk.jpeg?q=70",
        "price":"20,000",
        "button":"Add to cart",
        "button1":"Buy Now"
    },
    {
        "id":"6",
        "title":"single bed",
        "image_url":"https://rukminim1.flixcart.com/image/612/612/xif0q/bed/0/r/o/queen-na-no-teak-sagun-no-sf-bs-414-sekar-lifestyle-brown-original-imagk3cqgtfhk3bp.jpeg?q=70",
        "price":"7500",
        "button":"Add to cart",
        "button1":"Buy Now"
    },
    {
        "id":"7",
        "title":"Brown Divan ",
        "image_url":"https://teja8.kuikr.com/i4/20230103/Brown-and-beige-diwan-VB201705171774173-ak_LWBP589586082-1672730022.webp",
        "price":"25,000",
        "button":"Add to cart",
        "button1":"Buy Now"
    },
    {
        "id":"8",
        "title":"bed",
        "image_url":"https://rukminim1.flixcart.com/image/612/612/xif0q/bed/g/f/k/king-na-no-teak-sagun-no-sf-bs-412-sekar-lifestyle-chocolate-original-imagk3cq7htunzbe.jpeg?q=70",
        "price":"30,000",
        "button":"Add to cart",
        "button1":"Buy Now"
    },
    {
        "id":"9",
        "title":"Office Chair9",
        "image_url":"https://rukminim1.flixcart.com/image/612/612/xif0q/office-study-chair/k/v/e/1-pp-polypropylene-40-64-ace-black-mbtc-101-6-original-imagjpyz8phcvtys.jpeg?q=70",
        "price":"3000",
        "button":"Add to cart",
        "button1":"Buy Now"
    },
    {
        "id":"10",
        "title":"visitor Chair",
        "image_url":"https://rukminim1.flixcart.com/image/612/612/kqidx8w0/office-study-chair/f/i/0/iron-1-chair-office-visitor-chair-guru-original-imag4gyhgxcsgm8j.jpeg?q=70",
        "price":"3500",
        "button":"Add to cart",
        "button1":"Buy Now"
    },
    {
        "id":"11",
        "title":"Adjustable Chair",
        "image_url":"https://rukminim1.flixcart.com/image/612/612/xif0q/office-study-chair/y/t/r/1-leatherette-45-72-ofd14-01299-00-thehomeoffice-134-62-original-imaghfezancex2su.jpeg?q=70",
        "price":"4000",
        "button":"Add to cart",
        "button1":"Buy Now"
    },
    {
        "id":"12",
        "title":"Leathrlet Chair",
        "image_url":"https://rukminim1.flixcart.com/image/612/612/xif0q/office-study-chair/v/t/a/iron-comfortable-chair-office-home-visitor-study-student-chair-original-imagjaf42fenahh5.jpeg?q=70",
        "price":"2000"
    }
]
    

    const appl_data= async()=>{
    // let ans= await fetch("http://localhost:3000/care")
    // let cate= await ans.json()
    // append_data(cate)
    try{
        let ans= await fetch("http://localhost:3000/applinces_data")
    let cate= await ans.json()
    append_data(cate)
    }
    catch(err){
append_data(appliances_data)
    }
}
appl_data()
//let cartArr = JSON.parse(localStorage.getItem('cart')) || []

let main_container = document.getElementById("appliances");

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