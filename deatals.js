
const getCategoryProducts = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    console.log(urlParams);
    const categoryName = urlParams.get('category');
    const { data } = await axios.get(`https://fakestoreapi.com/products/category/${categoryName}`);
    console.log(data);
    return data;
};

const displayProducts = async () => {
    const products = await getCategoryProducts();
const results = products.map(product =>{

    return `
    <div class="product">
        <div class="circleDiv">
       <a ><img src="./images/CursorClick.png"></a> 
        </div>
        <img src="${product.image}" alt="${product}">
        <div class="product_info">  <h3>${product.title}</h2>
        <h3 class="price">${product.price}$</h3>
        </div>
      
    </div>
        
`;

}).join("");
document.querySelector(".products .row").innerHTML = results;
};
  
displayProducts();
