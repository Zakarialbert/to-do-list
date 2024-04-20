
//apres avoir clique sur ajouter on ajoute la liste d'element
function create_element() {
    let heureDebut = document.getElementById("heureDebut").value;
    let heureFin = document.getElementById("heureFin").value;

    // Split des valeurs de l'heure de début
    let heureDebutSplit = heureDebut.split(":");
    let heureDebutHour = heureDebutSplit[0];
    let heureDebutMinute = heureDebutSplit[1];

    // Split des valeurs de l'heure de fin
    let heureFinSplit = heureFin.split(":");
    let heureFinHour = heureFinSplit[0];
    let heureFinMinute = heureFinSplit[1];

    let input_infos = document.getElementById('input-choice').value.trim();
    
    // Vérification si les valeurs d'heure sont définies et si le texte est mentionné
    if ((!heureDebutHour && !heureDebutMinute) || (!heureFinMinute && !heureFinHour) || !input_infos) {
        document.getElementById("heureDebut").style.border = "1px solid red";
        document.getElementById("heureFin").style.border = "1px solid red";
        console.log('Veuillez entrer une heure et un texte');
        return; 
    }else{
        document.getElementById("heureDebut").style.border = "1px solid green";
        document.getElementById("heureFin").style.border = "1px solid green";
    }

    const ajout_document = document.querySelector('#box_insert');

if (heureDebutHour && heureDebutMinute && heureFinHour && heureFinMinute && input_infos) {
    let boxInfos = document.createElement("div");
    boxInfos.classList.add("box_infos");

    let container = document.createElement("div");
    container.classList.add("container");

    let heure = document.createElement("div");
    heure.id = "heure";

    let heureDepart = document.createElement("div");
    heureDepart.id = "heure_depart";
    heureDepart.innerHTML = `<h1>${heureDebutHour}</h1><h4>${heureDebutMinute}</h4>`;

    let hr = document.createElement("hr");
    hr.setAttribute("color", "black");
    hr.setAttribute("height", "4cm");

    let heureFinal = document.createElement("div");
    heureFinal.id = "heure_final";
    heureFinal.innerHTML = `<h1>${heureFinHour}</h1><h4>${heureFinMinute}</h4>`;

    heure.appendChild(heureDepart);
    heure.appendChild(hr);
    heure.appendChild(heureFinal);

    let toDoTache = document.createElement("div");
    toDoTache.classList.add("to_do_tache");

    let text = document.createElement("div");
    text.classList.add("text");
    text.innerHTML = `<h1>${input_infos}</h1>`;

    let iconeToDo = document.createElement("div");
    iconeToDo.classList.add("icone_to_do");

    let iElement = document.createElement("i");
    iElement.classList.add("fi", "fi-sr-cross-circle");

    iconeToDo.appendChild(iElement);

    toDoTache.appendChild(text);
    toDoTache.appendChild(iconeToDo);

    container.appendChild(heure);
    container.appendChild(toDoTache);
    boxInfos.appendChild(container);
    ajout_document.appendChild(boxInfos);

    document.getElementById('input-choice').value = "";
    document.getElementById("heureDebut").value = '';
    document.getElementById("heureFin").value = '';}

    // Stockage des informations dans le LocalStorage
    localStorage.setItem('heureDebutHour', heureDebutHour);
    localStorage.setItem('heureDebutMinute', heureDebutMinute);
    localStorage.setItem('heureFinHour', heureFinHour);
    localStorage.setItem('heureFinMinute', heureFinMinute);
    localStorage.setItem('input_infos', input_infos);
}
window.onload = function(){
    create_element()
}




// Ajout de l'élément boxInfos au corps de la page

const icone = document.querySelector('#icone')

icone.addEventListener('click', create_element)






const demi_cercle = document.querySelectorAll('.demi-cercle');

const maintenant = new Date(); // ressort la date actuelle 
const heure_actuelle = maintenant.getHours();//methode qui ressort l'heure actuelle
const minute_actuelle = maintenant.getMinutes();//methode qui ressort les minutes actuelle 

//heure de debut par exemple d'une formation 
const heures_debut = 23;
const minutes_debut = 40;

// heure de fin de la formation 
const heure_fin = 24
const minute_fin = 30

// Convertir l'heure actuelle en minutes
const minutes_actuelles_total = heure_actuelle * 60 + minute_actuelle;
// Convertir l'heure de début en minutes
const minutes_debut_total = (heures_debut * 60 )+ minutes_debut;
// Calcul du temps restant avant le début
let temps_restant_avant_debut = minutes_debut_total - minutes_actuelles_total;


//******* fin de levenement */

//heures de fin convrti en minute 
const minutes_fin_total = (heure_fin*60) + minute_fin
//minute avant la fin 
let temps_restant_avant_fin = minutes_fin_total - minutes_actuelles_total

// Si l'événement est déjà commencé, ajuster le temps restant pour le rendre positif
if (temps_restant_avant_debut < 0) {
    temps_restant_avant_debut += (24 * 60); // Ajouter 24 heures pour passer à la journée suivante
}
//
if( temps_restant_avant_fin ){
    console.log("Temps restant avant la fin:", temps_restant_avant_fin, "minutes");
}
console.log("Temps restant avant le début:", temps_restant_avant_debut, "minutes");


// AUGMENTATION DE L'ANGLE AVEC LE TEMPS 

const duree_totale = minutes_fin_total - minutes_debut_total;

// Calcul de l'angle en fonction du temps restant avant la fin de l'événement
let angle = 0
function calculerAngle() {
    let proximite = (duree_totale - temps_restant_avant_fin) / duree_totale; // Calcul de la proximité
    let angle_evolution = proximite * 360; // Calcul de l'angle
    return angle+= angle_evolution
    
}

console.log("Angle:", calculerAngle(), "degrés");
