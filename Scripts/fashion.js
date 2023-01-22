const fashion_data=[
    {
        "id":"1",
        "title":"alloy diamond jwellery",
        "image_url":"https://rukminim1.flixcart.com/image/612/612/kqco5u80/jewellery-set/g/c/h/780-r-a-enterprises-original-imag4dyzceaqhkhp.jpeg?q=70",
        "price":"3377",
        "button":"Add to cart",
        "button1":"Buy Now"
    },

    {
        "id":"2",
        "title":"bracelet",
        "image_url":"https://rukminim1.flixcart.com/image/612/612/k4px6kw0/bangle-bracelet-armlet/g/h/w/2-6-1-br-pr-20049-priyaasi-original-imafnk69mjvxgsrm.jpeg?q=70",
        "price":"899",
        "button":"Add to cart",
        "button1":"Buy Now"
    },

    {
        "id":"3",
        "title":"",
        "image_url":"https://rukminim1.flixcart.com/image/612/612/xif0q/bangle-bracelet-armlet/i/o/q/2-6-2-6-na-502-2-6-nagneshi-art-original-imagg6uctygvdse3.jpeg?q=70",
        "price":"253",
        "button":"Add to cart",
        "button1":"Buy Now"
    },

    {
        "id":"4",
        "title":"Black heels",
        "image_url":"https://rukminim1.flixcart.com/image/612/612/xif0q/sandal/t/c/t/ft-501-fashion-tails-black-original-imafwyfy9sznkdxq-bb.jpeg?q=70",
        "price":"269",
        "button":"Add to cart",
        "button1":"Buy Now"
    },

    {
        "id":"5",
        "title":"Multicolor heel",
        "image_url":"https://rukminim1.flixcart.com/image/612/612/l26hdow0/sandal/o/i/5/2-rainbow-transparent-strap-high-pencil-heel-sandals-for-women-original-imagdhyyfzyxw4tr.jpeg?q=70",
        "price":"500",
        "button":"Add to cart",
        "button1":"Buy Now"
    },

    {
        "id":"6",
        "title":"Maybelin kit",
        "image_url":"https://rukminim1.flixcart.com/image/612/612/krce64w0/kajal/o/i/z/139-call-me-colossal-kit-colossal-waterproof-mascara-colossal-original-imag55g5f2szhhhp.jpeg?q=70",
        "price":"655",
        "button":"Add to cart",
        "button1":"Buy Now"
    },

    {
        "id":"7",
        "title":"Lip Balm",
        "image_url":"https://rukminim1.flixcart.com/image/612/612/kebpqq80/lip-balm/g/w/c/39-8-baby-lips-pink-lolita-baby-lips-cherry-kiss-maybelline-new-original-imafvf4krxdekxhq.jpeg?q=70",
        "price":"245",
        "button":"Add to cart",
        "button1":"Buy Now"
    },

    {
        "id":"8",
        "title":"CC cream",
        "image_url":"https://rukminim1.flixcart.com/image/612/612/khqllzk0/foundation/9/m/u/30-9-to-5-complexion-care-face-cream-beige-lakme-original-imafxzwcqahhn9rc.jpeg?q=70",
        "price":"265",
        "button":"Add to cart",
        "button1":"Buy Now"
    },

    {
        "id":"9",
        "title":"Lipstic",
        "image_url":"https://rukminim1.flixcart.com/image/612/612/kwzap3k0/lipstick/j/t/n/16-non-transfer-insta-beauty-waterproof-longlast-sensational-original-imag9jby47tukyz5.jpeg?q=70",
        "price":"400",
        "button":"Add to cart",
        "button1":"Buy Now"
    },

    {
        "id":"10",
        "title":"one piece",
        "image_url":"https://rukminim1.flixcart.com/image/612/612/xif0q/dress/a/e/i/s-cl-wm-u0534-addyvero-original-imagj2m8cefannh9.jpeg?q=70",
        "price":"499",
        "button":"Add to cart",
        "button1":"Buy Now"
    },

    {
        "id":"11",
        "title":"Black bodycone Dress",
        "image_url":"https://rukminim1.flixcart.com/image/612/612/xif0q/dress/j/j/o/xl-271tk6074-selvia-original-imag9ntthzzzdgaj-bb.jpeg?q=70",
        "price":"700",
        "button":"Add to cart",
        "button1":"Buy Now"
    },

    {
        "id":"12",
        "title":"top skirt",
        "image_url":"https://rukminim1.flixcart.com/image/612/612/xif0q/top/b/0/b/xs-4204-sheetal-associates-original-imagjtfttuykbfet.jpeg?q=70",
        "price":"300",
        "button":"Add to cart",
        "button1":"Buy Now"
    },


   
    
]


const fashn_data= async()=>{
    // let ans= await fetch("http://localhost:3000/care")
    // let cate= await ans.json()
    // append_data(cate)
    try{
        let ans= await fetch("http://localhost:3000/fashion_data")
    let cate= await ans.json()
    append_data(cate)
    }
    catch(err){
append_data(fashion_data)
    }
}
fashn_data()
let main_container = document.getElementById("fashion");

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