const quizData = [
    {
        question:'1+2=?',
        a:'19',
        b:'21',
        c:'3',
        d:'4',
        correct:'c'
    },{
        question:'Most used programming language ?',
        a:'Java',
        b:'Python',
        c:'C',
        d:'JavaScript',
        correct:'a'
    },{
        question:'flutter is a ?',
        a:'server side programming language',
        b:'app devlopment programming language',
        c:'App development framework',
        d:'none of the above',
        correct:'c'
    },{
        question:'HTML stands for ?',
        a:'Hypertext Markup Language',
        b:'Hyperloop transfer mail logistics',
        c:'Helicopters Terminal Motorboats Lamorghini',
        d:'None of the above',
        correct:'a'
    }
]

const questionEl = document.getElementById('question');

const a = document.getElementById('a_text');
const b = document.getElementById('b_text');
const c = document.getElementById('c_text');
const d = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');
const restartBtn = document.getElementById('restart');
let currentQuestion = 0;

loadQuiz();

function loadQuiz(){
    const currentQuizData = quizData[currentQuestion];
    questionEl.innerText = currentQuizData.question;
    a.innerText = quizData[currentQuestion].a;
    b.innerText = quizData[currentQuestion].b;
    c.innerText = quizData[currentQuestion].c;
    d.innerText = quizData[currentQuestion].d;
}

submitBtn.addEventListener("click", ()=>{
    currentQuestion++;

    if(currentQuestion < quizData.length){
        loadQuiz();
    }else{
        // todo : show results
        alert("You finished the test");
    }
});

restartBtn.addEventListener("click", ()=>{
    currentQuestion = 0;
    loadQuiz();
});