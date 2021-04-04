const choice = document.getElementById('choice');
function getChoices(){
    
    let choices = document.getElementById("area").value.split(',');
    
    if(choices == ''){
        choice.classList.remove("invisible");
        choice.innerHTML = "Please Enter Something..".toUpperCase();  

    }else{
        choice.classList.remove("invisible");
        let randomChoice = choices[Math.floor(Math.random() * choices.length)];
        choice.innerHTML = randomChoice.toUpperCase();
    }
}