/*jshint esversion: 6 */

import { Account } from "./components/account.js";
import { Operation } from "./components/operation.js";

let accounts = [];

function init(){
    loadJSON().then((jsonFile) => {
        initAccounts(JSON.parse(jsonFile.target.response).accounts);
        render();
    });
    document.getElementById("newOperation").onclick = addOperation;
}

function loadJSON(){
    return new Promise(function(resolve, reject){
        let xhr = new XMLHttpRequest();
        xhr.overrideMimeType("application/json");
        xhr.open('GET', './config/database.json', true);
        xhr.onload = resolve;
        xhr.onerror = reject;
        xhr.send();
    });
}

function initAccounts(jsonData) {
    console.log(jsonData);
    jsonData.forEach(account => {
        let history = [];
        account.history.forEach(operation => {
            history.push(new Operation({
                "amount": operation.amount,
                "date": operation.date,
                "confirmed": operation.confirmed
            }));
        });
        accounts.push(new Account({ 
            "name": account.name, 
            "balance": account.balance, 
            "history": history
        }));
    });
    console.log(accounts);
}

function render(){
    console.log("render");
    document.getElementById("account_name_1").innerHTML = accounts[0].name;
    document.getElementById("account_balance_1").innerHTML = accounts[0].balance;
    let history = document.getElementById("account_history_1");
    history.innerHTML = '';
    accounts[0].history.forEach(element => {
        history.innerHTML += "<tr><td>"+ element.amount +"</td><td>"+ new Date(element.date).toLocaleDateString() +"</td><td>"+ element.confirmed +"</td></tr>";
    });
}

function addOperation() {
    console.log("addOperation");
    let targetAccount = accounts[0];
    targetAccount.operation(document.getElementById("op_amount").value);
    render();
    console.log(accounts);
}

init();