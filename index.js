let products = [];

// Función que convierte los mapas en objetos Product
function parseDataToProducts() {
    for (let i = 0; i < data.length; i++) {
        let map = data[i];
        let product = new Product(
            map["id"],
            map["title"],
            map["price"],
            map["description"],
            map["images"],
            map["category"]["name"]
        );
        products.push(product);
    }
}

function productSelected(pos) {
    let productSelected = products[pos];
    // Redireccionamos a la página de detalles del producto, pasando el título como parámetro
    window.location = "./detail.html?name=" + productSelected.title;
}
