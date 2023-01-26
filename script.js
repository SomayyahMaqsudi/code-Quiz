const quizData = [
    {
        question: "What does === do?",
        a: "compares the data type",
        b: "none",
        c: "compares the value",
        d: "a and c",
        correct: "a"
    },

    {
        question: "What does == do?",
        a: "compares the data type",
        b: "none",
        c: "compares the value",
        d: "a and c",
        correct: "c"
    },

    {
        question: "What does CSS stand for?",
        a: "I don't know",
        b: "none",
        c: "Cascading Style Sheets",
        d: "If I knew I wouldn't be here",
        correct: "c"
    },

    {
        question: "What happens if the first 'if statement' is true?",
        a: "Are you kidding me?",
        b: "it will run the rest until we get to a 'false statement'.",
        c: "it will not run the rest.",
        d: "How would I know?",
        correct: "c"
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitbtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz(){
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}



function deselectAnswers(){
    answerEls.forEach(answerEls => answerEls.checked = false)
}


function getSelected(){
    let answerEls
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitbtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++
        }
        currentQuiz++
        if(currentQuiz < quizData.length){
            loadQuiz()
        } else {
            quiz.innerHTML = `
            <h2>You answered ${score}/${quizData.length} questions correctly</h2>

            <button onclick="location.reload()">Reload</button>
            `
                
        }       
    
    }
    
})