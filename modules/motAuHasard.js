let motDecoupe = "";
let tailleDuMot = "";

const tailleHasard = () => {
    tailleDuMot = Math.floor(Math.random() * 7) + 6;
    console.log(tailleDuMot);
};

tailleHasard();

let url = `https://trouve-mot.fr/api/size/${tailleDuMot}/1`;

export async function motHasard() {
    const requete = await fetch(url, {
        method: "GET"
    });
    
    if (!requete.ok) {
        console.log("Problème lors de récupération des données via : url");
    } else {
        let donnees = await requete.json();
        console.log(donnees[0].name);
        motDecoupe = donnees[0].name.split("");
        console.log(donnees[0].name.split(""));
    }
}