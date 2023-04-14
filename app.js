const jsonData = '{"parent":{"name":"Sally","age":45,"children":[{"name":"Kim","age":3},{"name":"Lee","age":1}]}}';

// convertir cadena JSON a objeto JavaScript
let jsobject = JSON.parse(jsonData);
// actualizar objeto JavaScript
console.log(jsobject);
jsobject.parent.age = 35;
console.log(jsobject.parent);

// convertir objeto JavaScript a cadena JSON
const Newobj = JSON.stringify(jsobject)
// muestra la cadena JSON
console.log(Newobj)