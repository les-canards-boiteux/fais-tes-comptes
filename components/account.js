/*jshint esversion: 6 */

import { uniqueId } from './utils/generator.js';

class Account {
    constructor({ name = "New account", balance = 0 }) {
        this.name = name;
        this.id = uniqueId();
        this.balance = balance;
        this.history = [];
    }

    operation(amount) {
        this.balance += amount;
        this.addHistory(amount);
    }

    addHistory(amount) {
        this.history.push(new Operation(amount));
    }
}

export { Account };