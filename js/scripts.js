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

const arrayRandomNum = [];
const button = document.getElementById("play-button");
const stringReady = document.getElementById("string-ready");
let randomNum = document.getElementById("random-numbers");

button.addEventListener("click", function(){

    button.classList.replace("d-block", "d-none");
    stringReady.classList.replace("d-block", "d-none");

    let counter = 3;
    randomNum.innerHTML = counter;

    const clock = setInterval(function () {
        counter--;
        console.log(counter);
        randomNum.innerHTML = counter;

        if(counter === 0){
            clearInterval(clock);
            randomNumber();
        }
    }, 1000);

    setTimeout(function(){
        randomNum.innerHTML = "";
    }, 8000)
})


