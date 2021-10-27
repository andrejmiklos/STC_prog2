/**
 * This class contains info about every message and makes it accessible
 */
class Messages {
    
    // makes private variables of type String
    private messagemyFinalArray: String;
    private messageevens: String;
    private messageodds: String;
    private messageevensBy4: String;
    private messageoddsBy7: String;

    /**
     * Creates an instance of messages.
     * @param _messagemyFinalArray is input for making this variable more accesible in this exact class
     * @param _messageevens is input for making this variable more accessible in this exact class
     * @param _messageodds is input for making this variable more accessible in this exact class
     * @param _messageevensBy4 is input for making this variable more accessible in this exact class
     * @param _messageoddsBy7 is input for making this variable more accessible in this exact class
     */
    constructor(_messagemyFinalArray: String, _messageevens: String, _messageodds: String, _messageevensBy4: String, _messageoddsBy7: String) {
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
    public getMessageMyFinalArray(): String {
        return this.messagemyFinalArray;
    }

    /**
     * Public function which makes variable messageevens accessible in other classes.
     * @returns message evens 
     */
    public getMessageEvens(): String {
        return this.messageevens;
    }

    /**
     * Public function which makes variable messageodds accessible in other classes.
     * @returns message odds 
     */
    public getMessageOdds(): String {
        return this.messageodds;
    }

    /**
     * Public function which makes variable messageevensBy4 accessible in other classes.
     * @returns message evens by4 
     */
    public getMessageEvensBy4(): String {
        return this.messageevensBy4;
    }

    /**
     * Public function which makes variable messageoddsBy7 accessible in other classes.
     * @returns message odds by7 
     */
    public getMessageOddsBy7(): String {
        return this.messageoddsBy7;
    }
}

//exports class
export default Messages;