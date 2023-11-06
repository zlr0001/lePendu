/*import {motHasard} from "./modules/motAuHasard.js";

motHasard();*/


let imgPendu = document.getElementById("imagePendu");
let nbCoupJoue = document.getElementById("nbCoups");
let motSecret = document.getElementById("motSecret");
let inputReponse = document.getElementById("textResponse");
let btnSubmit = document.getElementById("btnSubmit");

let motDecoupe = "";
let tailleDuMot = "";
let nbLettres = document.getElementById("nbLettres");




const tailleHasard = () => {
    tailleDuMot = Math.floor(Math.random() * 7) + 6;
    nbLettres.textContent = tailleDuMot;
};

tailleHasard();

let url = `https://trouve-mot.fr/api/size/${tailleDuMot}/1`;

export async function motHasard() {
    try {
        const requete = await fetch(url, {
            method: "GET"
        });

        if (!requete.ok) {
            console.log("Problème lors de récupération des données via : url");
        } else {
            let donnees = await requete.json();
            motDecoupe = donnees[0].name.split("");
            motSecret.innerHTML = motDecoupe;
            console.log(motSecret);
        }
    } catch (error) {
        console.log(error);
    }
}

motHasard();


btnSubmit.addEventListener("click", () => {
    let reponseEntree = inputReponse.value.split("");
    let recompositionReponse = reponseEntree.join();
    console.log(recompositionReponse);
    console.log(motSecret);
    if (recompositionReponse === motSecret.textContent) {
        console.log("oui");
    } else {
        console.log("non");
    }
});