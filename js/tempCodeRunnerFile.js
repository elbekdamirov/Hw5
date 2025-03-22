  if (obj1 === obj2) return true;
//   if (
//     typeof obj1 !== "object" ||
//     typeof obj2 !== "object" ||
//     obj1 === null ||
//     obj2 === null
//   )
//     return false;

//   let keys1 = Object.keys(obj1);
//   let keys2 = Object.keys(obj2);

//   if (keys1.length !== keys2.length) return false;

//   for (let key of keys1) {
//     if (!deepEqual(obj1[key], obj2[key])) return false;
//   }

//   return true;
// }

// const obj1 = { a: 1, b: { c: 2, d: 3 } };
// const obj2 = { a: 1, b: { c: 2, d: 3 } };
// const obj3 = { a: 1, b: { c: 2, d: 4 } };

// console.log(deepEqual(obj1, obj2));
// console.log(deepEqual(obj1, obj3));
