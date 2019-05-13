/*jshint esversion: 6 */

import { Account } from "./components/account";
// import { Operation } from "./components/operation";

let accounts = [];

function init(){
    loadJSON().then((jsonFile) => {
        initAccounts(JSON.parse(jsonFile.target.response).accounts);
    });
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
    accounts.push = new Account({ 
        "name": jsonData[0].name, 
        "balance": jsonData[0].balance, 
        "history": jsonData[0].history 
    });
    console.log(accounts);
}

init();