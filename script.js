const quizData = [
    {
        question: "Siapa Presiden RI Pertama?",
        a: "Ir. Soekarno",
        b: "Drs. Moh. Hatta",
        c: "B.J Habibie",
        d: "Sutan Syahrir",
        correct: "a",
    },
    {
        question: "Apa Nama Ibukota Negara Belanda?",
        a: "Luxemburg",
        b: "Amsterdam",
        c: "Batavia",
        d: "Suriname",
        correct: "b",
    },
    {
        question: "Kapan BPUPKI di bentuk?",
        a: "29 Juni 1945",
        b: "29 Maret 1945",
        c: "29 April 1945",
        d: "29 April 1944",
        correct: "c",
    },
    {
        question: "Hari Lahir Pancaila diperingati setiap tanggal?",
        a: "1 Juni",
        b: "1 juli",
        c: "1 april",
        d: "1 oktober",
        correct: "a",
    },
    {
        question: "Hari Sumpah Pemuda diperingati setiap tanggal?",
        a: "28 September",
        b: "28 Oktober",
        c: "1 april",
        d: "1 oktober",
        correct: "b",
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>

                <button onclick="location.reload()">Reload</button>
            `
        }
    }
})