const words = [
"IT Undergraduate",
"Web Developer",
];

let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;

function typeEffect(){

currentWord = words[i];

if(!isDeleting){
j++;
}else{
j--;
}

document.getElementById("typing").textContent =
currentWord.substring(0,j);

if(!isDeleting && j === currentWord.length){

isDeleting = true;

setTimeout(typeEffect,1000);

return;
}

if(isDeleting && j === 0){

isDeleting = false;

i++;

if(i === words.length){
i = 0;
}
}

setTimeout(typeEffect,120);
}

typeEffect();
