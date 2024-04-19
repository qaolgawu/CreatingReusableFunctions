const arr = [
    { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "48", name: "Barry", occupation: "Runner", age: "25" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "7", name: "Bilbo", occupation: "None", age: "111" }
]

// Use callback functions alongside Array methods to accomplish the following:
// Sort the array by age.
// Filter the array to remove entries with an age greater than 50.
// Map the array to change the “occupation” key to “job” and increment every age by 1.
// Use the reduce method to calculate the sum of the ages.
// Then use the result to calculate the average age.


function part2(arr){
    const sortArr = arr.slice().sort((min, max) => min.age - max.age)
    console.log(sortArr);
    const filterArr = arr.filter((obj) => obj.age < 50)
    console.log(filterArr)
    const newArr = arr.map(({id, name, occupation, age}) => {
        return {id, name, job: occupation, age: age + 1}
    }) 
    console.log(newArr);
    const sumAge = arr.reduce((acc, item) => acc + +item.age, 0)
    console.log(sumAge)
}

console.log(part2(arr))

function part3(obj){
    obj.age++
    console.log(obj);
    // const copyObj = JSON.parse(JSON.stringify(obj))
    const copyObj = Object.assign({}, obj)
    copyObj.age++
    console.log(obj);
    console.log(copyObj);
}

part3({ id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" })