"use strict";
// BEFORE YOU RUN START, DO NOT FORGET THIS COMMAND: cd zadani2
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import class Messages from file
const Messages_1 = __importDefault(require("./Messages"));
// makes empty array called myFinalArray
let myFinalArray = [];
// makes empty array called evens
let evens = [];
// makes empty array called odds
let odds = [];
// makes empty array called evensBy4
let evensBy4 = [];
// makes empty array called oddsBy7
let oddsBy7 = [];
// makes variable of type Number which has strict value
let max = 10000;
/**
 * Makes variable called arrayInfo. It's type is Messages.
 * Variable contains different messages which we can call back later by their names.
 */
let arrayInfo = new Messages_1.default("This is array of random numbers:", "Those are even numbers:", "Those are odd numbers", "Those are even numbers divisible by number 4:", "Those are odd numbers divisible by number 7:");
/**
 * Gets random num
 * @param max This variable determines the max value of random number.
 * @returns  Function returns random number in range from 0 to 10 000.
 */
function getRandomNum(max) {
    return Math.floor(Math.random() * max);
}
/**
 * This function start function getRandomNum, gets it's return and pushes it to myFinalArray.
 */
function PUSH() {
    getRandomNum(max);
    let RandomNumber = getRandomNum(max);
    myFinalArray.push(RandomNumber);
}
/**
 * Defines how many times must function PUSH repeat. => This function repeats 100 times function PUSH.
 * @param times Nummber which index can not exceed.
 */
function repeat(times = 100) {
    for (let i = 0; i < times; i++) {
        PUSH();
    }
}
repeat();
/**
 * This function divides and pushes elements (numbers) from myFinalArray to arays evens and odds.
 * It is based on logical test.
 */
function divide() {
    myFinalArray.forEach(element => {
        if (element % 2 == 0) {
            evens.push(element);
        }
        else {
            odds.push(element);
        }
    });
}
divide();
/**
 * This function gets numbers divisible by 4 and 7.
 * Every element of @param evens is taken to logical test. If element passes the logical test, it is pushed to @param evensBy4 (array of numbers divisible by 4).
 * Every element of @param odds is taken to logical test. If element passes the logical test, it is pushed to @param oddsBy7 (array of numbers divisible by 7).
 */
function getNumbsDivisibleBy() {
    evens.forEach(element => {
        if (element % 4 == 0) {
            evensBy4.push(element);
        }
    });
    odds.forEach(element => {
        if (element % 7 == 0) {
            oddsBy7.push(element);
        }
    });
}
getNumbsDivisibleBy();
let OutputsResum = {
    resumMessage: "Total number of arrays:",
    resumNumber: 5,
};
// Shows array myFinalArray and it's message.
console.log(arrayInfo.getMessageMyFinalArray(), myFinalArray);
// Shows array evens and it's message.
console.log(arrayInfo.getMessageEvens(), evens);
// Shows array odds and it's message.
console.log(arrayInfo.getMessageOdds(), odds);
// Shows array evensBy4 and it's message.
console.log(arrayInfo.getMessageEvensBy4(), evensBy4);
// Shows array oddsBy7 and it's message.
console.log(arrayInfo.getMessageOddsBy7(), oddsBy7);
// Shows resumMessage and resumNumber. Both are
console.log(OutputsResum.resumMessage, OutputsResum.resumNumber);
