//---------------------------1---------------------------------//
// const doira = {
//   PI: 3.14,
//   //   getInfo() {
//   //     console.log(`PI = ${this.PI}, Radius = ${this.radius}`);
//   //   }, //info tekshirish uchun ozim yozib qoydim
//   set addRadius(r) {
//     this.radius = r;
//   },
//   findArea() {
//     yuza = this.radius ** 2 * this.PI;
//     console.log("Doira yuzasi = ", yuza);
//   },
// };

// doira.addRadius = 5;
// doira.findArea();

//-------------------------2------------------------------------//
// const colors = {
//   red: "qizil",
//   green: "yashil",
//   InvertKeyValue() {
//     let temp;
//     for (const key in this) {
//       temp = this[key];
//       delete this[key];
//       this[temp] = key;
//     }
//   },
// };

// colors.InvertKeyValue();
// console.log(colors);

//-------------------------3-----------------------------------//
// function findMostFrequentValue(data) {
//   let count = {};
//   let maxCount = 0;
//   let mostFrequent;

//   for (const key in data) {
//     let value = data[key];

//     if (count[value] === undefined) {
//       count[value] = 1;
//     } else {
//       count[value]++;
//     }

//     if (count[value] > maxCount) {
//       maxCount = count[value];
//       mostFrequent = value;
//     }
//   }

//   return mostFrequent;
// }

// const data = { a: 3, b: 5, c: 3, d: 7, e: 5, f: 5 };

// console.log(findMostFrequentValue(data));

//------------------------4------------------------------------//
// function flattenObject(obj, prefix = "") {
//   let result = {};

//   for (let key in obj) {
//     if (typeof obj[key] === "object" && obj[key] !== null) {
//       Object.assign(result, flattenObject(obj[key], prefix + key + "."));
//     } else {
//       result[prefix + key] = obj[key];
//     }
//   }

//   return result;
// }

// const data = {
//   user: {
//     name: "Ali",
//     address: {
//       city: "Tashkent",
//       zip: "100100",
//     },
//   },
// };

// console.log(flattenObject(data));

//-----------------------5-------------------------------------//
// function deepEqual(obj1, obj2) {
//   if (obj1 === obj2) return true;
//   if (
//     typeof obj1 !== "object" ||
//     typeof obj2 !== "object" ||
//     obj1 === null ||
//     obj2 === null
//   ) {
//     return false;
//   }

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
