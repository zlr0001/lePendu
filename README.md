# Le pendu

## Les technologies
Ce projet utilise trois languages :
- HTML
- CSS
- Javascript

Pour la gestion de projet, git et github ont été utilisés.

## Le font-end

### Général
#### Couleurs
J'ai opté pour une palette de couleurs assez populaire de colorhunt.co. Mon objectif était d'avoir des couleurs
contrastées afin de faciliter l'accessibilité pour les utilisateurs.
L'interface est assez basique afin d'aller vers l'essentiel, qui est le jeu.

#### Organisation de la page
La taille d'entête, contenu et pied de page sont proportionnels et conservent la même taille selon la résolution d'écran.
Le pied de page est fixé en bas, nous sommes obligés de défiler la page vers le bas pour le voir.

##### Display
Flexbox a été privilégié car la présentation de la page est basique.

### Mécanique de jeu
#### Image
Par défaut l'image principale affiche "devinez le mot secret", invitant ainsi l'utilisateur à jouer. Cette image est
rendue dynamique selon l'avancement dans le jeu.

#### Input par défaut
L'input comporte différentes options : 
- Focus qui le met en évidence lorsqu'il est sélectionné.
- Minlength permet de limiter le nombre minimum de caractères entré (lié au mot secret).
- Maxlenth, comme le minlength mais limitant le nombre de caractères maximum.
- Required, afin d'obliger l'utilisateur à entrer un mot pour lancer le jeu.

## Le back-end

### Mécanique de jeu
Dans un premier temps une fonction tir au hasard un nombre compris entre 6 et 12. Ce chiffre correspond au nombre
de lettres du mot secret.

Par la suite, avec l'aide d'une requête fetch, un mot au hasard est tiré. L'API : https://trouve-mot.fr/. Via cette
requête un mot et le thème du mot sont reçus.

Tant que le joueur ne soumet pas un mot via le formulaire rien de spécial ne se passe. Néanmoins, s'il le fait,
un événement se déclenche, entrainant un algorithme :
1. Découpage du mot entré et du mot secret afin qu'ils soient au format : tableau.
2. Une condition de vérification pour voir si le mot entré est le bon ou non :
   * Si c'est le cas :
     * Verrouillage de l'input.
     * Affichage du mot "Bravo !" en couleur vert sur fond blanc.
     * Changement du texte sur le bouton vers "Ressayer".
     * Ajout d'un événement de soumission qui rafraîchi la page pour rejouer.
   * Si ce n'est pas le cas :
     * On entre dans une condition de vérification, comparant chaque lettre du mot entré avec le mot secret.
     * Si la lettre se trouve dans le mot alors elle est entrée dans un tableau. Sinon un tiret est entré.
     * Ensuite, une comparaison de la valeur de chaque index est faite du mot entré et du tableau ci-dessus. Si le
     caractère est différent alors un tiret ajouté. Ainsi nous obtenons un tableau où chaque bonne lettre est au bon index.
     * À chaque tentative, cette dernière est ajoutée dans une div, ainsi le joueur peut voir sa progression.
     * En parallèle, l'image change au fil de la progression.
   * Si le joueur fait six tentatives :
       * Verrouillage de l'input.
       * Affichage du mot "Perdu !" en couleur rouge sur fond blanc.
       * Changement du texte sur le bouton vers "Ressayer".
       * Ajout d'un événement de soumission qui rafraîchi la page pour rejouer.