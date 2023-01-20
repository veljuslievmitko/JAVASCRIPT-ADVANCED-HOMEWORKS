// Create a button When the button is clicked, call the StarWars api for the first person.
// Print the person name in an h1 tag.
// Print the person stats in a table:

// Height
// Weight
// Eye color
// Hair color
// URL: https://swapi.dev/api/people/1

let StarWarsBtn = document.getElementById('starWars')
StarWarsBtn.addEventListener('click', function(){
    let starWarsHeader = document.createElement('h1');
    let starWarsTable = document.createElement('table');
    starWarsTable.setAttribute('border', '1')
    container.appendChild(starWarsHeader)
    container.appendChild(starWarsTable)
    
    fetch('https://swapi.dev/api/people/1')
    .then(function(res){
        return res.json()
    })
    .then(function(data){
        console.log('data:', data)
        starWarsHeader.innerText = data.name
        let tableName = document.createElement('caption')
        tableName.innerHTML = `<strong>${data.name}</strong>`
        starWarsTable.appendChild(tableName);
        let firstRow = document.createElement('thead')
        starWarsTable.appendChild(firstRow)
        let fCol = document.createElement('th')
        let sCol = document.createElement('th')
        let tCol = document.createElement('th')
        let fourthCol = document.createElement('th')
        fCol.innerText = 'Height'
        sCol.innerText = 'Weight'
        tCol.innerText = 'Eye color'
        fourthCol.innerText = 'Hair color'
        firstRow.appendChild(fCol);
        firstRow.appendChild(sCol);
        firstRow.appendChild(tCol);
        firstRow.appendChild(fourthCol);
        let row = document.createElement('tr')
        starWarsTable.appendChild(row)
        let height = data.height
        let weight = data.mass;
        let eye = data.eye_color;
        let hair = data.hair_color;
        let personData = [height, weight, eye, hair]
        for (var element of personData){
           var helper = document.createElement('td')
           helper.innerText = element
           row.appendChild(helper) 

        }


    })
    .catch(function(err){
        console.log(err)
    })
})