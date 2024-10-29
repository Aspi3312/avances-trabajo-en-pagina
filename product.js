class Product {
    constructor(id, title, price, description, images, categoryName) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.description = description;
        this.images = images;
        this.categoryName = categoryName;
    }

    // Método que genera la tarjeta HTML de cada producto
    htmlCard(pos) {
        return `
            <div class="product-item" onclick="productSelected(${pos})">
                <img src="${this.images[0]}" alt="">
                <div class="product-item-info">
                    <label>${this.categoryName}</label>
                    <p>${this.title}</p>
                    <br>
                    <h3>$ ${this.price}</h3>
                </div>
            </div>
        `;
    }
}

function renderAllProducts() {
    let container = document.getElementById("products");
    for (let i = 0; i < products.length; i++) {
        let product = products[i];
        container.innerHTML += product.htmlCard(i);
    }
}

parseDataToProducts();  // Convierte los datos en productos
renderAllProducts();     // Muestra los productos en el DOM
