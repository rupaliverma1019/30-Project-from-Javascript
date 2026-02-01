const quiz = [{
        question: "What is the most used programing language in 2021",
        ans1: "Java",
        ans2: "C",
        ans3: "Python",
        ans4: "Javascript",
        answer: "javascript",
    },
    {
        question: "Who is the president of Us ?",
        ans1: "Joe bidden",
        ans2: "Donald Trump",
        ans3: "Brack Obama",
        ans4: "George Bush",
        answer: "Joe Bidden",
    },
    {
        question: "What is JavaScript??",
        ans1: "JavaScript is a scripting language used to make the website interactive",
        ans2: "JavaScript is an assembly language used to make the website interactive",
        ans3: "JavaScript is a compiled language used to make the website interactive",
        ans4: "None of the mentioned",
        answer: "JavaScript is a scripting language used to make the website interactive",
    },
    {
        question: "Which of the following is correct about JavaScript?",
        ans1: "JavaScript is Assembly-language",
        ans2: "JavaScript is an Object-Based language",
        ans3: "JavaScript is an Object-Oriented language",
        ans4: " JavaScript is a High-level language",
        answer: "JavaScript is an Object-Based language",
    },
    {
        question: "Arrays in JavaScript are defined by which of the following statements ?",
        ans1: "It is an ordered list of values",
        ans2: "It is an ordered list of objects",
        ans3: "It is an ordered list of string",
        ans4: " It is an ordered list of functions",
        answer: "It is an ordered list of values",
    }

]

const question = document.getElementById("quiz-question");
const option_a = document.getElementById("text_option_a");
const option_b = document.getElementById("text_option_b");
const option_c = document.getElementById("text_option_c");
const option_d = document.getElementById("text_option_d");

// console.log(question);
// console.log(question.textContent);
// console.log(option_a);
// console.log(option_a.textContent);
// console.log(option_b);
// console.log(option_b.textContent);
// console.log(option_c);
// console.log(option_c.textContent);
// console.log(option_d);
// console.log(option_d.textContent);




const answerElement = document.querySelectorAll(".answer")
console.log("answerElement", answerElement);
const submit = document.getElementById("submit");
let currentQuestion = 0;
let score = 0;
// console.log(quiz[currentQuestion].question);
// console.log(quiz[currentQuestion].ans1);
// console.log(quiz[currentQuestion].ans2);
// console.log(quiz[currentQuestion].ans3);
// console.log(quiz[currentQuestion].ans4);






question.textContent = quiz[currentQuestion].question;
option_a.textContent = quiz[currentQuestion].ans1;
option_b.textContent = quiz[currentQuestion].ans2;
option_c.textContent = quiz[currentQuestion].ans3;
option_d.textContent = quiz[currentQuestion].ans4;


submit.addEventListener("click", () => {
    const checkedAns = document.querySelector('input[type="radio"]:checked')
    answerElement.forEach((answer) => {
        console.log(answer.checked)
    })

    console.log(checkedAns.nextElementSibling.textContent);

    if (checkedAns === null) {
        alert("Please select an answer");
    } else {
        if (checkedAns.nextElementSibling.textContent === quiz[currentQuestion].answer) {
            score++;
        }
        checkedAns.checked = false;
        currentQuestion++;
        if (currentQuestion < quiz.length) {
            question.textContent = quiz[currentQuestion].question;
            option_a.textContent = quiz[currentQuestion].ans1;
            option_b.textContent = quiz[currentQuestion].ans2;
            option_c.textContent = quiz[currentQuestion].ans3;
            option_d.textContent = quiz[currentQuestion].ans4;
            checkedAns.checked = false;
        } else {
            alert("Your score is " + score + " out of " + quiz.length);
            location.reload();
        }
    }

})