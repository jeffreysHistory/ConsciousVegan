// script.js

const quizData = [
    {
        question: "What percentage of global greenhouse gas emissions come from animal agriculture?",
        options: ["a) 5%", "b) 18%", "c) 50%"],
        correct: "b"
    },
    {
        question: "Which of the following is a benefit of a plant-based diet?",
        options: ["a) Lower risk of heart disease", "b) Higher cholesterol levels", "c) Increased carbon footprint"],
        correct: "a"
    },
    {
        question: "Which animal product is most water-intensive to produce?",
        options: ["a) Beef", "b) Chicken", "c) Eggs"],
        correct: "a"
    },
    {
        question: "What is a common alternative to cow's milk in a vegan diet?",
        options: ["a) Almond milk", "b) Goat's milk", "c) Camel's milk"],
        correct: "a"
    },
    {
        question: "Which country has the highest percentage of vegetarians?",
        options: ["a) Brazil", "b) India", "c) USA"],
        correct: "b"
    },
    {
        question: "What is the primary reason for deforestation in the Amazon rainforest?",
        options: ["a) Logging", "b) Cattle ranching", "c) Urbanization"],
        correct: "b"
    },
    {
        question: "Which nutrient is commonly found in high amounts in a vegan diet?",
        options: ["a) Fiber", "b) Cholesterol", "c) Saturated fat"],
        correct: "a"
    },
    {
        question: "Which vitamin is often supplemented in a vegan diet?",
        options: ["a) Vitamin C", "b) Vitamin B12", "c) Vitamin A"],
        correct: "b"
    },
    {
        question: "What percentage of global soy production is used for animal feed?",
        options: ["a) 10%", "b) 30%", "c) 70%"],
        correct: "c"
    },
    {
        question: "What is one of the ethical reasons for adopting a vegan lifestyle?",
        options: ["a) Supporting factory farming", "b) Preventing animal exploitation", "c) Increasing meat consumption"],
        correct: "b"
    }
];

let currentQuestion = 0;

function loadQuestion() {
    const questionElement = document.getElementById('question');
    questionElement.innerHTML = quizData[currentQuestion].question;

    const buttons = document.querySelectorAll('#quiz button');
    buttons.forEach((button, index) => {
        button.innerHTML = quizData[currentQuestion].options[index];
    });

    document.getElementById('question-number').innerText = currentQuestion + 1;
    const progressFill = document.getElementById('progress-fill');
    progressFill.style.width = `${((currentQuestion + 1) / quizData.length) * 100}%`;
}

function checkAnswer(selected) {
    const result = document.getElementById('result');

    if (selected === quizData[currentQuestion].correct) {
        result.innerHTML = 'Correct!';
        result.style.color = 'green';
    } else {
        result.innerHTML = 'Incorrect. Try again!';
        result.style.color = 'red';
    }

    currentQuestion++;
    if (currentQuestion < quizData.length) {
        setTimeout(() => {
            loadQuestion();
            result.innerHTML = '';
        }, 2000);
    } else {
        result.innerHTML = 'You have completed the quiz!';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    loadQuestion();
});

