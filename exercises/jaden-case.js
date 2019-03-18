'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */



function jadenCase(str){
let hop=str.split(" ");
let upper=[];

for(let i =0; i<hop.length;i++){

upper.push(hop[i][0].toUpperCase() + hop[i].substring(1)) ;}

return upper.join(" ");

}

//* Begin of tests
const assert = require('assert')
assert.strictEqual(jadenCase("How can mirrors be real if our eyes aren't real"), "How Can Mirrors Be Real If Our Eyes Aren't Real");
