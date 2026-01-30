// const data = ["Alexander", 28]


// const [name, age] = data

// console.log(name, age)


// const letters = ["A", "B", "C", "D", "E", "F"]

// for (let i = 0; i < letters.length; i++) {
//     // const f = letters[i]
//     console.log(letters[i])
//     // console.log(Array.isArray(f))
// }
// letters.forEach((el, i) => {
//     console.log(el, i)
// })
// console.log(letters.indexOf("B"))

// const users = [
//     {
//         name: "Alex",
//         age: 33,
//         city: "Moscow"
//     },
//     {
//         name: "Mixa",
//         age: 40,
//         city: "Pxuket"
//     },
//     {
//         name: "Oleg",
//         age: 55,
//         city: "Roma"
//     },
//     // () => console.log("Exit"),
//     // [false, "logovo"]
// ]
// console.log(
//     users.findIndex((el) => el.name === "Mixa")
// )
// console.log(users[1].name)
// console.log(users[1]["name"])
// console.log(users[2]())
// console.log(users[3][1])
// console.log(users[users.length - 1])
// console.log(users.at(-2))

// console.log(users.some((el) => el.age === 40))
// console.log(users.every((el) => el.age >= 18))
// const fU = users.filter((el) => el.city === "Moscow" || el.age < 45);
// const fU = users.map((el) => {
//     return `${el.name}, ${el.age} лет живет в г. ${el.city}`
// })
// const fU = users.reduce((acc,el) => {
//     let medium = users.length
//     return acc + el.age
// }, 0)
// const avg = fU / users.length
// console.log(avg)

// const user = { name: "Alex", age: 28 };

// for (const [key, value] of Object.entries(user)) {
//   console.log(key, value);
// }
// const f = Object.entries(user)
// → [ ["name", "Alex"], ["age", 28] ]
// console.log(f[0][0])
