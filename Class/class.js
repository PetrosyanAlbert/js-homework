class Entity {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
}

class Product extends Entity {
    constructor(name, price, id) {
        super(name, id);
        this.price = price;
    }
}

class Order extends Entity {
    constructor(name, price, id) {
        super(name, id);
        this.price = price;
    }
    doOrder(){
        return `Order ${this.id} placed`
    }
    concelOrder(){
        return `Order ${this.id} canceled`
    }
}

class Administrator extends Entity {
    constructor(name, id){
        super(name, id);
    }
    addProduct(productList, product){
        productList.push(product);
        return productList;
    }
    deleteProduct(productList, productId){
        return productList.filter(product => product.id !== productId);
    }
    changeProduct(product, newName, newPrice){
        if(newName !== undefined) product.name = newName;
        if(newPrice !== undefined) product.price = newPrice;
    }
}

class ShoppingCart{
    constructor(){
        this.products = [];
    }
    addProduct(product){
        this.products.push(product);
    }
    deleteProduct(productId){
        this.products = this.products.filter(product => product.id !== productId);
    }
}

class User extends Entity{
    #password;
    
    constructor(name, email, password,id) {
        super(name, id);
        this.email = email;
        this.#password = password;
        this.cart = new ShoppingCart();
    }
    login(email, password){
        return this.email === email && this.#password === password;
    }
    viewProfile(){
        return `User: ${this.name}, Email: ${this.email}`;
    }
}

class Delivery {
    constructor(address, date){
        this.address = address;
        this.date = date;
    }
    trackDelivery(){
        return `Delivery to ${this.address} scheduled for ${this.date}`;
    }
}

class Payment {
    constructor(method){
        this.method = method;
    }
    pay(amount){
        return `Paid ${amount} using ${this.method}`;
    }
}


//  Пример использования
let admin = new Administrator("Admin John", 1);
let user = new User("Alice", "alice@example.com", "secret123", 2);

// Список продуктов
let products = [
    new Product("Phone", 999, 101),
    new Product("Mouse", 49, 102),
    new Product("Keyboard", 89, 103)
];

console.log("Все продукты:");
console.log(products);

// Удалим продукт по id (102)
products = admin.deleteProduct(products, 102);

console.log("После удаления по id:");
console.log(products);

// Добавим несколько продуктов в корзину
user.cart.addProduct(new Product("Phone", 999, 201));
user.cart.addProduct(new Product("Mouse", 49, 202));
user.cart.addProduct(new Product("Mouse", 49, 203)); 


console.log(user.cart.products);





// Оформление заказа
const order = new Order("Order21", 999, 301);
console.log(order.doOrder());

// Оплата
const payment = new Payment("Credit Card");
console.log(payment.pay(999));

// Доставка
const delivery = new Delivery("123 Main St", "2025-07-01");
console.log(delivery.trackDelivery());
