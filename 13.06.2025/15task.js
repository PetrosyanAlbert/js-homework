let user = {
  name: "Анна",
  contact: {
    email: "anna@example.com",
    phone: "123-456"
  },
  location: {
    city: "Москва",
    country: "Россия"
  }
};
let {
  name,
  contact: { email, phone },
  location: { city, country }
} = user;

console.log(name);  
console.log(email);  
console.log(phone);  
console.log(city);   
console.log(country);

