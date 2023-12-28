var inputEle = document.getElementById("input")
var btnEle = document.getElementById("btn")
var msgEle = document.getElementById("msg")

btnEle.onclick = function() {
    //get value from input
    var inputvalue = inputEle.value 

    //if anything not equal
    if(inputvalue != ""){
        //put input value into p
        msgEle.innerHTML = inputvalue
        //empty input value
        inputEle.value = ""
    }
    }
