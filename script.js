// Add the API URL
const url = "https://free-food-menus-api-production.up.railway.app/burgers";
// To fetch data from an API using .then

  fetch(url,{
    method: "GET"
  })
  .then((response) => response.json())
  .then((data) => {
    console.log(data)
    let myData= data
    // to apend data to html document = function
    getMenu(myData)
    takeOrder(myData)
  })
  .catch((error) => console.log(error));

    //choose random number between 60 foods
  const randomFood = () => {
    return (Math.floor(Math.random()*60 ));
    // console.log(item);
  }

  function getMenu(data) {
    var products = document.getElementById("productList");
    for (var i = 0; i < data.length; i++) {
      var product = `<div class="products-display-productlist-product">
                    <div class="">
                        <img src="${data[i].img}" alt="productImage">
                    </div>
                    <div class="product-details">
                        <div class="product-tittle-brand product-text">
                            <div class="product-tittle">
                                Tittle: ${data[i].name}
                            </div>
                            <div class="product-brand">
                            Country: ${data[i].country}
                            </div>
                        </div>
                        <div class="product-price product-text">
                            Price: $${data[i].price}
                        </div>
                        <div class="product-rating product-text">
                            Rating: ${data[i].rate}
                        </div>
                        <div class="product-stock product-text">
                            Description: ${data[i].dsc}
                        </div>
                    </div>`;  
      products.innerHTML += product;
    }
  
  }

  let cart = [];

function takeOrder(data){  
      console.log(randomFood());
     let item1 = data[randomFood()];
      let item2 =  data[randomFood()];
      let item3 =  data[randomFood()];
      console.log(data[item2]);
 cart = [item1,item2,item3]
  console.log(cart);
    }


function orderPrep(){
  let paySts = {success: "payment success", faild : "payment failed"}

}


function  thankyouFnc(){

}




  
  // navbar transition effect
  
   const changeColor = () => {
    let navclass= document.getElementById('navbar')
     if (window.scrollY >= 100){
      navclass.classList.remove('navbar')
      navclass.classList.add("navbar-bg")
    } else {
      navclass.classList.remove('navbar-bg')
      navclass.classList.add("navbar")
    }
  }
  window.addEventListener("scroll", changeColor);



//   {
//     "id": "the-gramercy-tavern-burger-4-pack",
//     "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/137148/Gramercy-Tavern-Burger-and-Kielbasa-Kit-6.4.21-72ppi-1x1-15.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
//     "name": "Gramercy Tavern",
//     "dsc": "The Gramercy Tavern Burger - 4 Pack",
//     "price": 99,
//     "rate": 5,
//     "country": "New York, NY"
// }