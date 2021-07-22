/* Button Facts */
var factList = [
  "The anime veteran, Kazunori Mizuno, died at the age of 52 on March 19, 2017, from taking a break from work to catching a one-hour nap in his studio when he died in his sleep.",/*0*/
  "A Japanese word called karoshi refers to people who exhaust themselves to death from working.",/*1*/
  "An anonymous animator and character designer (C.K) said of his experience in the anime industry. When I was young, I honestly suffered. Luckily, my family is from Tokyo, so I could live with my parents and somehow get by. As an in-between animator, I was making 70,000 yen (~$650) a month.",
  "In a 2016 article by AEYAC, a non-profit organization in Kyoto, Japan, wrote, More than half (53%) of animators in Japan, as AEYAC questioned, cannot live with the salary as animator thus their family supports them, and 35% lives with their parents.", 
  " The anime audience is a contributing factor to why the Anime market is not stable for animators.By going on piracy anime websites that are unsafe and questionable. Also, reselling anime merchandise for profit and gain."];


var fact = document.getElementById("fact");
var myButton = document.getElementById("myButton");
var count = 0;

myButton.addEventListener("click", displayFact);

function displayFact(){
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length){
    count = 0;
  }
}
