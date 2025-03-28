let score = 0;

const quizzData = [
  {
    question: "Quel club a gagné le plus de Ligues des Champions ?",
    answers: ["Real Madrid", "FC Barcelone", "Milan AC", "Bayern Munich"],
    correct: 0,
    image: "../../img/UEFA-CHAMPIONS.jpg"
  },
  {
    question: "Combien de fois la France a remporté le Tournoi des 6 Nations ?",
    answers: ["24 fois", "25 fois", "26 fois", "27 fois"],
    correct: 2,
    image: "../../img/6-nations.jpg"
  },
  {
    question: "En quelle année Yannick Noah a gagné Roland Garros ?",
    answers: ["1980", "1981", "1982", "1983"],
    correct: 3,
    image: "../../img/NOAH.jpg"
  },
  {
    question: "Combien de titres de champion du monde a remporté Alain Prost",
    answers: ["2", "3", "4", "5"],
    correct: 2,
    image: "../../img/PROST-CHAMPION.jpg"
  },
  {
    question: "Combien de points a inscrit Michael Jordan durant toute sa carrière ?",
    answers: ["32291 points", "32292 points", "32293 points", "32294 points"],
    correct: 1,
    image: "../../img/JORDAN-DUNK.jpg"
  },
  {
    question: "Combien de titres olympiques a remporté l'équipe de France de Handball ?",
    answers: ["2 titres", "3 titres", "4 titres", "5 titres"],
    correct: 1,
    image: "../../img/HANDBALL-OLYMPIQUE.jpg"
  },
  {
    question: "Combien de titres olympiques a remporté Marie José Perec ?",
    answers: ["1 titre", "2 titres", "3 titres", "4 titres"],
    correct: 1,
    image: "../../img/MARIE-JO.jpg"
  },
  {
    question: "Quel est le dernier club français a avoir gagné une coupe d'Europe ?",
    answers: ["Paris SG", "SARDINE FC", "Olympique Lyonnais", "AS Monaco"],
    correct: 0,
    image: "../../img/PSG-OM.jpg"
  },
];

let currentQuestion = 0;

function displayQuestion() {
  const currentQuestionData = quizzData[currentQuestion];

  const newQuestion = `
    <header>

    <article id="chrono">
      <p id="timer">
        10
      </p>
    </article>

    <img src="${currentQuestionData.image}" alt="">
    <h1>${currentQuestionData.question}</h1>

  </header>

  <main>

    <div>
      <h2>${currentQuestionData.answers[0]}</h2>
    </div>

    <div>
      <h2>${currentQuestionData.answers[1]}</h2>
    </div>

    <div>
      <h2>${currentQuestionData.answers[2]}</h2>
    </div>

    <div>
      <h2>${currentQuestionData.answers[3]}</h2>
    </div>

    <button id="next-button">Question suivante</button>
  </main>

    <dialog id="score-dialog">
    <h1 id="titre-dialog">Quiz terminé !</h1>
    <p id="score-message"></p>
    <a href="../accueil.html"><button id="close-button">Retourner à l'accueil</button></a>
  </dialog>
    `
  document.querySelector("body").innerHTML = newQuestion;

  const btn = document.querySelector("#next-button");

  function nextQuestion() {
    btn.style.display = "none";
    currentQuestion++;
    //2-comparer l'index de la valeur selectionner par rapport à l'index correct
    //3-Rajouter un conteur de point sous forme de variable
    //4-peut etre une fonction
    if (currentQuestion >= quizzData.length) {
      // j'appelle dialog
      const scoreMessage = `Ton score est de ${score}/${quizzData.length}`;
      document.getElementById("score-message").textContent = scoreMessage;
      // J'ouvre dialog
      const dialog = document.getElementById('score-dialog');
      dialog.style.display = "flex";
      return;
    }
    // startTimer();
    displayQuestion();

  }

  // let timeLeft = 10;// Temps initial (en secondes)
  // let timer;          // Variable pour le timer

  // // Fonction pour démarrer le timer
  // function startTimer() {
  //     // Déclaration de la fonction startTimer().
  //     //Elle est appelée chaque fois qu'on veut lancer ou réinitialiser le chronomètre.

  //     clearInterval(timer); //Réinitialise le timer précédent
  //     //Stoppe le timer en cours avant d'en démarrer un nouveau.
  //     //clearInterval(timer) empêche que plusieurs timers tournent en même temps.
  //     //Cela évite un bug où plusieurs timers se superposeraient et feraient descendre le temps trop vite.

  //     timeLeft = 10; //Remet le temps à 10 secondes
  //     //Réinitialise le temps à 10 secondes au début de chaque nouvelle question.
  //     //timeLeft est une variable globale qui stocke le temps restant.

  //     document.getElementById("timer").innerText = timeLeft; //Affiche le temps restant
  //     // Affiche immédiatement la valeur de timeLeft dans l'élément HTML ayant l'id = "timer".
  //     //Cela permet de voir "10" affiché dès qu'une nouvelle question commence.


  //     timer = setInterval(() => {// Décrémenter le temps toutes les 1 seconde
  //         //Démarre un intervalle qui exécute une fonction toutes les 1000 ms(1 seconde).
  //         //setInterval() est une fonction JavaScript qui répète une action à intervalles réguliers.
  //         //timer est une variable qui stocke l'identifiant du timer pour pouvoir l'arrêter plus tard avec clearInterval(timer).

  //         timeLeft--;// Réduire le temps de 1

  //         document.getElementById("timer").innerText = timeLeft;// Mettre à jour l'affichage du timer
  //         //Met à jour l'affichage du chronomètre dans la page à chaque seconde.
  //         //Si timeLeft = 9, alors < p id = "timer" > 9</p >.

  //         if (timeLeft <= 0) { // Si le temps est écoulé
  //             //Vérifie si le temps est écoulé.
  //             //Quand timeLeft atteint 0, le chronomètre doit s'arrêter et passer à la question suivante.

  //             clearInterval(timer); // Arrêter le timer, Cela évite que le compteur continue de descendre en négatif (-1, -2, -3, ...).
  //             // Afficher un message (tu peux changer ça pour passer à la question suivante)
  //             // Ajouter ici la logique pour passer à la question suivante

  //             nextQuestion();//Passe automatiquement à la question suivante lorsque le temps est écoulé.
  //             //nextQuestion() est une fonction(non définie ici) qui doit mettre à jour la page avec la prochaine question et réponses.
  //         }

  //     }, 1000); // 1000 ms = 1 seconde
  //     //Le 1000 représente l'intervalle de temps en millisecondes entre chaque exécution du code.
  //     //Cela signifie que le code à l'intérieur de setInterval() s'exécutera toutes les 1 seconde.
  // }

  const answers = document.querySelectorAll("main div");

  answers.forEach((answer, index) => {
    answer.addEventListener("click", function () {
      // Réinitialiser la sélection précédente
      answers.forEach(a => {
        a.classList.remove("selected");
        a.style.backgroundColor = "";
        a.querySelector("h2").style.color = "#F5446A";
      });

      // Sélectionner la réponse actuelle
      this.classList.add("selected");
      this.style.backgroundColor = "#F5446A";
      this.querySelector("h2").style.color = "white";
      btn.style.display = "initial";

      // Vérifier si la réponse est correcte
      if (index === quizzData[currentQuestion].correct) {
        score++; // Augmenter le score si la réponse est correcte
      }
    });
  });

  document.getElementById('next-button').addEventListener('click', nextQuestion);
  // startTimer();
};


displayQuestion();