/*import {motHasard} from "./modules/motAuHasard.js";

motHasard();*/


let imgPendu = document.getElementById("imagePendu");
let nbCoupJoue = Number(document.getElementById("nbCoups"));
let motSecret = document.getElementById("motSecret");
let forms = document.getElementById("forms");
let inputReponse = document.getElementById("textResponse");
let btnSubmit = document.getElementById("btnSubmit");
let tried = document.getElementById("tried");

let motDecoupe = "";
let tailleDuMot = "";
let nbLettres = document.getElementById("nbLettres");



// fonction: choisir la taille du mot au hasard + l'afficher sur index.html
const tailleHasard = () => {
    tailleDuMot = Math.floor(Math.random() * 7) + 6;
    nbLettres.textContent = tailleDuMot;
};


// fonction: api fetch pour obtenir un mot au hasard + ajout du mot sur l'index.html en display hidden
export async function motHasard() {
    let url = `https://trouve-mot.fr/api/size/${tailleDuMot}/1`;
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

tailleHasard();
motHasard();

forms.addEventListener("submit", (event) => {
    event.preventDefault();
    let reponseEntree = inputReponse.value.split("");
    let recompositionReponse = reponseEntree.join();
    console.log(recompositionReponse);
    console.log(motSecret);
    if (recompositionReponse === motSecret.textContent) {
        console.log("oui");
    } else {
        console.log("non");
        for (let i = 0; i < inputReponse.value.length; i++) {
            if (i+1 === inputReponse.value.length) {
                let coups = document.createElement("span");
                coups.innerHTML = `${inputReponse.value[i]}<br>`;
                tried.append(coups);
            } else {
                let coups = document.createElement("span");
                coups.innerHTML = `${inputReponse.value[i]}`;
                tried.append(coups);
            }
        }
        // coups.innerHTML = `${inputReponse.value}`;
        // tried.append(coups);
    }
});