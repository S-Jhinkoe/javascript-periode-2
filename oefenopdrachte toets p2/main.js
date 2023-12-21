const bitcoinwaarden = [ 40604, 40648, 38275, 30386, 39445, 39121, 38494];

let gemiddelde = 0;
let hoogste = bitcoinwaarden[0];
let laagste = bitcoinwaarden[0];

for (let i = 0; i < bitcoinwaarden.length; i++) {
    gemiddelde += bitcoinwaarden[i];
    
    if (bitcoinwaarden[i] > hoogste){
        hoogste = bitcoinwaarden[i];
    } 

    if (bitcoinwaarden[i] < laagste){
        laagste = bitcoinwaarden[i];
    }
};

gemiddelde /= bitcoinwaarden.length;

console.log("gemiddelde bitcoin waarde:", gemiddelde);
console.log("hoogste bitcoinwaarden:", hoogste);
console.log("laagste bitcoinwaarden:", laagste);

document.querySelector(".waarde1").innerHTML = "gemiddelde bitcoin waarden:" + "$" + gemiddelde;
document.querySelector(".waarde2").innerHTML = "hoogste bitcoin waarden:" + "$" + hoogste;
document.querySelector(".waarde3").innerHTML = "laagste bitcoin waarden:" + "$" + laagste;
///////////////////////////////////////////////////////////////////////////////////////////////////

const beroepen = [
    {beroep: "Automonteur", salaris: 2000},
    {beroep: "Aptheker", salaris: 3450},
    {beroep: "Bouwvakker", salaris:1650},
    {beroep: "Electricien", salaris:2200},
    {beroep: "Kinderopvang", salaris:1890},
    {beroep: "Metselaar", salaris:2400},
    {beroep: "Timmerman", salaris:2300}
];

let totaalSalaris = 0;
let gemiddeldeSalaris = 0;
let hoogsteSalaris = beroepen[0];
let laagsteSalaris = beroepen[0];

for (let i  = 0; i < beroepen.length; i++) {
    totaalSalaris += beroepen[i].salaris;
    
    if(hoogsteSalaris.salaris < beroepen[i].salaris){
        hoogsteSalaris = beroepen[i];
    }

    if (laagsteSalaris.salaris > beroepen[i].salaris) {
        laagsteSalaris = beroepen[i];
    }
}

gemiddeldeSalaris = totaalSalaris / beroepen.length;

console.log("totaal salaris:", totaalSalaris);
console.log("gemiddelde salaris:", gemiddeldeSalaris);
console.log("Meest betaalde beroep:", hoogsteSalaris.beroep);
console.log("Minst betaalde beroep:", laagsteSalaris.beroep);
//////////////////////////////////////////////////////////////////////////
function validateForm() {
    let usernameInput = document.getElementById('username');
    let emailInput = document.getElementById('email');

   
    usernameInput.classList.remove('error', 'success');
    emailInput.classList.remove('error', 'success');


    if (usernameInput.value.length < 3) {
      usernameInput.classList.add('error');
    } else {
      usernameInput.classList.add('success');
    }

   
    if (emailInput.value.length < 1) {
      emailInput.classList.add('error');
    } else {
      emailInput.classList.add('success');
    }
  }