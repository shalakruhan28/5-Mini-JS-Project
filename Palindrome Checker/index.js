const Input = document.getElementById("input")

function reverseString(str){
    return str.split("").reverse().join("")
}

function Check(){
  const value =  Input.value;
  const reverse = reverseString(value)
  
  if (value === reverse){
    alert(" P A L I N R O M E ")
  } else{
    alert(" N O  P A L I N R O M E ")
  }
   Input.value=""
}