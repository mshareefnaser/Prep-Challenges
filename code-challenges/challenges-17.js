'use strict';

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:
//
// referring to the given examples find out the pattern used and
// Write a function that takes 2 integers and prints the patterns using recursion
// 
// Input: 16, 5
// Output: [16, 11, 6, 1, -4, 1, 6, 11, 16]
//
// Input: 50, 9
// Output: [50, 41, 32, 23, 14, 5, -4, 5, 14, 23, 32, 41, 50]
//

const recursionPattern = (int1, int2) => {
    // write your code here
    let arr=[];
    sub(int1,int2);
    add(arr[arr.length-1],int2)
    function sub(int1,int2)
    {
        arr.push (int1);
        if (int1<0)
        return arr;
        else return sub(int1-int2,int2);
    }
    function add(int1,int2)
    {
        if ((int1>0)&&(int1<=arr[0]))
        arr.push (int1);
        if (int1==arr[0])
        return arr;
        else return add(int1+int2,int2);
    }
    return arr;
};
        
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Required:
// 
// Write a function that takes a string (HTML tag)
// and extracts the link from the HTML tag
//
// Ex: <a href="http://www.hackerrank.com"><h1><b>HackerRank</b></h1></a> ==> "www.hackerrank.com"
// Ex: <a href="http://www.something.org"><h1><b>HackerRank</b></h1></a> ==> "www.something.org"
//
// Note:
//  Assume that links end with .com, .org or .net
// 

const filterLinks = (str) => {
    // write your code here
    const HTag=str.split("");
    const startRange=HTag.indexOf('"');
    const endRange=HTag.lastIndexOf('"');
    let linkArr=HTag.slice(startRange+8,endRange);
    let result = linkArr.join("");
    return result;
}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// Required:
// 
// A phrase is considered palindrome if, after converting all uppercase letters into lowercase letters
// and removing all non-alphanumeric characters, it reads the same forward and backward.
// Alphanumeric characters include letters and numbers.
// Given a string s, return true if it is a palindrome, or false otherwise.
// 
// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// as you can see "amanaplanacanalpanama" is a palindrome.
//

const isPalindrome = (str) => {
    // write your code here
    let lowerStr=str.toLowerCase();
    let chars=lowerStr.split('');
    let letters=chars.filter((letter)=>{
    return letter.match(/[a-z]/i);
    })
    let length=Math.ceil(letters.length/2);
    for (let i=0;i<length; i++)
    {
        if (letters[i]!=letters[letters.length-1-i])
        return false;
    }
    return true;
}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 04:
// Optional:
// 
//  Write a function that takes 2 arguments, one is a string and the other is an array
//  the function should return a boolean than indicates if both have the same pattern
//
//  EX: 
//  Input: "abba", ['cat', 'dog', 'dog', 'cat']
//  output: true
//
//  as you can see the a acted as the cat in the array, and b as the dog, and the pattern was the same
//
//  Input: "cda", ['cat', 'dog', 'cat']
//  output: false
//
//  here if the pattern had three different things so the array should had 3 different things to be true
//

const samePattern = (str, arr) => {
    // write your code here
    let pattern=str.split('');
    let exisitingLetters=pattern.filter((letter,index)=>{
        if (pattern.lastIndexOf(letter)==index)
        return true;
    })
    let exisitingElements=arr.filter((element,index)=>{
        if (arr.lastIndexOf(element)==index)
        return true;
    })
  if (exisitingLetters.length !== exisitingElements.length)
    return false;
  
    let pairs=exisitingElements.map((elem,index)=>{
        return {"element":elem,"letter":exisitingLetters[index]};
    })
    let idx=0;
    for (let i=0; i<pattern.length; i++)
    {
        idx=exisitingLetters.indexOf(pattern[i]);
        if (pattern[i]!=pairs[idx].letter)
        return false;
    }
    return true;
}
// -------------------------------------------------------------------------------------------------------


module.exports = { recursionPattern, filterLinks, isPalindrome, samePattern };