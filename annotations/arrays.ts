const carMakers = ['ford', 'toyota', 'chevy']
console.log(carMakers)
const dates = [new Date(), new Date()]

const carsByMake: string[][] = []
// Help with inference when extracting values
const car = carMakers[0]
console.log('car', car)
const myCar = carMakers.pop()
console.log(carMakers)

carMakers.push('Hybrid')
console.log(carMakers)
// Prevent incompatible values - the line below doesnt compile
//carMakers.push(100)

// Help with 'map'
carMakers.map((car: string): string => {
  return car.toUpperCase()
})

var multi: number[][] = [
  [1, 2, 3],
  [23, 24, 25],
]
console.log(multi[0][0])
console.log(multi[0][1])
console.log(multi[0][2])
console.log(multi[1][0])
console.log(multi[1][1])
console.log(multi[1][2])
