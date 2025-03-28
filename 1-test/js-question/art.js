let score = 0;

const quizzData = [
  {
    question: "En quelle année est sorti le film ROCKY ?",
    answers: ["1974", "1975", "1976", "1977"],
    correct: 2,
    image: "../../img/rocky.jpg"
  },
  {
    question: "Quel est l'album le plus vendu de tous les temps ?",
    answers: ["Thriller", "Back in Black", "The Dark Side of the Moon", "Bat Out of Hell"],
    correct: 0,
    image: "../../img/album.jpg"
  },
  {
    question: "De quel film est tirée cette réplique : HASTA LA VISTA BABY ?",
    answers: ["Terminator 2", "Predator", "RoboCop", "Total Recall"],
    correct: 0,
    image: "../../img/film.jpg"
  },
  {
    question: "En quelle année est sorti le film SCARFACE ?",
    answers: ["1982", "1983", "1984", "1985"],
    correct: 0,
    image: "../../img/scarface.jpg"
  },
  {
    question: "En quelle année Léonard de Vinci a-t-il peint La Joconde ?",
    answers: ["1490", "1503", "1519", "1523"],
    correct: 1,
    image: "../../img/joconde.jpg"
  },
  {
    question: "Qui a peint 'La liberté guidant le peuple' ?",
    answers: ["Eugène Delacroix", "Gustave Courbet", "Jacques-Louis David", "Edgar Degas"],
    correct: 0,
    image: "../../img/liberté.jpg"
  },
  {
    question: "En quelle année Rembrandt a-t-il peint 'Le retour du fils prodigue' ?",
    answers: ["1629", "1642", "1654", "1669"],
    correct: 2,
    image: "../../img/fils.jpg"
  },
  {
    question: "Quelle est la plus grande œuvre du peintre David ?",
    answers: ["Le Serment des Horaces", "La Mort de Marat", "Napoléon traversant les Alpes", "La Lutte de Jacob et l'Ange"],
    correct: 0,
    image: "../../img/David.jpg"
  }
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