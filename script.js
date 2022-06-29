/*Add your JavaScript here*/
var countryScore= 0; //store he countryside score
var cityScore=0; //store city score

var questionCount=1; //store the number of answers clicked on


//store HTML elements using the DOM
var result = document.getElementById("result");

//Question One: Coffee or tea
var coffeeQ1 = document.getElementById("coffeeQ1");
var teaQ1 = document.getElementById("teaQ1");
//question two: hot or iced
var hotQ2 = document.getElementById("hotQ2");
var icedQ2 = document.getElementById("icedQ2");
//question three: cinnamon or vanilla flavoring
var cinnamonQ3 = document.getElementById("cinnamonQ3");
var vanillaQ3 = document.getElementById("vanillaQ3");
//listen for click on answer buttons and call function if clicked
//Q1
coffeeQ1.addEventListener("click", city);
teaQ1.addEventListener("click", country);
//Q2
hotQ2.addEventListener("click", country);
icedQ2.addEventListener("click", city);
//Q3
cinnamonQ3.addEventListener("click", city);
vanillaQ3.addEventListener("click", country);

//track country score and check if quiz is complete
function country() {
  countryScore += 1;
  questionCount += 1;

  console.log("questionCount =" + questionCount + "countryScore = " + countryScore);
  
  if (questionCount == 3) {
  console.log("The quiz is done!")
  updateResult();
  }
}

//track city score and check if quiz is complete
function city() {
  cityScore += 1;
  questionCount += 1;

  console.log("questionCount =" + questionCount + "cityScore = " + cityScore);
  
  if (questionCount == 3) {
  console.log("The quiz is done!")
  updateResult();
  }
}

//update quiz results
function updateResult(){
    if (countryScore >= 2){
      result.innerHTML = "You should live in the countryside!";
      console.log("You should live in the countryside!");
  } else if (cityScore >= 2){
      result.innerHTML = "You should live in the city!";
      console.log("You should live in the city!");
  }
  }
