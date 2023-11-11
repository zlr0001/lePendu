/*import {motHasard} from "./modules/motAuHasard.js";

motHasard();*/

let imgPendu = document.getElementById("imagePendu");
let categorie = document.getElementById("categorie");
let nbCoups = parseInt(document.getElementById("nbCoups").innerHTML);
let motSecret = document.getElementById("motSecret");
let forms = document.getElementById("forms");
let inputReponse = document.getElementById("textResponse");
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
            console.log(motDecoupe);
            motSecret.innerHTML = motDecoupe;
            categorie.innerHTML = donnees[0].categorie;
            inputReponse.setAttribute("maxlength",`${tailleDuMot}`);
            inputReponse.setAttribute("minlength",`${tailleDuMot}`);
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
    
    if (recompositionReponse === motSecret.textContent) {
        console.log("oui");
        inputReponse.setAttribute("disabled", "");
        inputReponse.value = "Bravo !";
    } else {
        console.log("non");
        let comparaison = [];
        for (let i = 0; i < reponseEntree.length; i++) {
            if (motDecoupe.includes(reponseEntree[i])) {
                comparaison.push(inputReponse.value[i]);
            } else {
                comparaison.push("-");
            }
        }

        for (let i = 0; i < motDecoupe.length; i++) {
            if (comparaison[i] !== motDecoupe[i]) {
                comparaison[i] = "-";
            }
        }
        
        tried.append(comparaison);
        let retourLigne = document.createElement("br");
        tried.append(retourLigne);
        inputReponse.value = "";
        nbCoups = nbCoups + 1;
    }
    nouvelleImage();
});

const nouvelleImage = () => {
    switch (nbCoups) {
        case 1:
            imgPendu.setAttribute("src", "sources/images/pendu1.png");
            break;
        case 2:
            imgPendu.setAttribute("src", "sources/images/pendu2.png");
            break;
        case 3:
            imgPendu.setAttribute("src", "sources/images/pendu3.png");
            break;
        case 4:
            imgPendu.setAttribute("src", "sources/images/pendu4.png");
            break;
        case 5:
            imgPendu.setAttribute("src", "sources/images/pendu5.png");
            break;
        case 6:
            imgPendu.setAttribute("src", "sources/images/pendu6.png");
            break;
        default:
            imgPendu.setAttribute("src", "sources/images/DevinezLeMot.png");
    }
};