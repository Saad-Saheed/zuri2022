const person = {
    name: ' Saad Saheed',
    height: ' 6.8Ft Tall',
    country: ' Nigeria'
};

let pname = document.querySelector('#name');
let height = document.querySelector('#height');
let country = document.querySelector('#country');

pname.innerText += person.name;
height.innerText += person.height;
country.innerText += person.country;