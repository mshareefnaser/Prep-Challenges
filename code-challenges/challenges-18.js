'use strict';

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:
//
// Given a string find the length of the middle word in the sentence
//
// Ex:
// Input: "You can't handle the truth!"
// Output: 6
//
// Input: "You're gonna need a bigger boat"
// Output: 1
//

const wordLength = (str) => {
    // write your code here
    let words=str.split(' ');
    let index=0;
    if (words.length%2==0)
        index=words.length/2;
    else
        index=Math.floor(words.length/2);
        console.log(index);
    return words[index].length;
}
// -------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Required:
//
// Write a function that takes two strings and checks if the two strings contain the same combination of letters
//
// Ex:
// Input: "dad", "add"
// Output: true
//
// Input: "dad", "aadd"
// Output: false
//
// Input: "table", "label"
// Output: false
//
// Input: "cat", "rat"
// Output: false

const wordLetters = (str1, str2) => {
    // write your code here
    //get unique letters
    //sort them
    //compare two arrays
    let arr1=str1.split('');
    let arr2=str2.split('');
    let unique1=arr1.filter((letter)=>{
        if (arr1.indexOf(letter)==arr1.lastIndexOf(letter))
            return true;
    })
    let unique2=arr2.filter((letter)=>{
        if (arr2.indexOf(letter)==arr2.lastIndexOf(letter))
            return true;
    })
    if (unique1.length==unique2.length)
    {
        let sortedUnique1=unique1.sort().toString();
        let sortedUnique2=unique2.sort().toString();
        if(sortedUnique1==sortedUnique2)
        return true;
        else 
        return false;z
    }
    else 
    return false;

}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// Optional:
//
// Write a function that takes an integer and a sorted array
// The function returns the index of the integer in the array
// If the integer was not there, the function returns where it could have been
//
// Ex:
// Input: [1,3,5,6], 5
// Output: 2
//
// Input: [1,3,5,6], 2
// Output: 1
//
// Input: [1,3,5,6], 7
// Output: 4
//

const targetIndex = (arr, int) => {
    // write your code here
    let index=0;
    for (let i=0; i<arr.length; i++)
    {
        if (arr[i]==int)
        {index=i;
        break;}
        else if (arr[i]>int)
        {index=i; 
        break;}
        else if (arr[arr.length-1]<int)
        index=arr.length;
    }
    return index;
}
// -------------------------------------------------------------------------------------------------------

module.exports = { wordLength, wordLetters, targetIndex };