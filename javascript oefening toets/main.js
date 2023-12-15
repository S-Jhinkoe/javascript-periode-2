const person1 = ["Donald", "Duck", 'voetbal'];


for (let i = 0; i < person1.length; i++) {
    const firstPerson = person1[i];
    const div = document.createElement("div");
    div.innerHTML = firstPerson
    document.body.appendChild(div);
};



const car1 = [
    { merk: "audi", model: "a3", bouwjaar: "2018", prijs: 20000 },
  ];
  
  for (let i = 0; i < car1.length; i++) {
    const firstCar = car1[i];
    const div = document.createElement("div");
    div.innerHTML = "Merk: " + firstCar.merk + "<br>" +
                    "Model: " + firstCar.model + "<br>" +
                    "Bouwjaar: " + firstCar.bouwjaar + "<br>" +
                    "Prijs: " + firstCar.prijs;
                  const g2 =  firstCar.prijs;
    document.body.appendChild(div);
    const car2= [
        {merk: "tesla", model:"x", bouwjaar:"2020", prijs: 31000}
    ];
    
    for (let i = 0; i < car2.length; i++) {
        const SecondCar = car2[i];
        const div = document.createElement("div");
        div.innerHTML = "Merk: " + SecondCar.merk + "<br>" +
                        "Model: " + SecondCar.model + "<br>" +
                        "Bouwjaar: " + SecondCar.bouwjaar + "<br>" +
                        "Prijs: " + SecondCar.prijs; 
                        document.getElementById("demo").innerHTML  = firstCar.prijs + SecondCar.prijs
        document.body.appendChild(div);}
       
        
}

 