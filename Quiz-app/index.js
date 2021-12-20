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
var answerList = [];
loadQuiz();

function loadQuiz(){
    const currentQuizData = quizData[currentQuestion];
    questionEl.innerText = currentQuizData.question;
    a.innerText = quizData[currentQuestion].a;
    b.innerText = quizData[currentQuestion].b;
    c.innerText = quizData[currentQuestion].c;
    d.innerText = quizData[currentQuestion].d;
}
function getSelected() {
    const answerEls = document.querySelectorAll('.answer');
    let result = undefined;
    answerEls.forEach((answerEl) =>{
        if(answerEl.checked){
            result = answerEl.id;
            answerEl.checked = false;
        }
        
    });
    return result;
    
}

submitBtn.addEventListener("click", ()=>{
    
    const answer = getSelected();    
    answerList.push(answer);
    currentQuestion++;
    
    if(currentQuestion < quizData.length){
        loadQuiz();
    }else{
        // todo : show results
        let score = 0;
        for(let i = 0; i<quizData.length; ++i)
        {
            if(answerList[i]===quizData[i].correct)score++;
        }
        alert("Test ended ! You scored = " + score+"/"+quizData.length);
        currentQuestion = 0;
        loadQuiz();
    }
    
});

restartBtn.addEventListener("click", ()=>{
    currentQuestion = 0;
    loadQuiz();
});