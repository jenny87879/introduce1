
// var question = document.getElementById('question');
// var result = document.getElementById('result');
// var input_form = document.getElementById('input_form');
// var input = document.getElementById('input');
// var chance = document.getElementById('chance');
// var submit = document.getElementById('submit');
// var number_candidate;
// var number_picked;
// var wronginputNumbers = 0;


// // 게임 실행
// function random_number() {
//     let number_candidate = [1,2,3,4,5,6,7,8,9];
//     let number_picked = [];
//     for (var i = 0; i < 4; i += 1) {
//         var picked = number_candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
//         number_picked.push(picked);
//     }
//     input.value ="";
//     input.focus();
// }

// random_number();
// console.log(number_picked);
// console.log(input)

const form = document.querySelector('form');
const input = document.querySelector('input');
const result = document.querySelector('.result');
const turnNum = document.querySelector('.turn');
const startBtn = document.querySelector('.start');
let list = document.querySelector('.list');
let numberArray = [1,2,3,4,5,6,7,8,9];
let number = [];
let turn = 0;

for (let i = 0; i < 4; i++){
    let selectedNum = numberArray.splice(Math.floor(Math.random() * (9 - i)),1)[0];
    number.push(selectedNum);
}

// 게임 실행
function gameStart(){
    let numberArray = [1,2,3,4,5,6,7,8,9];
    let number = [];
    for (let i = 0; i < 4; i++){
        let selectedNum = numberArray.splice(Math.floor(Math.random() * (9 - i)),1)[0];
        number.push(selectedNum);
    }
    form.classList.remove('hide');
    input.value ="";
    input.focus();
    result.textContent = "";
    turnNum.textContent = "";
    list.textContent = "";
    turn = 0;
}

form.addEventListener('submit', function(e){
    e.preventDefault();
    let answer = input.value;
    if( answer === number.join('')){
        result.textContent = " 홈런 ";
        startBtn.addEventListener('click', () => {
            gameStart();
        })
    } else {
        let answerArray = answer.split('');
        let strike = 0;
        let ball = 0;
        let answerRow = document.createElement('div');
        turn++;
        turnNum.textContent = 10 - turn;
        if(turn > 9){
            for(let i = 0; i < 4; i++){
                if(Number(answerArray[i]) === number[i]){
                    strike++;
                    } else if(number.indexOf(Number(answerArray[i])) > -1) {
                    ball++;
                    }    
                }
            result.textContent = `${strike}Strike ${ball}Ball`
            answerRow.textContent =` ${input.value}  ${result.innerText}`
            list.appendChild(answerRow)
            result.textContent = "실패 답은 "+ number.join('') + "였습니다.";
            turnNum.textContent = "없습니다";
            form.classList.add('hide');
            startBtn.addEventListener('click', () => {
                gameStart();
            })
        } else {
            for ( let i = 0; i < 4; i++){
            if(Number(answerArray[i]) === number[i]){
                strike++;
                } else if(number.indexOf(Number(answerArray[i])) > -1) {
                ball++;
                }
            }
        result.textContent = `${strike}Strike ${ball}Ball`
        answerRow.textContent =` ${input.value}  ${result.innerText}`
        list.appendChild(answerRow);
        input.value = "";
        input.focus();
        }
    }
})