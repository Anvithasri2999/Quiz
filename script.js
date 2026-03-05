// QUIZ DATA
const quiz = [
{
question:"HTML stands for?",
answers:["Hyper Text Markup Language","Home Tool Markup","Hyperlinks Text"],
correct:0
},
{
question:"CSS is used for?",
answers:["Styling","Programming","Database"],
correct:0
},
{
question:"JS is used for?",
answers:["Design","Interactivity","Storage"],
correct:1
},
{
question:"JavaScript is mainly used for?",
answers:["Design","Interactivity","Storage"],
correct:1
},

{
question:"Which tag is used for a paragraph in HTML?",
answers:["<p>","<h1>","<div>"],
correct:0
},

{
question:"Which CSS property changes text color?",
answers:["background","color","font-style"],
correct:1
},

{
question:"Which symbol is used for ID selector in CSS?",
answers:[".","#","*"],
correct:1
},

{
question:"Which method is used to select an element in JS?",
answers:["getElementById","selectElement","findElement"],
correct:0
},

{
question:"Which company developed JavaScript?",
answers:["Microsoft","Netscape","Google"],
correct:1
},

{
question:"Which HTML tag is used for images?",
answers:["<img>","<image>","<pic>"],
correct:0
},
];

let index = 0;
let score = 0;

function loadQuestion(){
    document.getElementById("question").innerText = quiz[index].question;

    let answersDiv = document.getElementById("answers");
    answersDiv.innerHTML = "";

    quiz[index].answers.forEach((ans,i)=>{
        let btn = document.createElement("button");
        btn.innerText = ans;
        btn.onclick = () => checkAnswer(i);
        answersDiv.appendChild(btn);
    });
}

function checkAnswer(i){
    if(i === quiz[index].correct){
        score++;
    }
    nextQuestion();
}

function nextQuestion(){
    index++;
    if(index < quiz.length){
        loadQuestion();
    }else{
        document.getElementById("question").innerText = "Quiz Completed!";
        document.getElementById("answers").innerHTML = "";
        document.getElementById("score").innerText = "Score: " + score;
    }
}

// LOAD FIRST QUESTION
loadQuestion();


// FETCH API (JOKE)

function getJoke(){
    fetch("https://official-joke-api.appspot.com/random_joke")
    .then(res => res.json())
    .then(data => {
        document.getElementById("joke").innerText =
        data.setup + " 😂 " + data.punchline;
    });
}