class Product {
    constructor(name, price, description) {
        if (new.target === Product) {
            throw new Error("Error111 - Нельзя создать экземпляр абстрактного класса Product");
        }
        this.name = name;
        this.price = price;
        this.description = description;
    }

    getDetails() {
        throw new Error("Error222 - Метод getDetails должен быть реализован в подклассе");
    }
}

class ElectronicsProduct extends Product {
    constructor(name, price, description, warrantyPeriod, brand) {
        super(name, price, description);
        this.warrantyPeriod = warrantyPeriod;
        this.brand = brand;
    }

    getDetails() {
        return `${this.name}: ${this.description}. Цена: ${this.price} USD. Бренд: ${this.brand}. Гарантия: ${this.warrantyPeriod} лет.`;
    }
}

class ClothingProduct extends Product {
    constructor(name, price, description, size, material, gender) {
        super(name, price, description);
        this.size = size;
        this.material = material;
        this.gender = gender;
    }

    getDetails() {
        return `${this.name}: ${this.description}. Цена: ${this.price} USD. Размер: ${this.size}, Материал: ${this.material}, Пол: ${this.gender}.`;
    }
}


class Review {
    constructor(product, rating, comment, customer) {
        this.product = product;
        this.rating = rating;
        this.comment = comment;
        this.customer = customer;
        this.date = new Date();
    }

    getSummary() {
        return `${this.rating} от ${this.customer.name}: ${this.comment}`;
    }
}


class ReviewManager {
    constructor() {
        this.reviews = [];
    }

    addReview(product, rating, comment, customer) {
        const review = new Review(product, rating, comment, customer);
        this.reviews.push(review);
        console.log(`✅ Отзыв добавлен: ${review.getSummary()}`);
    }

    getReviewsByProduct(product) {
        return this.reviews.filter(review => review.product === product);
    }

    getAverageRating(product) {
        const productReviews = this.getReviewsByProduct(product);
        if (productReviews.length === 0) return null;

        const total = productReviews.reduce((sum, r) => sum + r.rating, 0);
        return (total / productReviews.length).toFixed(1);
    }
}


let orderCounter = 1;

class Order {
    constructor(customer, products) {
        if (new.target === Order) {
            throw new Error("Error111 - Нельзя создать экземпляр абстрактного класса Order");
        }
        this.orderId = orderCounter++;
        this.customer = customer;
        this.products = products;
        this.createdAt = new Date();
        this.status = "Ожидает";
        this.totalPrice = 0;
    }

    calculateTotalPrice() {
        throw new Error("Error222 - Реализуйте метод в подклассе");
    }

    processPayment() {
        throw new Error("Error333 - Реализуйте метод в подклассе");
    }
}

class OnlineOrder extends Order {
    constructor(customer, products) {
        super(customer, products);
        this.totalPrice = this.calculateTotalPrice();
    }

   calculateTotalPrice() {
        let total = 0;
        for (let i = 0; i < this.products.length; i++) {
            total += this.products[i].price;
        }
        return total;
    }

    processPayment() {
        console.log(`💳 Оплата выполнена для заказа #${this.orderId} на сумму $${this.totalPrice}`);
        this.status = "Выполнен";
    }
}


class Customer {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.orderHistory = [];
        this.reviews = []; 
    }

    searchProducts(keyword, productCatalog) {
        return productCatalog.filter(p =>
            p.name.includes(keyword) || p.description.includes(keyword)
        );
    }

    placeOrder(productsArray) {
        const order = new OnlineOrder(this,productsArray);
        order.processPayment();
        this.orderHistory.push(order);
        return order;
    }

    viewOrderHistory() {
        if (this.orderHistory.length === 0) {
            console.log("❗ У вас пока нет заказов.");
            return;
        }
        this.orderHistory.forEach(order => {
            console.log(`🛒 Заказ #${order.orderId} (${order.status}) на сумму $${order.totalPrice} — ${order.createdAt.toLocaleDateString()}`);
        });
    }

    leaveReview(product, rating, comment, reviewManager) {
        reviewManager.addReview(product, rating, comment, this);
    }
}



const catalog = [
    new ElectronicsProduct("Ноутбук", 1200, "Мощный ноутбук для работы и игр", 2, "Dell"),
    new ClothingProduct("Футболка", 25, "Удобная футболка", "M", "Хлопок", "Мужской")
];

const reviewManager = new ReviewManager();
const customer = new Customer("Алексей", "alex@example.com");

console.log("🔍 Поиск товаров по ключу 'ноут':");
const found = customer.searchProducts("ноут", catalog);
found.forEach(p => console.log(p.getDetails()));

console.log("\n📦 Размещение заказа:");
const order = customer.placeOrder(found);
customer.viewOrderHistory();

console.log("\n✍️ Оставляем отзывы:");
customer.leaveReview(found[0], 5, "Очень доволен покупкой!", reviewManager);
customer.leaveReview(found[0], 4, "Работает отлично.", reviewManager);

console.log("\n🔎 Отзывы на товар:");
const reviews = reviewManager.getReviewsByProduct(found[0]);
reviews.forEach(r => console.log(r.getSummary()));

console.log(`⭐ Средний рейтинг: ${reviewManager.getAverageRating(found[0])}★`);
