import {motHasard} from "./modules/motAuHasard.js";

motHasard();

const imgPendu = document.getElementById("imagePendu");
const nbCoupJoue = document.getElementById("nbCoups")
const inputReponse = document.getElementById("textResponse");
const btnSubmit = document.getElementById("btnSubmit");

inputReponse.addEventListener("keyup", () => {
    let reponseEntree = inputReponse.value.split("");
    console.log(reponseEntree);
    reponseEntree.forEach((lettre) => {
        
    });
});