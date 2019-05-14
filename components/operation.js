/*jshint esversion: 6 */

class Operation {
    constructor({ amount, date = Date.now(), confirmed = false }){
        this.amount = amount;
        this.date = date;
        this.confirmed = confirmed;
    }

    switchConfirm() {
        this.confirmed = !this.confirmed;
    }
}

export { Operation };