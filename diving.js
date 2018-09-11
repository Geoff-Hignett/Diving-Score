var difficulty = 0;
var scores = [];
var score;
var result;

while(isNaN(difficulty) || difficulty < 1.2 || difficulty > 4.2){
  difficulty = prompt("What is the difficulty level?");
}

for(let i = 0; i < 5; i++){
  score = prompt("What is the score?");
  if(score < 0 || score > 10 || score == null || score =="" || isNaN(score)) break;
    scores.push(score)
}

scores.sort(function(a, b) {return a - b});

result = difficulty * (Number(scores[1]) + Number(scores[2]) + Number(scores[3]));

if(scores[4]) alert(result);