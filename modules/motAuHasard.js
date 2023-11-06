let motDecoupe = "";
let tailleDuMot = "";
let nbLettres = document.getElementById("nbLettres");
let motSecret = document.getElementById("motSecret");

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
            motSecret.textContent = motDecoupe;
        }
    } catch (error) {
        console.log(error);
    }
}