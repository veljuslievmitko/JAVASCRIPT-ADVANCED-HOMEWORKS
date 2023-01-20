console.log('test')
// Movies renting App Create a movie renting app There should be an array of movie names There should be an input and a search button 
// When the person enters a name of a movie it should search the array If the name exists it should show an H1 element that says: "The movie can be rented" in green text If the name does not exist it should show an H1 element that says: "The movie can't be rented" in red text The input should not be case sensitive ( it should find the movie regardless of capital or small letters )


let movieArr = ['top gun','tar', 'the banshees of inisher', 'betmen', 'oficer and gentlamen']
let submitBtn = document.getElementById('submitBtn');
let wantedMovie = document.getElementById("wantedMovie");
let responce = document.getElementById('responce');


// console.log(wantedMovie)
// function rentAMovie(){
//     let helper = wantedMovie.value
//     let wantedMovieSmallCase = helper.toLowerCase()
//     console.log(helper)
//     console.log(wantedMovieSmallCase)
// for (let element of movieArr){
// if (wantedMovieSmallCase === element)
//     {console.log(element)
//         console.log(wantedMovieSmallCase)
//         responce.innerHTML =`<h1 style = "color: green;"> THE MOVIE CAN BE RENT </h1>`}
// else {responce.innerHTML =`<h1 style = "color: red;"> THE MOVIE CAN't BE RENT </h1>`
//     console.log(typeof(element), typeof(wantedMovieSmallCase))
//     }}
// }

function rentAMovie(){
    let helper = wantedMovie.value
    let wantedMovieSmallCase = helper.toLowerCase()
    console.log(helper)
    console.log(wantedMovieSmallCase)
if (movieArr.indexOf(wantedMovieSmallCase) !== -1)
    {
        console.log(wantedMovieSmallCase)
        responce.innerHTML =`<h1 style = "color: green;"> THE MOVIE CAN BE RENT </h1>`}
else {responce.innerHTML =`<h1 style = "color: red;"> THE MOVIE CAN't BE RENT </h1>`
    console.log( typeof(wantedMovieSmallCase))
    }}
