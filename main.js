let solde = 2000;

document.getElementById("solde").innerHTML = solde;

function operation() {
    let montant = document.getElementById("montant").value;
    solde += parseInt(montant);
    document.getElementById("solde").innerHTML = solde;
    document.getElementById("montant").value = 0;
}



