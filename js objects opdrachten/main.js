////opdr1
let personOne = {
    firstname: "Donald",
    lastName: "Duck",
    age: 18,
    graduated: false,
}
console.log(personOne);
//////opdr2
let post = {
    username: "Donald",
    title: "Text1",
    verhaal: "story",
    date: "16 november",
    vieuws: 10000,
}
console.log(post);

////opdr 3
const recept = [
    {
        title: "choco vlokken",
        description: "Brood beleg",
        healthy: false,
    }
];

for (let i = 0; i < recept.length; i++) {
    const recpts = recept[i];

   console.log(recept);
}
//////opdr4
let bmw1 = {
    title: 'auto',
     description: 'mooie auto', 
     price: 8900.00, 
     kilometer: 173000,
    buildDate: 2011
}
////opdr5
let item = {
    title: "chips",
    description: "200 g",
    discount: "2 for $2",
    price: "$1.50",
}
console.log("product",item.title);
console.log("beschrijving",item.description);
console.log("korting",item.discount);
console.log("prijs",item.price);
console.log("------------------------------")
///opdr 7
const recept2 = [
    {
        title: "choco vlokken",
        description: "Brood beleg",
        healthy: false,
    }
];

for (let i = 0; i < recept.length; i++) {
    const recpts = recept[i];

    console.log("Productnaam", recpts.title)
    console.log("beschrijving", recpts.description)
    console.log("gezond", recpts.healthy)
    console.log("------------------------------")
}
