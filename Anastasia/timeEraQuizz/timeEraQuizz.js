let points=0
let index=0
let userResult=""


let ans1 =  document.getElementById("1")

//list of questions:
let allQuestions=["How much friends do you have?","Does making friends is easy for you?", "How would you celebrate your birthday?", "You're invited to a party. Will you go?", "What do you do at parties?"]

//answer options to the questions
let answersToQuestion1=["I have 1 best friend","I have a friendgroup", "I have lots of friends", "I prefer to be alone"]
let answersToQuestion2=["not really","yes","Duh, of course","extra hard"]
let answersToQuestion3=["invite friends over","go out with friends","throw a party","just a family meal"]
let answersToQuestion4=["depends who'll come","yeah","always!","no thanks"]
let answersToQuestion5=["talk to my friends","dance with friends","PARTY!","go to a quite corner"]

let allAnswers=[answersToQuestion1, answersToQuestion2, answersToQuestion3, answersToQuestion4, answersToQuestion5]
document.getElementById("questionText").innerHTML=allQuestions[index]
//the start screen:
document.getElementById("image").src=pictures[index]
let answers=allAnswers[index]
document.getElementById("1").innerText=answers[0]
document.getElementById("2").innerText=answers[1]
document.getElementById("3").innerText=answers[2]
document.getElementById("4").innerText=answers[3]
index=0 

//switching to the next question:
function next(num) {
  if (allQuestions.length>index) {
    if (num==1){
      points=points+0
    }
    if (num==2){
      points=points+10
    }
    if (num==3){
      points=points+10
    }
    if (num==4){
      points=points+0
    }
    document.getElementById("questionText").innerHTML=allQuestions[index]
    let answers=allAnswers[index]
    document.getElementById("1").innerText=answers[0]
    document.getElementById("2").innerText=answers[1]
    document.getElementById("3").innerText=answers[2]
    document.getElementById("4").innerText=answers[3]
    document.getElementById("image").src=pictures[index]
    index=index+1 
    console.log(index)
   }
    if (index==5){
      result(points, userType, index)
      }
    }
//the result of the user:
function result(points, userType, index) {
  if (index==5) {
    //introvert user:
    if (points<=20) {
      userType=="introvert"
      let changeTitleToIntrovert = document.getElementById("title");
      changeTitleToIntrovert.textContent = "🎉You are an INTROVERT!🎉";
      let changeQuestionToIntrovert = document.getElementById("questionNumber");
      changeQuestionToIntrovert.textContent = "Introvert descripcion:";
      let changeQuestionTextToIntrovert = document.getElementById("questionText");
      changeQuestionTextToIntrovert.textContent = "Introverts tend to be more quiet, reserved, and introspective. Introverts expend energy in social situations. After attending a party, they often feel a need to 'recharge' by spending time alone.";
      
      function hidingObjects() {
        let hideObj = document.getElementById("1");
        hideObj.classList.add("hidden");
      }
    }
    else if (points>20 && points<=50) {
      userType=="extrovert"
      let changeTitleToExtrovert = document.getElementById("title");
      changeTitleToExtrovert.textContent = "🎉You are an EXTROVERT!🎉";
      let changeQuestionToExtrovert = document.getElementById("questionNumber");
      changeQuestionToExtrovert.textContent = "Extrovert descripcion:";
      let changeQuestionTextToExtrovert = document.getElementById("questionText");
      changeQuestionTextToExtrovert.textContent = "Extroverts are people with a personality that is often characterized by expressive and outgoing patterns of behavior. People who are extroverts tend to be very talkative, sociable, active, and warm.";
      
      function hidingObjects() {
        let hideObj = document.getElementById("1");
        hideObj.classList.add("hidden");
      }
    }
  }
}
