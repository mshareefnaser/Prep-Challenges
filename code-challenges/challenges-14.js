'use strict';

// Resource:
// split: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
// slice: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
// splice: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
// indexOf: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
// lastIndexOf: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf
// join: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:
//
// Using the slice and indexOf/lastIndexOf methods, return the last word in a string
//
// Note: consider that the string may have one word but never empty
//
// Input: "I did my waiting 12 years of it in Azkaban"
// Output: "Azkaban"
//
// Input: "Impossible"
// Output: "Impossible"
//

const LastWord = (str) => {
    // write your code here
    const lastWordIndex = str.lastIndexOf(' ') + 1;
    if (lastWordIndex == 0)
        return str;
    else
        return str.slice(lastWordIndex);
}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Required:
//
//  You can try to do the same task using the split method
//
//  Input: "you dare use my spells against me, potter"
//  Output: "potter"

const LastWord_2 = (str) => {
    // write your code here
    const words = str.split(' ');
    return words[words.length - 1];
}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// Required:
//
// Number 2 was easy right?, ok then using the splice method replace all the "I" with "We", "am" with "are" and "was" with "were"
//
// Note: you may use another method for search (indexOf)
//
// Input:  "I thought you had a plan"
// Output: "We thought you had a plan"
//
// Input: "I was there 3000 years ago"
// Output: "We were there 3000 years ago"

// Input: "I am Venom"
// Output: "We are Venom"
//
//I >> We, am >> are, was >> were

const replaceWords = (str) => {
    // write your code here
    let arr = str.split(' ');
    const I_index = arr.indexOf('I');
    const am_index = arr.indexOf('am');
    const was_index = arr.indexOf('was');

    if (I_index !== -1)
        arr.splice(I_index, 1, 'We');
    if (am_index !== -1)
        arr.splice(am_index, 1, 'are');
    if (was_index !== -1)
        arr.splice(was_index, 1, 'were');


    return arr.join(' ');

}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 04:
// Optional:
//
// Write a function that "joins" the array of words together and puts a comma "," after every five words
//
// Input:["move","it","away","from","the","street"] 
// Output: "move it away from the, street" 
//

const arrToStr = (arr) => {
    // write your code here
    arr[4] = arr[4] + ',';
    return arr.join(' ');
}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 05:
// Optional:
//
// Simon got a string manipulation question for his interview,
// it asked him to replace the duplicated letters in a string to an indicator and counter
// as in the example:
//
// Input:"aaaa bbb sdf"
// Output: "a4 b3 s1d1f1"
//
// Input:"door"
// Output: "d1o2r1"
//
// help him by writing the function
//

const letterCounter = (str) => {
    // write your code here
    let words = str.split(' ');
    for (let i=0; i<words.length; i++)
    {
        
    }
    // words.forEach(word => {
    //     let letters = word.split('');
    //     letters.forEach((letter, index) => {
    //         let counter = 1;
    //         while (letter == letters[index + 1]) {
    //             counter++;
    //             letters.splice(index + 1, 1);
    //         }
    //         let letterWithCounter = letter + "" + counter;
    //         letters.splice(index, 1, letterWithCounter)
    //     })
    //     word = letters.join('');
    // });
    // let result=words.join(' ');
    // return result;
}
// -------------------------------------------------------------------------------------------------------


module.exports = { LastWord, LastWord_2, replaceWords, arrToStr, letterCounter };