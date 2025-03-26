
const btn = document.querySelector("#next-button");
const answers = document.querySelectorAll("main div");

for (const answer of answers) {
    answer.addEventListener("click", function () {
        btn.style.display = "initial";

    })
}



let timeLeft = 10;// Temps initial (en secondes)
let timer;          // Variable pour le timer
let currentQuestion = 0; //Index de la question actuelle

const quizzData = [
    {
        question: "Quelle est la capitale du Brésil ?",
        answers: ["Paris", "Londres", "Brasilia", "Madrid"],
        correct: 2, //Index réponse
        image: "../img/img-bresil.webp"
    },
    {
        question: "Dans quel continent sur trouve les Fidji ?",
        answers: ["Océanie", "Antarctique", "Amérique du sud", "Afrique"],
        correct: 0,
        image: ""
    },
    {
        question: "Dans quel pays se trouve la pyramide de Chichen Itza ?",
        answers: ["Pérou", "Mexique", "Costa-Rica", "Colombie"],
        correct: 1,
        image: ""
    },
];

// Fonction pour démarrer le timer
function startTimer() {
    // Déclaration de la fonction startTimer().
    //Elle est appelée chaque fois qu'on veut lancer ou réinitialiser le chronomètre.

    clearInterval(timer); //Réinitialise le timer précédent
    //Stoppe le timer en cours avant d'en démarrer un nouveau.
    //clearInterval(timer) empêche que plusieurs timers tournent en même temps.
    //Cela évite un bug où plusieurs timers se superposeraient et feraient descendre le temps trop vite.

    timeLeft = 10; //Remet le temps à 10 secondes
    //Réinitialise le temps à 10 secondes au début de chaque nouvelle question.
    //timeLeft est une variable globale qui stocke le temps restant.

    document.getElementById("timer").innerText = timeLeft; //Affiche le temps restant
    // Affiche immédiatement la valeur de timeLeft dans l'élément HTML ayant l'id = "timer".
    //Cela permet de voir "10" affiché dès qu'une nouvelle question commence.


    timer = setInterval(() => {// Décrémenter le temps toutes les 1 seconde
        //Démarre un intervalle qui exécute une fonction toutes les 1000 ms(1 seconde).
        //setInterval() est une fonction JavaScript qui répète une action à intervalles réguliers.
        //timer est une variable qui stocke l'identifiant du timer pour pouvoir l'arrêter plus tard avec clearInterval(timer).

        document.getElementById("timer").innerText = timeLeft;// Mettre à jour l'affichage du timer
        //Met à jour l'affichage du chronomètre dans la page à chaque seconde.
        //Si timeLeft = 9, alors < p id = "timer" > 9</p >.

        timeLeft--;// Réduire le temps de 1

        if (timeLeft <= 0) { // Si le temps est écoulé
            //Vérifie si le temps est écoulé.
            //Quand timeLeft atteint 0, le chronomètre doit s'arrêter et passer à la question suivante.

            clearInterval(timer); // Arrêter le timer, Cela évite que le compteur continue de descendre en négatif (-1, -2, -3, ...).
            alert('Temps écoulé !');// Afficher un message (tu peux changer ça pour passer à la question suivante)
            // Ajouter ici la logique pour passer à la question suivante

            nextQuestion();//Passe automatiquement à la question suivante lorsque le temps est écoulé.
            //nextQuestion() est une fonction(non définie ici) qui doit mettre à jour la page avec la prochaine question et réponses.
        }

    }, 1000); // 1000 ms = 1 seconde
    //Le 1000 représente l'intervalle de temps en millisecondes entre chaque exécution du code.
    //Cela signifie que le code à l'intérieur de setInterval() s'exécutera toutes les 1 seconde.
}

// Fonction pour afficher la question actuelle
function displayQuestion() { //Déclaration de la fonction displayQuestion(), qui sera appelée chaque fois qu'on veut afficher une nouvelle question.
    const questionData = quizzData[currentQuestion];
    //On crée une constante questionData qui stocke l'objet correspondant à la question actuelle.
    //quizData est un tableau d'objets contenant toutes les questions du quiz.
    //currentQuestion est un index qui permet d’accéder à la bonne question dans le tableau.
    // Exemple: Si currentQuestion = 0, questionData sera { question: "Quelle est la capitale du Brésil ?", answers: ["Paris", "Londres", "Brasilia", "Madrid"], image: "../../img/img-bresil.webp" }.

    document.querySelector("h1").innerText = questionData.question;
    //On sélectionne l'élément <h1> dans la page HTML et on met à jour son texte (innerText) avec la question actuelle.
    //Avant: <h1>Quelle est la capitale du Brésil ?</h1>
    //Après(si la question change) : <h1>Quelle est la capitale du Canada ?</h1>

    document.querySelector("img").src = questionData.image;
    //On sélectionne l'élément <img> et on change sa source (src) pour afficher l'image associée à la question.
    //Avant: <img src="../../img/img-bresil.webp" alt="">
    //Après (si la question change) : <img src="../../img/img-canada.webp" alt="">

    const answerDivs = document.querySelectorAll("main div");
    //On sélectionne tous les <div> qui contiennent les réponses du quiz.
    //document.querySelectorAll("main div") récupère tous les < div > qui sont dans < main >, ce qui nous donne une NodeList(comme un tableau contenant les 4 réponses).

    answerDivs.forEach((div, index) => {
        //Boucle forEach : On parcourt chaque <div> qui contient une réponse.
        //div représente un < div > contenant une réponse.
        //index est la position actuelle dans la liste des divs(0, 1, 2, 3).
        div.innerHTML = `<h2>${questionData.answers[index]}</h2>`;

    });
}

// Fonction pour passer à la question suivante
function nextQuestion() {
    btn.style.display = "none";
    currentQuestion++;
    if (currentQuestion >= quizzData.length) {
        alert("Quizz terminé !");
        return;
    }

    displayQuestion(); // Affiche la nouvelle question
    startTimer(); // Relance le timer
}

// Ajout d'un écouteur d'événement pour le bouton "Question suivante"
document.getElementById('next-button').addEventListener('click', nextQuestion);
// Appeler la fonction pour démarrer le timer quand la page charge
startTimer();

// Lancement du quiz au chargement de la page
displayQuestion();

