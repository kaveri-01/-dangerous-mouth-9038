const Kids_data=[
  
    {
        "id":"1",
        "title":"dummy house",
        "image_url":"https://rukminim1.flixcart.com/image/612/612/ktizdzk0/outdoor-toy/0/n/r/3-star-homes-jumbo-size-extremely-light-weight-kids-play-tent-original-imag6ugbazfsp8rn.jpeg?q=70",
        "price":"1500",
        "button":"Add to cart",
        "button1":"Buy Now"
    },
  
    {
        "id":"2",
        "title":"4pack Truck car",
        "image_url":"https://rukminim1.flixcart.com/image/612/612/khuvxjk0-0/vehicle-pull-along/x/w/y/friction-powered-mini-monster-cars-for-kids-with-big-rubber-original-imafxruqgz7rw4xw.jpeg?q=70",
        "price":"295",
        "button":"Add to cart",
        "button1":"Buy Now"
    },
  
    {
        "id":"3",
        "title":"Children Tracing",
        "image_url":"https://rukminim1.flixcart.com/image/612/612/ky1vl3k0/learning-toy/o/j/2/magic-calligraphy-copybook-set-practical-reusable-writing-tool-original-imagadfzqh6yfcdc.jpeg?q=70",
        "price":"148",
        "button":"Add to cart",
        "button1":"Buy Now"
    },
  
    {
        "id":"4",
        "title":"Black orange kids cycle",
        "image_url":"https://rukminim1.flixcart.com/image/612/612/l4vnbm80/cycle/c/j/e/-original-imagfzgskuyu4x6a.jpeg?q=70",
        "price":"4997",
        "button":"Add to cart",
        "button1":"Buy Now"
    },
  
    {
        "id":"5",
        "title":"vesco kiddo kids cycle",
        "image_url":"https://rukminim1.flixcart.com/image/612/612/l5ld8y80/cycle/h/b/a/kiddo-14-cycle-for-kids-bicycles-age-3-to-5-year-boys-girls-14-9-original-imagg8brhwnzghmt.jpeg?q=70",
        "price":"3295",
        "button":"Add to cart",
        "button1":"Buy Now"
    },
  
    {
        "id":"6",
        "title":"Girls kid cycle",
        "image_url":"https://rukminim1.flixcart.com/image/612/612/xif0q/cycle/p/5/q/girls-kid-cycle-street-bike-14-9-vesco-46-single-speed-original-imagh4jqgvbr24ff.jpeg?q=70",
        "price":"3999",
        "button":"Add to cart",
        "button1":"Buy Now"
    },
  
    {
        "id":"7",
        "title":"BSA Champ",
        "image_url":"https://rukminim1.flixcart.com/image/612/612/l5ld8y80/cycle/f/t/v/kiddo-14-cycle-for-kids-bicycles-age-3-to-5-year-boys-girls-14-t-original-imagg8dtekumswpj.jpeg?q=70",
        "price":"3499",
        "button":"Add to cart",
        "button1":"Buy Now"
    },
  
    {
        "id":"8",
        "title":"magic practice copybook",
        "image_url":"https://rukminim1.flixcart.com/image/612/612/xif0q/regionalbooks/j/e/e/khargadham-magic-practice-copybook-for-kids-handwriting-practice-original-imagkztkkgrhjvzr.jpeg?q=70",
        "price":"179",
        "button":"Add to cart",
        "button1":"Buy Now"
    },
  
    {
        "id":"9",
        "title":"colouring books",
        "image_url":"https://rukminim1.flixcart.com/image/612/612/xif0q/regionalbooks/i/s/3/blossom-colouring-books-for-3-to-7-year-old-kids-crayon-and-original-imagjhjnsfuu4asm.jpeg?q=70",
        "price":"380",
        "button":"Add to cart",
        "button1":"Buy Now"
    },
  
    {
        "id":"10",
        "title":"Red Teddy",
        "image_url":"https://rukminim1.flixcart.com/image/612/612/kfsl18w0/stuffed-toy/t/z/z/3-feet-soft-spongy-teddy-gift-some-one-special-gift-91-cm-91-original-imafw69pds82hmh6.jpeg?q=70",
        "price":"279",
        "button":"Add to cart",
        "button1":"Buy Now"
    },
  
    {
        "id":"11",
        "title":"Pink Teddy",
        "image_url":"https://rukminim1.flixcart.com/image/612/612/kqttg280/stuffed-toy/c/y/n/cute-nylex-mother-teddy-bear-40-fluffies-original-imag4r4yzgauqdxb.jpeg?q=70",
        "price":"159",
        "button":"Add to cart",
        "button1":"Buy Now"
    },
  
    {
        "id":"12",
        "title":"Blue Teddy",
        "image_url":"https://rukminim1.flixcart.com/image/612/612/ke0a7ww0/stuffed-toy/v/v/w/soft-and-cute-blue-color-teddy-bear-6-feet-for-boys-and-girls-original-imafus5rgawxbhbr.jpeg?q=70",
        "price":"270",
        "button":"Add to cart",
        "button1":"Buy Now"
    },
    
  ]
      const kids_data= async()=>{
      // let ans= await fetch("http://localhost:3000/care")
      // let cate= await ans.json()
      // append_data(cate)
      try{
          let ans= await fetch("http://localhost:3000/Kids_data")
      let cate= await ans.json()
      append_data(cate)
      }
      catch(err){
  append_data(Kids_data)
      }
  }
  kids_data()
  //let cartArr = JSON.parse(localStorage.getItem('cart')) || []
  
  let main_container = document.getElementById("kids");
  
  const append_data=(cate)=>{
  
  cate.forEach((el)=>{
      let card=document.createElement("div");
      let productImg=document.createElement("img");
      productImg.src=el.image_url;
      let title=document.createElement("h1")
      title.innerText=el.title;
    //  productImg.addEventListener("click", function(){
    //   addfun(el)
    //  })
     
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
//   function addfun(el){
//       localStorage.setItem("selected_item",JSON.stringify(el))
//       window.location.href="cart.html"
      
//   }
  function page(el){
    localStorage.setItem("selected_item",JSON.stringify(el))
    window.location.href="bag.html"
    alert("Product added to cart Successfully !") 

}