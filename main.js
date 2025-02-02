var images = [
    { id: 1, img: "./images/laptop.png" },
    { id: 2, img: "./images/earrings.png" },
    { id: 3, img: "./images/uniform.png" },
    { id: 4, img: "./images/dress.png" },
  ];
  
  const getCategories = async () => {
      const { data } = await axios.get("https://fakestoreapi.com/products/categories");
      console.log(data);
      return data;
  }
  
  const displayCategories = async () => {
      const categories = await getCategories();
      const result = categories.map((category, index) => {
          const imageIndex = index % images.length;
          return `
              <div class="category">
                  <h3>${category}</h2>
                  <div class="circleDiv">
                 <a href="./deatals.html?category=${category}"><img src="./images/CursorClick.png"></a> 
                  </div>
                  <img src="${images[imageIndex].img}" alt="${category}">
              </div>
          `;
      }).join("");
      document.querySelector(".categories .row").innerHTML = result;
  }
  
  displayCategories();
  