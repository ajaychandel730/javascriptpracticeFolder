

const FAQ = [
    {
      question: "How many bones does a cat have?",
      answer: "A cat has 230 bones - 6 more than a human",
    },
    {
      question: "How much do cats sleep?",
      answer: "The average cat sleeps 12-16 hours per day",
    },
    {
      question: "How long do cats live",
      answer: "Outdoor cats live 5 years on average. Indoor cats live 15 years on average.",
    },
  ];

const container = document.querySelector(".container");

container.addEventListener("click", function(event){
   const ele = event.target;

   if(ele.classList.contains("question")){
      const answer = ele.parentElement.querySelector(".answer");
      if(answer.classList.contains("hide")){
          answer.classList.remove("hide");
          answer.classList.add("show");
      }else{
        answer.classList.remove("show");
        answer.classList.add("hide");
      }
   }
});

const createWrpper = (ques, ans)=>{
    const wrapper = document.createElement("div");
    wrapper.className = "question_wrapper";

    wrapper.innerHTML = `
    <div class="question_icon">
          <span>*</span>
        </div>

        <div class="qustion_section">
          <p class="question">${ques}</p>
          <p class="answer hide">${ans}</p>
        </div>
      </div>
    `;

    return wrapper;
}


for(let i = 0; i < FAQ.length; i++){
    let {answer, question} = FAQ[i];
    const wrapper  = createWrpper(question, answer);
    container.appendChild(wrapper);
}





