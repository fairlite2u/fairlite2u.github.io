const requestURL = 'https://fairlite2u.github.io/templeinn/js/temples.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    let templedata = request.response; 
    let temples = templedata['temples'];
    let output1 = document.querySelector('.closurebox1');
    let output2 = document.querySelector('.closurebox2');
    let output3 = document.querySelector('.closurebox3');
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
                output1.appendChild(list);
            }
        }
    };
    for (let i = 0; i < temples.length; i++) {
        if (temples[i].name == "Freiberg Germany Temple") {
            let templeclosures = temples[i].closures;
            let numclosures = 0; 
            for (let e = 0; e < templeclosures.length; e++) {
                let closures = templeclosures[numclosures];
                numclosures++;                 
                let list = document.createElement('ul');
                let listItem = document.createElement('li');
                listItem.textContent = closures;
                list.appendChild(listItem);
                output2.appendChild(list);
            }
        }
    };
    for (let i = 0; i < temples.length; i++) {
        if (temples[i].name == "Washington D.C. Temple") {
            let templeclosures = temples[i].closures;
            let numclosures = 0; 
            for (let e = 0; e < templeclosures.length; e++) {
                let closures = templeclosures[numclosures];
                numclosures++;                 
                let list = document.createElement('ul');
                let listItem = document.createElement('li');
                listItem.textContent = closures;
                list.appendChild(listItem);
                output3.appendChild(list);
            }
        }
    };
}