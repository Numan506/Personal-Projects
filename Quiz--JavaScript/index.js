const data =[
    {
        id:1,
        question:"Which of these fish is actually a fish?",
        answers:[
            {answer:"Swordfish",isCorrect:true},
            {answer:"Jellyfish",isCorrect:false},
            {answer:"Starfish",isCorrect:false},
            {answer:"carryfish",isCorrect:false}
        ],

    },
    {
        id:2,
        question:"A flutter is a group of:",
        answers:[
            {answer:"Bees",isCorrect:false},
            {answer:"Penguins",isCorrect:false},
            {answer:"Butterflies",isCorrect:true},
            {answer:"Camels",isCorrect:false}
        ],

    },
    {
        id:3,
        question:"A group of which animals is referred to as a wake?",
        answers:[
            {answer:"Bats",isCorrect:false},
            {answer:"Vultures",isCorrect:true},
            {answer:"Ants",isCorrect:false},
            
        ],

    },

]

//Select all Class
const gameScreen = document.querySelector(".game");
const question = document.querySelector(".question");
const resultScreen = document.querySelector(".result");
const answersContainer = document.querySelector(".answers");
const submit = document.querySelector(".submit");
const play = document.querySelector(".play");



let qIndex = 0;
let correctCount = 0;
let wrongCount = 0;
let total = 0;
let selectedAnswer;


const playagain =()=>{
     qIndex = 0;
     correctCount = 0;
     wrongCount = 0;
     total = 0;
    showquestion(0);
}

play.addEventListener("click",()=>{
       
    resultScreen.style.display ="none";
    gameScreen.style.display ="block";
    playagain(); 
})



const showResult =()=>{
    resultScreen.style.display ="block";
    gameScreen.style.display ="none";

    resultScreen.querySelector(".correct").textContent=`Correct Answer:${correctCount}`
    resultScreen.querySelector(".wrong").textContent=`Wrong Answer:${wrongCount}`
    resultScreen.querySelector(".score").textContent=`Total Score:${correctCount-wrongCount}`
}


const showquestion =(qNumber)=>{

    if(qIndex == data.length) return showResult();

    selectedAnswer = null;
      question.textContent = data[qNumber].question;

      answersContainer.innerHTML = data[qNumber].answers.map((item,index)=>
        ` <div class="answer">
             <input type="radio" id=${index}  name="answer" value=${item.isCorrect} />
             <label for="1">${item.answer}</label>
          </div>`
      ).join("")

      selectAnswer();
};

const selectAnswer =()=>{
    document.querySelectorAll("input").forEach(result=>{
        result.addEventListener("click",(e)=>{
            selectedAnswer = e.target.value;
        })
    })
};


const submitAnswer =()=>{
    submit.addEventListener("click",()=>{
        if(selectedAnswer !== null){
            selectedAnswer === "true" ? correctCount++ : wrongCount++ ;
        
            qIndex++;
            showquestion(qIndex);
        }else{
            alert("Please select answer: ")
        }
        
    })
}


showquestion(qIndex)
submitAnswer();