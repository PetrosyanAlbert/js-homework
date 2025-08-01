
class PaymentMethod {
  process(amount) {
    throw new Error('Метод process должен быть реализован');
  }
}

class CreditCardPayment extends PaymentMethod {
  process(amount) {
    console.log(`Paid ${amount} with credit card.`);
  }
}

class PayPalPayment extends PaymentMethod {
  process(amount) {
    console.log(`Paid ${amount} with PayPal.`);
  }
}

