// FUNZIONI

//          RANDOM NUMBER

function randomNumber(){
    for(let i = 0; i < 5; i++){
        
        let number = Math.floor(Math.random() * 100);
        if(arrayString.includes(number)){
            i--;
        }
        else{
            arrayString.push(number);
        }
       }
       console.log(arrayString);
       string.innerHTML = arrayString.join(" - ");
}

//          PROMPT

function userPrompt(){

    const userNumArray = [];
    const rightArray = [];
    let right = 0;

    for(let k = 0; k < 5; k++){
        let userNum = parseInt(prompt("Inserisci un numero (rispetta l'ordine):"));

        userNumArray.push(userNum);

        if(arrayString[k] == userNumArray[k]){
            right++;
            rightArray.push(userNum);
        }
    }

    if(rightArray == 0){
        string.innerHTML = `Hai ricordato ${right} numeri su 5`;
    }

    else{
        string.innerHTML = `Hai ricordato ${right} numeri su 5 ed i numeri inseriti corretti sono: ${rightArray.join(" - ")}`;
    }
}

// FINE FUNZIONI

const arrayString = [];
const button = document.getElementById("play-button");
const stringReady = document.getElementById("string-ready");
let string = document.getElementById("string");

button.addEventListener("click", function(){

    button.classList.replace("d-block", "d-none");
    stringReady.classList.replace("d-block", "d-none");

    let counter = 3;
    string.innerHTML = counter;
    console.log(counter);

    const clock = setInterval(function() {
        counter--;
        console.log(counter);
        string.innerHTML = counter;

        if(counter === 0){
            clearInterval(clock);
            randomNumber();
        }
    }, 1000);

    setTimeout(function(){
        string.innerHTML = "";
    }, 1000 * 30); 

    setTimeout(function(){
        userPrompt();
    }, 1002 * 30);
})


