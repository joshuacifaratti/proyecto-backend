class ProductManager {
  constructor() {
    this.products = [];
    this.currentId = 213;
  }
  addProduct(product) {
    // comprobaion de existecia del producto
    if (this.products.some((item) => item.code === product.code)) {
      console.log("El producto ya existe");
      return;
    }
    // comprobacion de propiedades requeridas
    if (
      !product.title ||
      !product.description ||
      !product.price ||
      !product.thumbnail ||
      !product.code ||
      !product.stock
    ) {
      console.log("El producto no cuenta con las propiedades requeridas");
      return;
    }
    product = { id: this.currentId++, ...product };
    this.products.push(product);
  }

  getProductById(id) {
    // Comprobar si existe el producto
    if (!this.products.some((item) => item.id === id)) {
      return "Not found";
    }
    // Devolucion de prodecto
    return this.products.find((product) => product.id === id);
  }

  getProducts() {
    return this.products.length > 0 ? this.products : "No hay productos";
  }
}

// Creador product manager
const myProductManager = new ProductManager();

// Muestra producto atuale (vacios)
console.log(myProductManager.getProducts());

// Producto 1
product1 = {
  title: "Producto de prueba 1",
  description: "Hola soy el producto de prueba 1",
  price: 500,
  thumbnail:
  "https://www.google.com/imgres?imgurl=https%3A%2F%2Fpbs.twimg.com%2Fmedia%2FFcF_UzhXgAAZQm8.jpg&tbnid=OYZwspFVvL9l3M&vet=12ahUKEwiEv9qx47H-AhW3SLgEHTEmDhEQMygAegUIARChAQ..i&imgrefurl=https%3A%2F%2Ftwitter.com%2Fmaarcosca%2Fstatus%2F1567674146443743232&docid=AMB4kdB2n782mM&w=975&h=948&q=meme%20ayudame%20loco&client=opera-gx&ved=2ahUKEwiEv9qx47H-AhW3SLgEHTEmDhEQMygAegUIARChAQ",
  code: "512afk",
  stock: 68,
};

myProductManager.addProduct(product1);

// Muestra producto atuale (con contenido)
console.log(myProductManager.getProducts());

// Añade productos de nuevo (devuelve error)
myProductManager.addProduct(product1);

// Obtiene el producto por id
console.log(myProductManager.getProductById(0));

// Obtener producto por identificación inexistente (devuelve error producto 1)
console.log(myProductManager.getProductById(1));

// Producto 2
product2 = {
  title: "producto de prueba 2",
  description: "Hola soy el producto de prueba 2",
  price: 760,
  thumbnail:
  "https://www.google.com/imgres?imgurl=https%3A%2F%2Fpbs.twimg.com%2Fmedia%2FFcF_UzhXgAAZQm8.jpg&tbnid=OYZwspFVvL9l3M&vet=12ahUKEwiEv9qx47H-AhW3SLgEHTEmDhEQMygAegUIARChAQ..i&imgrefurl=https%3A%2F%2Ftwitter.com%2Fmaarcosca%2Fstatus%2F1567674146443743232&docid=AMB4kdB2n782mM&w=975&h=948&q=meme%20ayudame%20loco&client=opera-gx&ved=2ahUKEwiEv9qx47H-AhW3SLgEHTEmDhEQMygAegUIARChAQ",
  code: "324afr",
  stock: 36,
};

myProductManager.addProduct(product2);

// Muestra producto atuale (con contenido)
console.log(myProductManager.getProducts());

// Obtener producto por identificación inexistente (devuelve error producto 2)
console.log(myProductManager.getProductById(1));
