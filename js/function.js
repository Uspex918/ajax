// console.log("Начало кода...")

//     setTimeout(() => {
// try {
// const names = undefined
//
// names.forEach((name) => {
//     console.log(name)
// })
// } catch (error) {
//     console.log("Возникла ошибка: ", error)
// }
// console.log("Конец кода...")
// })
// let userJSON
// try {
//     userJSON = `{
//
//     "age": 28
//     }`
// const g = JSON.parse(userJSON)
//     const { name, age } = g
//
//     if (!name) {
//         const eM = "Ошибка!"
//
//         throw  new Error(eM)
//     }
//
//     console.log(`
//     Привет ${name}!
//     Твой возраст - ${age}
//     `)
//
// } catch (er) {
//     console.log("Тут ошибка: ", er)
// }
//
// console.log("Конец кода...")
// console.log(userJSON)

// const wait = (ms, callback) => {
//     setTimeout(callback, ms);
//
//     console.log(1.5)
//
// }
//
// console.log(1)
// wait(5000, () => console.log(2));
// console.log(3)

// const makeRequest = (url, onSuccess) => {
//     return new Promise(resolve => {
//         resolve("Ura, sostoyanje fulfilld!")
//     })
// }
//
// const sellerId = 1554
//
// makeRequest(`sellers/${sellerId}`)
//     .then((seller) => {
//         const firstProductId = seller.productIds[0]
//
//         return makeRequest(`sellers/${firstProductId}`)
//     })
//     .then((product) => {
//         const firstReviewId = product.reviewIds[0]
//
//         return makeRequest(`sellers/${firstReviewId}`)
//     })
//     .then((review) => {
//         const authorName = review.author.name
//     })
//     .catch((err) => {
//         console.log(err);
//     })
// makeRequest(`sellers/${sellerId}`, (seller) => {
//     const firstProductId = seller.productIds[0]
//
//     makeRequest(`sellers/${firstProductId}`, (product) => {
//         const firstReviewId = product.reviewIds[0]
//
//         makeRequest(`sellers/${firstReviewId}`, (review) => {
//             const authorName = review.author.name
//         })
//     })
// })


// const promise = new Promise((resolve, reject) => {
//     console.log(`Я в состоянии pending`);
//
//     setTimeout(() => {
//         let a = Math.random()
//         console.log(a)
//         if (a > 0.5) {
//             resolve("Больше половины")
//         } else {
//             reject("Меньше половины")
//         }
//     }, 3000)
// })
// promise
//     .then((i) => console.log(i))
//     .catch((i) => console.log(i))
//     .finally(() => {
//         console.log("Я выполнюсь в любом случае");
//     });


// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Данные пришли!");
//     }, 1000);
// });
//
// promise.then((d) => {
//     console.log(d); // "Данные пришли!"
// });

