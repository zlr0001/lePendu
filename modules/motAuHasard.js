let url = `https://trouve-mot.fr/api/size/10/1`;

export async function motHasard() {
    const requete = await fetch(url, {
        method: "GET"
    });
    
    if (!requete.ok) {
        console.log("Problème lors de récupération des données via : url");
    } else {
        let donnees = await requete.json();
        console.log(donnees[0].name);
    }
}