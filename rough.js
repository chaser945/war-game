
// function filter (arr, returnTrue){
//     const resultArr = []
//     for (let i=0; i < arr.length; i++){
//         if (returnTrue(arr[i])){
//             resultArr.push(arr[i])
//         }
//     }
//     return resultArr
// }



// const people = [
//     {name: "Jack", hasPet: true, age: 19},
//     {name: "Jill", hasPet: false, age: 59},
//     {name: "Alice", hasPet: true, age: 39},
//     {name: "Bob", hasPet: false, age: 15},
// ]


// function filterPeopleWithPet(obj){
//     return obj.hasPet === true
// }


// console.log(filter(people, filterPeopleWithPet))








// const newDeckBtn = document.getElementById("new-deck")
// newDeckBtn.addEventListener('click', btnFunc)

// function btnFunc(){
//     fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
//     .then(res => res.json())
//     .then(data => console.log(data))
// }

// const myTimeOut = setTimeout(logRunning, 10000 )

// function logRunning (){
//     console.log("I finally ran")
// }


// const people = [
//     {name: "Jack", hasPet: true, age: 19},
//     {name: "Jill", hasPet: false, age: 59},
//     {name: "Alice", hasPet: true, age: 39},
//     {name: "Bob", hasPet: false, age: 15},
// ]


// const peopleWithPet = people.filter(filterPeopleWithPet)
// console.log(peopleWithPet)

// function filterPeopleWithPet(obj){
//     return obj.hasPet === true
// }

// const peopleAbove18 = people.filter((obj) => obj.age > 18)
// console.log (peopleAbove18)



// document.getElementById("new-deck").addEventListener('click', function(){
//     console.log("clicked")
// })

// const voters = [
//     {name: "john doe",
//     email: "joe@joe.com",
//     voted: false},
//     {name: "joker",
//     email: "joker@e.com",
//     voted: true},
//     {name: " doe",
//     email: "darby@jo.com",
//     voted: false},
//     {name: "john cena",
//     email: "joe@szau.com",
//     voted: true}
// ]


// const votersEmail = voters.filter((obj) => obj.voted).map((obj) => obj.email)

// console.log(votersEmail)


// fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
//     .then(res => "world")
//     .then(data => data)
//     .then(nores => console.log(nores) )