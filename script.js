var body = document.getElementsByTagName("body")[0];
var error = document.getElementById("error");


function decrease(){
    var numberElement = document.getElementById("num");
    var numberPresent = Number(numberElement.innerText);

    if(numberPresent==0){
       error.style.color= "red";  
    }
    else{
        error.style.color= "black";  
        numberElement.innerText = numberPresent-1;
    }
}

function increase(){
    var numberElement = document.getElementById("num");
    var numberPresent = Number(numberElement.innerText);
    error.style.color= "black"; 
    numberElement.innerText = numberPresent+1;
    
}

function clearNumber(){
    var numberElement = document.getElementById("num");

    error.style.color= "black";    
    numberElement.innerText = 0;
    
}

var buttonD = document.getElementById("decrement");
buttonD.onclick = decrease;


var buttonI = document.getElementById("increment");
buttonI.onclick = increase;

var buttonC = document.getElementById("clear");
buttonC.onclick = clearNumber;