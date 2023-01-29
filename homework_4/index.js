
// Task 1
// Create an html page with a table and a button. When the button is clicked show results for the first 10 planets from the Star Wars api. The information in the table are:

// Planet Name
// Population
// Climate
// Gravity
// There should be a function that makes the call to the api for the planets ( should have URL for a parameter ) There should be a function that prints planets in to the table **API URL: ** https://swapi.dev/api/planets/?page=1

// Task 2
// After the user clicks the button to get the first 10 planets, a button should be shown below the table that says: NEXT 10. When the button is clicked you should make another call and get the next 10 planets and change the table contents with information about the next 10 planets. After the next 10 planets are shown the button NEXT 10 should disapear and a new button PREVIOUS 10 should appear. The previous button should return the first 10 planets in the table and hide the PREVIOUS 10 button and show the NEXT 10 button.

// **API URL: ** https://swapi.dev/api/planets/?page=2

let submitBtn = document.getElementById('submitBtn')

let container = document.getElementById('container')
let tableHead = document.getElementById('table-head');
let tableBody = document.getElementById('table-body');
let arrayValue = ['Planet Name', 'Population', 'Climate', 'Gravity']

function createTable(array) { 
    for (var element of array ){
    let tableRow = document.createElement('tr')
    tableRow.innerHTML = `<td>${element.name}</td><td>${element.population}</td><td>${element.climate}</td><td>${element.gravity}</td>`
    tableBody.appendChild(tableRow)
    }
}


submitBtn.addEventListener('click', function (){
    submitBtn.innerText === 'submit' || submitBtn.innerText === 'previous' ? fetchFunc(1) : fetchFunc (2)
})

function createTableHeader (){
   for (var element of arrayValue){
    let headerData = document.createElement('th') 
    headerData.innerHTML = element
   tableHead.appendChild(headerData)
   } 
}

function fetchFunc (number){
    let stringForFetch = "https://swapi.dev/api/planets/?page="
    fetch(stringForFetch + `${number}`)
.then(function(res){
    return res.json()
})
.then(function(data){
    tableHead.innerHTML = '';
    tableBody.innerHTML = '';
    console.log('data is ', data)
    let arrayData = data.results
    createTableHeader (arrayData);
    createTable(arrayData)
    number === 1 ? submitBtn.innerText = 'next' : submitBtn.innerText = 'previous'
    
})
.catch(function(err){
    console.log(err)
})
}






// sega pak ne moze v so dva ciklusa problem so "NODE"
// let students = [
//     {
//         firstName: 'Joe',
//         lastName: 'Doe',
//         age: 19,
//         averageGrade: 5
//     },
//     {
//         firstName: 'Tim',
//         lastName: 'Green',
//         age: 17,
//         averageGrade: 2
//     },
//     {
//         firstName: 'Gill',
//         lastName: 'Flung',
//         age: 20,
//         averageGrade: 2
//     },
//     {
//         firstName:'Gill',
//         lastName:'flung', 
//         age: 14,
//         averageGrade: 1
//     }
// ]
// let arrayExpiremental = ['firstName', 'lastName', 'age', 'averageGrade'];


// // probaa
// for (var element of students ){
//     let tableRow = document.createElement('tr')
//     tableBody.appendChild(tableRow)
//         for (var data of arrayExpiremental ){
//          let tableData = document.createElement('td')
//            tableData= element[data]
//            console.log(tableData)
//             console.log(tableData.nodeType)
//         //  tableRow.innerHTML = `<td>${element.firstName}</td><td>${element.lastName}</td><td>${element.age}</td><td>${element.averageGrade}</td>`
//        tableRow.appendChild(tableData)}
// }


// for (let i = 0; i < students.length; i++) {
//     for (let a = 0; a < arrayExpiremental.length; a++){
//         console.log(students[i][arrayExpiremental[a]])
//     }
// }
