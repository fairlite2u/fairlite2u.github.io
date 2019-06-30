const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    let towndata = request.response;
    let towns = towndata['towns'];

    let output = document.querySelector('.eventlist');

    towns.forEach(town => {
        if (town.name == "Preston" || town.name == "Soda Springs" || town.name == "Fish Haven") {
            let list = document.createElement('li');

            list.textContent = town.events;

            output.appendChild(list);
        };
        
    });
    for (var i = 0; i < events.length; i++) {
        var myList = document.createElement('li');

        var townevents = town[i].events;
        for (var j = 0; j < events.length; j++) {
            var listItem = document.createElement('li');
            listItem.textContent = superPowers[j];
            myList.appendChild(listItem);
        }

        myArticle.appendChild(myList);

    }
}