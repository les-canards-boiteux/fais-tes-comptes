/*jshint esversion: 6 */

import { uniqueId } from '../utils/generator.js';
import { Operation } from '../components/operation.js';

class Account {
    constructor({ name = "New account", balance = 0, history = [] }) {
        this.name = name;
        this.id = uniqueId();
        this.balance = balance;
        this.history = history;
    }

    operation(amount) {
        console.log("Operation");
        amount = parseFloat(amount);
        this.balance += amount;
        this.addHistory(amount);
    }

    addHistory(amount) {
        this.history.push(new Operation({"amount": amount}));
    }

    getName(){
        return name;
    }

    getBalance() {
        return balance;
    }

    getHistory() {
        return history;
    }
}

export { Account };