const firstName= prompt(`Dimmi il tuo Nome`);
console.log(firstName);

const lastName= prompt(`Dimmi il tuo cognome`);
console.log(lastName);

const preferitColor= prompt(`Dimmi il tuo colore preferito`);
console.log(preferitColor);

document.getElementById("my-password") .innerHTML = ( firstName + lastName + preferitColor + "21" );