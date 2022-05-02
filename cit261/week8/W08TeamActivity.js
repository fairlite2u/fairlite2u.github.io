let url = 'https://swapi.co/api/people/?format=json';
let category = '';
let srch = '';
let nextURL = '';
let prevURL = '';

function getData(){
    const starWars = fetch(url)
    .then(response =>  response.json())
    .then(people => {
        console.table(people);
        nextURL = people.next;
        prevURL = people.previous;
        category = category.toUpperCase();
        document.getElementById('dispData').innerHTML = `<span><b>`+ category +`: 
        </b></span><br> `;

        // for(i = 0; i < 10; i++){
        //     const dispData = document.createElement('li');
        //     if(category != 'FILMS'){
        //         nextItem = document.createTextNode(people.results[i].name);
        //     }
        //     else{
        //         nextItem = document.createTextNode(people.results[i].title);               
        //     }
            
        //     dispData.appendChild(nextItem);
        //     document.getElementById('dispData').appendChild(dispData);
        // }

        people.results.forEach(element => {
            let anchor = document.createElement('a');
            if(category != 'FILMS'){
                let newURL = setSearch(element.name);
                anchor.setAttribute('href', newURL);
                anchor.innerHTML = element.name;
                document.querySelector('section').appendChild(anchor);
                document.querySelector('section').innerHTML += '<br>';
            }
            else{
                nextItem = document.createTextNode(people.results[i].title);               
            }
            
            // dispData.appendChild(nextItem);
            // document.getElementById('dispData').appendChild(dispData);
        });
    })
    .catch((error) =>{
        return;
    })  
}

function getPrev() {
    if(!prevURL){
        return;
    }
    url = prevURL;
    getData()
}

function getNext() {
    if(!nextURL){
        return;
    }
    url = nextURL;
    getData()
}

function getIndividualItem(name){
    const starWars = fetch(url)
    .then(response =>{
        return response.json()
    })
    .then(people => {
        console.table(people);
        nextURL = people.next;
        prevURL = people.previous;
        category = category.toUpperCase();


        document.getElementById('dispData').innerHTML = `<span><b>Name: </b></span>`+ people.results[0].name + 
        `<br><span><b>Height: </b></span>`+ people.results[0].height +
        `<br><span><b>Mass: </b></span>`+ people.results[0].mass +
        `<br><span><b>Hair Color: </b></span>`+ people.results[0].hair_color +
        `<br><span><b>Skin Color: </b></span>`+ people.results[0].skin_color +
        `<br><span><b>Eye Color: </b></span>`+ people.results[0].eye_color +
        `<br><span><b>Birth Year: </b></span>`+ people.results[0].birth_yearr +
        `<br><span><b>Gender: </b></span>`+ people.results[0].gender +
        `<br><span><b>Home World: </b></span>`+ people.results[0].homeworld +
        `<br><span><b>films: </b></span>`+ people.results[0].films +
        `<br><span><b>Species: </b></span>`+ people.results[0].species +
        `<br><span><b>Vehicles: </b></span>`+ people.results[0].vehicles 
        ;
    })
    .catch((error) =>{
        return;
    }) 
}

function setSearch() {
    document.getElementById('msg').innerHTML = ''; 
    category = document.getElementById('searchCategory').value;
    const schName = document.getElementById('searchName').value;
    if(category == 'none'){
        document.getElementById('msg').innerHTML = "Choose a category";
        return;  
    }
    else{getData()}
    if(schName == 'all' || schName == ''){
        url = 'https://swapi.co/api/' + category + '/?format=json';
    }
    else{
        url = 'https://swapi.co/api/' + category + '/?search=' + schName
        getIndividualItem()
    }

    console.log(url);
    
}
