
{/* <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script> */}
document.getElementById("place-order").addEventListener("click", function (event){
    // localStorage.setItem("cart-item", JSON.stringify([]));
    // document.querySelector(".cart-sub-header>p").style.display='none';
    // document.querySelector(".cart-sub-header>.test-count").innerText = 0;
    //  alert("Payment Successful");
    swal("ordered Succesful!","Your order deliever in 7 days " , "success", {
        button: "Aww yiss!",
      });
})
