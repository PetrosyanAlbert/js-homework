let user = {
  name: "Олег",
  age: 32,
  email: "oleg@example.com"
};
let jsonString = JSON.stringify(user);
console.log(jsonString);

const parsedUser = JSON.parse(jsonString);
console.log(parsedUser);