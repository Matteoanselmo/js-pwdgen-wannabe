/*da prompt chiedo il nome e lo assengo alla costante*/
const firstName= prompt(`Dimmi il tuo Nome`);
console.log(firstName);
/*da prompt chiedo il cognome e lo assengo alla costante*/
const lastName= prompt(`Dimmi il tuo cognome`);
console.log(lastName);
/*da prompt chiedo il colore preferito e lo assengo alla costante*/
const preferitColor= prompt(`Dimmi il tuo colore preferito`);
console.log(preferitColor);
/*sovrascrivo tramite id la somma delle costanti + 21*/
document.getElementById("my-password") .innerHTML = ( firstName + lastName + preferitColor + "21" );