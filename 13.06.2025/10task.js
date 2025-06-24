let users = {
  alice: 22,
  bob: 16,
  charlie: 25,
  dave: 15
};
let people = Object.entries(users).filter(([name, age]) => age > 18);
console.log(people);
