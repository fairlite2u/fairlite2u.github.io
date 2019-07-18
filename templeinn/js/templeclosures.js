const requestURL = 'https://fairlite2u.github.io/templeinn/js/temples.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    let templedata = request.response; 
    let temples = templedata['temples'];
    let output = document.querySelector('.closurebox');
    console.log(templedata);
    for (let i = 0; i < temples.length; i++) {
        if (temples[i].name == "Los Angeles California Temple") {
            let templeclosures = temples[i].closures;
            let numclosures = 0; 
            for (let e = 0; e < templeclosures.length; e++) {
                let closures = templeclosures[numclosures];
                numclosures++;                 
                let list = document.createElement('ul');
                let listItem = document.createElement('li');
                listItem.textContent = closures;
                list.appendChild(listItem);
                output.appendChild(list);
            }
        }
    };

}