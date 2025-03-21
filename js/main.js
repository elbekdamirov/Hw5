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
