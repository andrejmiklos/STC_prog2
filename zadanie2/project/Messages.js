"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This class contains info about every message and makes it accessible
 */
class Messages {
    /**
     * Creates an instance of messages.
     * @param _messagemyFinalArray is input for making this variable more accesible in this exact class
     * @param _messageevens is input for making this variable more accessible in this exact class
     * @param _messageodds is input for making this variable more accessible in this exact class
     * @param _messageevensBy4 is input for making this variable more accessible in this exact class
     * @param _messageoddsBy7 is input for making this variable more accessible in this exact class
     */
    constructor(_messagemyFinalArray, _messageevens, _messageodds, _messageevensBy4, _messageoddsBy7) {
        this.messagemyFinalArray = _messagemyFinalArray;
        this.messageevens = _messageevens;
        this.messageodds = _messageodds;
        this.messageevensBy4 = _messageevensBy4;
        this.messageoddsBy7 = _messageoddsBy7;
    }
    /**
     * Public function which makes variable messagemyFinalArray accessible in other classes.
     * @returns my final array message
     */
    getMessageMyFinalArray() {
        return this.messagemyFinalArray;
    }
    /**
     * Public function which makes variable messageevens accessible in other classes.
     * @returns message evens
     */
    getMessageEvens() {
        return this.messageevens;
    }
    /**
     * Public function which makes variable messageodds accessible in other classes.
     * @returns message odds
     */
    getMessageOdds() {
        return this.messageodds;
    }
    /**
     * Public function which makes variable messageevensBy4 accessible in other classes.
     * @returns message evens by4
     */
    getMessageEvensBy4() {
        return this.messageevensBy4;
    }
    /**
     * Public function which makes variable messageoddsBy7 accessible in other classes.
     * @returns message odds by7
     */
    getMessageOddsBy7() {
        return this.messageoddsBy7;
    }
}
//exports class
exports.default = Messages;
