"use strict"

// console.log("Запрос данных...")
// const product = {}

// const req = new Promise(function(resolve, reject) {
//     setTimeout(() => {
//     console.log("Подготовка данных...")

//     product.name = "TV",
//     product.price = 2000
    
//     resolve(product)
    
// }, 1000)
// })


// req.then((a) => {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//         a.status = "order"
//         res(a)
//         }, 1000)
//     })

//     .then((b) => {
//         b.modify = true
//         return b
//     })

//     .then((c) => {
//         console.log(c)
//     })
//     .catch((d) => {
//         console.error("ПРОИЗОШЛА ОШИБКА")
//     })
//     .finally(() => {
//         console.log("Finally")
//     })
// })


// const test = (time) => {
//     return new Promise(resolve => {
//         setTimeout(() => resolve(), time)
//     })
// }
// test(1000).then(() => console.log("Result 1000 ms"))
// test(2000).then(() => console.log("Result 2000 ms"))
// test(3000).then(() => console.log("Result 3000 ms"))

// const test = function (time) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//         resolve()
//         }, time) 
//     })
// }

// Promise.all([test(1000), test(2000), test(3000)]).then(() => {
//     console.log("All")
// })
// Promise.race([test(1000), test(2000), test(3000)]).then(() => {
//     console.log("One of")
// })

// const slow = new Promise(res => setTimeout(() => res("First"), 40));
// const fastError = new Promise((_, rej) => setTimeout(() => rej("Ошибка!"), 30));

// let b = Promise.race([slow, fastError])
//   .then(console.log)
//   .catch(console.error); 

