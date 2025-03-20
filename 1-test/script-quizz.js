




let timeLeft = 10;// Temps initial (en secondes)
let timer;          // Variable pour le timer
let currentQuestion = 0; //Index de la question actuelle

const quizzData = [
    {
        question: "Quelle est la capitale du Brésil ?",
        answers: ["Paris", "Londres", "Brasilia", "Madrid"],
        correct: 2, //Index réponse
        image: "../../img/img-bresil.webp"
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
    timer = setInterval(() => {// Décrémenter le temps toutes les 1 seconde
        timeLeft--;// Réduire le temps de 1
        document.getElementById("timer").innerText = timeLeft;// Mettre à jour l'affichage du timer

        if (timeLeft <= 0) { // Si le temps est écoulé
            clearInterval(timer); // Arrêter le timer
            alert('Temps écoulé !');// Afficher un message (tu peux changer ça pour passer à la question suivante)
            // Ajouter ici la logique pour passer à la question suivante
            nextQuestion();
        }

    }, 1000); // 1000 ms = 1 seconde
}

// Fonction pour afficher la question actuelle
function displayQuestion() {
    const questionData = quizzData[currentQuestion];

    document.querySelector("h1").innerText = questionData.question;
    document.querySelector("img").src = questionData.image;

    const answerDivs = document.querySelectorAll("main div");
}

// Appeler la fonction pour démarrer le timer quand la page charge
startTimer();

// Fonction pour passer à la question suivante
document.getElementById('next-button').addEventListener('click', () => {
    // Réinitialiser le timer si tu veux
    timeLeft = 10;
    startTimer();
});

