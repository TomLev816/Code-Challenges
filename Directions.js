function dirReduc (testOne){
  for (let i = 0; i < testOne.length; i++) {
    if (testOne[i] === "NORTH" && testOne[i +1] === "SOUTH"){
        testOne.splice(i, 2)
        i = -1
        }
    if (testOne[i] === "SOUTH" && testOne[i +1] === "NORTH"){
        testOne.splice(i, 2)
        i = -1
        }
    if (testOne[i] === "WEST" && testOne[i +1] === "EAST"){
        testOne.splice(i, 2)
        i = -1
        }
    if (testOne[i] === "EAST" && testOne[i +1] === "WEST"){
        testOne.splice(i, 2)
        i = -1
        }
  }
return testOne
}

let test1 = ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]
let test2 = ["NORTH", "WEST", "SOUTH", "EAST"]
let test3 = ["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]

console.log(dirReduc(test1))
console.log(dirReduc(test2))
console.log(dirReduc(test3))


