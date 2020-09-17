const form = document.forms['hero'];
form.heroName.addEventListener('keyup',disableSubmit,false);
form.heroName.addEventListener('keyup',validateInline,false);
//form.addEventListener('submit',validate,false);
form.addEventListener('submit', makeHero, false);
document.forms.hero.powers[0].checked = true;

const label = form.querySelector('label');
const error = document.createElement('div');
error.classList.add('error');
error.textContent = '! Your name is not allowed to start with X.';
label.append(error);

function validateInline() {
    const heroName = this.value.toUpperCase();
    if(heroName.startsWith('X')){
    error.style.display = 'block';
    } else {
    error.style.display = 'none';
    }
}

function disableSubmit(event) {
    if(event.target.value === ''){
        document.getElementById('submit').disabled = true;
    } else {
        document.getElementById('submit').disabled = false;
    }
}

// function validate(event) {
//     const firstLetter = form.heroName.value[0];
//     if (firstLetter.toUpperCase() === 'X') {
//         event.preventDefault();
//         alert('Your name is not allowed to start with X!');
//     }
// }

function makeHero(event) {
    event.preventDefault(); // prevent the form from being submitted
    const hero = {}; // create an empty object
    hero.name = form.heroName.value; // create a name property based on the input field's value
    hero.realName = form.realName.value;
    // hero.powers = [];
    // for (let i = 0; i < form.powers.length; i++) {
    //     if (form.powers[i].checked) {
    //         hero.powers.push(form.powers[i].value);
    //     }
    // }
    hero.powers = [...form.powers].filter(box => box.checked).map(box => box.value);
    hero.category = form.category.value;
    hero.age = form.age.value;
    hero.city = form.city.value;
    hero.origin = form.origin.value;
    alert(JSON.stringify(hero)); // convert object to JSON string and display in alert dialog
    return hero;
}

//JavaScript for search.html:
// const form = document.forms['search'];
// const input = form.elements.searchInput;
// form.addEventListener ('submit', search, false);
// function search() {
//     alert(`You Searched for: ${input.value}`);
//     event.preventDefault();
// }
// input.value = 'Search Here';
// input.addEventListener('focus', function() {
//     if (input.value==='Search Here') {
//         input.value = ''
//     }
// }, false);

// input.addEventListener('blur', function() {
//     if (input.value==='') {
//         input.value = 'Search Here';
//     }
// }, false);