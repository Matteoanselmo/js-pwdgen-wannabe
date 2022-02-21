const firstName= prompt(`Dimmi il tuo Nome`);
console.log(firstName);
document.getElementById("my-name") .innerHTML = firstName;

const lastName= prompt(`Dimmi il tuo cognome`);
console.log(lastName);
document.getElementById("my-lastname") .innerHTML = lastName;

const preferitColor= prompt(`Dimmi il tuo colore preferito`);
console.log(preferitColor);
document.getElementById("my-color") .innerHTML = preferitColor;