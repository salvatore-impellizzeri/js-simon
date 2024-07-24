function randomNumber(){
    for(let i = 0; i < 5; i++){

        let number = Math.floor(Math.random() * 100);
        if(arrayRandomNum.includes(number)){
            i--;
        }
        else{
            arrayRandomNum.push(number);
        }
       }
       console.log(arrayRandomNum);
       randomNum.innerHTML = arrayRandomNum.join(" - ");
}

const button = document.getElementById("play-button");
const stringReady = document.getElementById("string-ready");
const readyCount = document.getElementById("raedy-countdown");
let randomNum = document.getElementById("random-numbers");
const arrayRandomNum = [];

button.addEventListener("click", function(){

    button.classList.replace("d-block", "d-none");
    stringReady.classList.replace("d-block", "d-none");

    let counter = 3;

    function countdown(){

        console.log(counter);
        readyCount.innerHTML = `${counter}`;
        if(counter == 0){
            clearInterval(clock);
            randomNumber();
        }
        else{
            counter--;
        }
    }

    const clock = setInterval(countdown, 1000);

    setTimeout(function(){
        randomNum.innerHTML = "";
    }, 8000)

    setTimeout(function(){
        for(let j = 0; j < 5; j++){
            let userNumber = parseInt(prompt("Inserisci il numero:"))
        }
    }, 8100);

})

