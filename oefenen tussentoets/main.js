//////opdr1
let word = "auto";
let cancel = "quit";
function myFunction() {
    

    while (true) {
        let person = prompt("Type een woord");
if (person === cancel){
    break;
}
        if (person === word) {
            alert("Correct woord!");
            break;
        } else { 
            alert("Probeer het opnieuw. Poging: ");
        }
    }
    
}

    

   
/////////////opdr2

//gedaan in opdracht 1







/////////opdr3
const temp = [];
temp[0] = 3.6; ////januari///
temp[1] = 3.9; ///februari
temp[2] = 6.5;   ////maart///
temp[3] = 9.9; ///april///
temp[4] = 13.4; ////mei//
temp[5] = 16.2; //juni//
temp[6] = 18.3; ///juli///
temp[7] = 17.9; ///augustus///
temp[8] = 14.7; //september///
temp[9] = 10.9; ///oktober///
temp[10] = 7.0; ///november///
temp[11] = 4.2; /// december///

console.log('warmste',temp[6]);
console.log('koudste',temp[0]);
console.log('Alles boven 10 graden',temp[4],temp[5],temp[6],temp[7],temp[8],temp[9]);
////opdr4
document.getElementById("0").innerHTML = "januari:"+ " " +temp[0]+" "+"graden";
document.getElementById("1").innerHTML = "februari:"+ " " +temp[1]+" "+"graden";
document.getElementById("2").innerHTML = "maart:"+ " " +temp[2]+" "+"graden";
document.getElementById("3").innerHTML = "april:"+ " " +temp[3]+" "+"graden";
document.getElementById("4").innerHTML = "mei:"+ " " +temp[4]+" "+"graden";
document.getElementById("5").innerHTML = "juni:"+ " " +temp[5]+" "+"graden";
document.getElementById("6").innerHTML = "juli:"+ " " +temp[6]+" "+"graden";
document.getElementById("7").innerHTML = "augustus:"+ " " +temp[7]+" "+"graden";
document.getElementById("8").innerHTML = "september:"+ " " +temp[8]+" "+"graden";
document.getElementById("9").innerHTML = "oktober:"+ " " +temp[9]+" "+"graden";
document.getElementById("10").innerHTML = "november:"+ " " +temp[10]+" "+"graden";
document.getElementById("11").innerHTML = "december:"+ " " +temp[11]+" "+"graden";

////opdr5



////opdr6
const btnCard = document.querySelector(".btnCard");
const container = document.querySelector(".container");
btnCard.addEventListener('click',function(){
const message = prompt("typ een bericht in");

})