// const find = require('./people');

// console.log(find.people,find.ages);

// to require certin object======>ex:people var from people.js

// const {people} = require('./people');
//  console.log(people);

// const {ages} = require('./people');
// const {people,ages} = require('./people');
// console.log(people,ages);

// we can require modules from nodejs such as OS

 const os= require('os');
// console.log(os);
console.log(os.platform(),os.homedir());
