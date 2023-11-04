
const baseUrl = "https://cors.noroff.dev/https://rainydays.varmeopplevelser.no/wp-json/wc/store/products?per_page=20";
const productContainer = document.querySelector(".products")

async function getProducts(url){
    const response = await fetch(url);
    const products = await response.json();
    products.forEach(function(product){
        productContainer.innerHTML += `
        <div class="product"><h2><a href="product.html">${product.name}</h2></a>
        <div class="product-image" style="image:url('${product.images[0].src}')

        <div class="product-image"> ${product.images[0].src}

        <div class="description">${product.description}
        <div class="price"><h3>${product.price_html}kr</h3>
        <div class="description">${product.add_to_cart.text}
        </div>` 
    })}
getProducts(baseUrl);