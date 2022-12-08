var body = document.getElementsByTagName("body")[0];


function decrease(){
    var numberElement = document.getElementById("num");
    var numberPresent = Number(numberElement.innerText);

    if(numberPresent==0){

        var error = document.createElement("div");
        error.innerText = "ERROR! Cannot go below 0";
        error.style.color = "red";
        var btn = document.getElementById("buttons")
        body.insertBefore(error,body.children[3]);

        
    }
    else{
        numberElement.innerText = numberPresent-1;
    }
}

function increase(){
    var numberElement = document.getElementById("num");
    var numberPresent = Number(numberElement.innerText);
   
    numberElement.innerText = numberPresent+1;
    
}

function clearNumber(){
    var numberElement = document.getElementById("num");
       
    numberElement.innerText = 0;
    
}

var buttonD = document.getElementById("decrement");
buttonD.onclick = decrease;


var buttonI = document.getElementById("increment");
buttonI.onclick = increase;

var buttonC = document.getElementById("clear");
buttonC.onclick = clearNumber;