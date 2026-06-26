// =====================
// SCREENS
// =====================

const welcomeScreen = document.getElementById("welcome-screen");
const questionScreen = document.getElementById("question-screen");
const revealScreen = document.getElementById("reveal-screen");
const memoryScreen = document.getElementById("memory-screen");

// =====================
// BUTTONS
// =====================

const startBtn = document.getElementById("start-btn");
const nextBtn = document.getElementById("next-btn");
const revealBtn = document.getElementById("reveal-btn");

// =====================
// MEDIA
// =====================

const video = document.getElementById("video");
const music = document.getElementById("bg-music");

// =====================
// QUESTION ELEMENTS
// =====================

const questionTitle = document.getElementById("question-title");
const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const answerMessage = document.getElementById("answer-message");

// =====================
// QUESTION NUMBER
// =====================

let currentQuestion = 0;

// =====================
// QUESTIONS
// =====================

const questions = [

{
question:"Who's Nitin gadkari first love ?",

img1:"assets/images/q1a.jpg",
img2:"assets/images/q1b.jpeg",

msg1:"slay gurl.. ❤️",
msg2:"uff.. modu ji kise ethanol se 'cum' h ke ❤️"
},

{
question:"aap kispe zyada bharosha krogi ?..",

img1:"assets/images/q2a.jpeg",
img2:"assets/images/q2b.jpeg",

msg1:"obv builder k maa k bho#$ pe.. 😄",
msg2:"obv builder k maa k bho#$ pe.. 😂"
},

{
question:"aap kis se zyada pyar krte ho ?..",

img1:"assets/images/q3a.jpeg",
img2:"assets/images/q3b.jpeg",

msg1:"ik yahe choose krogi, mujhe toh bhul gyi n 💔",
msg2:"oye yeh tere sholee puri kha jyega.. 😂"
}

];

// =====================
// LOAD QUESTION
// =====================

function loadQuestion(){

    answerMessage.innerHTML="";

    revealBtn.classList.add("hidden");
    nextBtn.style.display="inline-block";

    let q = questions[currentQuestion];

    questionTitle.innerHTML = q.question;

    option1.src = q.img1;
    option2.src = q.img2;

    option1.onclick=function(){

        answerMessage.innerHTML=q.msg1;

    }

    option2.onclick=function(){

        answerMessage.innerHTML=q.msg2;

    }

}

// =====================
// START
// =====================

startBtn.onclick=function(){

    welcomeScreen.classList.add("hidden");

    questionScreen.classList.remove("hidden");

    loadQuestion();

}

// =====================
// NEXT
// =====================

nextBtn.onclick=function(){

    currentQuestion++;

    if(currentQuestion < questions.length){

        loadQuestion();

    }

    else{

        questionTitle.innerHTML="seeing which one will good for health 🫣";

        option1.src="assets/images/q4a.jpeg";
        option2.src="assets/images/q4b.jpeg";

        answerMessage.innerHTML="";

        nextBtn.style.display="none";

        revealBtn.classList.add("hidden");

        option1.onclick=function(){

            answerMessage.innerHTML="❌ Wrong 😡";

            revealBtn.classList.remove("hidden");

        }

        option2.onclick=function(){

            answerMessage.innerHTML="❌ Wrong Again 😡";

            revealBtn.classList.remove("hidden");

        }

    }

}

// =====================
// REVEAL
// =====================

revealBtn.onclick=function(){

    questionScreen.classList.add("hidden");

    revealScreen.classList.remove("hidden");

    video.currentTime = 0;

    video.play().catch(()=>{});

}

// =====================
// VIDEO END
// =====================

video.onended=function(){

    revealScreen.classList.add("hidden");

    memoryScreen.classList.remove("hidden");

    music.currentTime = 0;

    music.play().catch(()=>{});

}

