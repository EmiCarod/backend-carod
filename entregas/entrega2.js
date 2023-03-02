import fs from 'fs'

class productManager{

    constructor (path){
        this.path = path;

    }

    async getProduct () {
        //parado desde backend-carod/entregas
        const json = fs.readFile('./productos.txt',"utf-8");
        this.produ = await JSON.parse(json);
        return this.getProduct;
    }

    async guardarProductos (){
        const json = JSON.stringify(this.produ, null, 2);
        fs.writeFile('./productos.txt', json)
    }

    async addProduct(producto){
        //agrego id al producto
        if(this.products.length === 0){
            producto.id = 1;

        } else {
            producto.id = this.products[this.products.length - 1].id + 1;
        }
        //guardo el producto en el array
        //espera a que el producto sea cargado con un id generico para hacer el push
        await this.products.push(producto);
    }

    async getProductById (idProducto) {
        this.producto = await this.products.find(e => e.id === idProducto);

        if (!producto){
            console.log ('producto no encontrado')
        
        }
    }
    //no hago async el metodo ya que es el ultimo
    deleteProduct(producto){
        fs.unlink(producto, 'producto no existe')
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

console.log(pruebaProducto.getProduct());

