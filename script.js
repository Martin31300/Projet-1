const quizzData = [
    {
        question: "Quelle est la capitale du Brésil ?",
        answers: ["Paris", "Londres", "Brasilia", "Tokyo"],
        correct: 2,
        img: "../img/img-bresil.webp"
    },
    {
        question: "Dans quel continent sur trouve les Fidji ?",
        answers: ["Océanie", "Antarctique", "Amérique du sud", "Afrique"],
        correct: 0,
        image: "../img/fidji.jpg"
    },
    {
        question: "Dans quel pays se trouve la pyramide de Chichen Itza ?",
        answers: ["Pérou", "Mexique", "Costa-Rica", "Colombie"],
        correct: 1,
        image: "../img/pyramide.jpg"
    },
];



let currentQuestion = 0;

function nextTheme() {
    currentTheme = "history";
    currentQuestion = 0;

    displayQuestion();
}

function nextQuestion() {
    currentQuestion++;

    displayQuestion();
}

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

        </main>
    `;

    document.getElementById("question").innerHTML = newQuestion;
}

document.getElementById("next-button").addEventListener("click", function () {
    nextQuestion();
});

displayQuestion();
