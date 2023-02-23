class productManager{

    constructor (){
        this.products = [];
    }

    getProduct () {
        return this.products;
    }

    addProduct(producto){
        //agrego id al producto
        if(this.products.length === 0){
            producto.id = 1;

        } else {
            producto.id = this.products[this.products.length - 1].id + 1;
        }
        //guardo el producto en el array
        this.products.push(producto);
    }

    getProductById (idProducto) {
        const producto = this.products.find(e => e.id === idProducto);

        if (!producto){
            console.log ('producto no encontrado')
        
        }
    }

}

class Producto {
        constructor(title, description, price, thumbnail, code, stock)
        {
            this.title = title;
            this.description = description;
            this.price = price;
            this.thumbnail = thumbnail;
            this.code = code;
            this.stock = stock;
        }
}

//prueba

const pruebaProducto = new productManager();

console.log ('agregare un producto prueba con title = producto prueba, descripcion = este es un producto prueba, price = 200, thumbnail = sin imagen, code = abc123, stock = 25')

pruebaProducto.addProduct(new Producto('producto prueba','este es un producto prueba', '200','sin imagen', 'abc123', '25'));

console.log ('agrego un segundo producto para comprobar que se auto genera un id nuevo para el producto')
pruebaProducto.addProduct(new Producto('campera','campera de invierno', '200','sin imagen', 'abc234', '10'));

console.log(pruebaProducto.getProduct());

