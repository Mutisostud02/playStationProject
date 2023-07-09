const name = 'Christopher';

function myAge(age){
    return (`My name is ${name}, I am ${age} years old.`);
}

const heading = document.querySelector('.heading');
const explanation = document.querySelector('.expl');
const intro = document.createElement('p');
intro.classList.add('intro');
heading.insertBefore(intro,explanation);
console.log(heading);
intro.textContent = myAge(23);

