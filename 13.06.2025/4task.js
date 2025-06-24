const keys = ['name', 'age', 'city']; 
const values = ['Alice', 30, 'Paris']; 
const dynamicObject = {};


for (let i = 0; i < keys.length; i++) {
  dynamicObject[keys[i]] = values[i];
}


console.log(dynamicObject);
