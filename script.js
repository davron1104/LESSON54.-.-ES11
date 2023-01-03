'use strict';

// const box = document.querySelector('.box');
// const block = document.querySelector('.block');

// console.log(block);


// block?.textContent = '123';

console.log(1 + 2);

const userData = {
    name: 'Davron',
    age: null,
    say: function() {
        console.log('Say Hello!');
    }
};

userData.say();
userData.hey?.();

// if (userData && userData.skills && userData.skills.js) {
//     console.log(userData.skills.js);
// }

console.log(userData.skills?.js)