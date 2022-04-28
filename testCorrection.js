const User = require('./app/models/user');
const Tag = require('./app/models/tag');

const userObj = {
    id: 1,
    email: 'laurent@oclock.io',
    password: 'password',
    firstName: 'Laurent',
    lastName: 'Oclock',
};

const user = new User(userObj);

console.log(user.fullName);

const tag = new Tag({ id: 25, name: 'astologie' });
console.log(tag);

// function addition(obj) {
//     return obj.a + obj.b;
// }

// add({ a: 25, b: 36 });
