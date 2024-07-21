function displayNumber(num) {
    result.value+=num
}

function clearBox(){
    result.value=''
}

function evlExp(){

    // method 1 
    result.value=eval(result.value)

    //method 2

    // exp=result.value
    // output=eval(exp)
    // result.value=output


}

function removeLast(){
    result.value=result.value.slice(0,-1)
}