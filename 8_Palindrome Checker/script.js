
const btn = document.getElementById("check-btn")

function Check() {
  const in_put = document.getElementById("text-input")

  if (!in_put.value) {
    alert("Please input a value");
  } else {
    Palindromo(in_put.value)

  }
}

function Palindromo(str) {
  
  const rest = document.getElementById("result")
  const para = document.createElement("p");

  const regex = /[^A-Za-z0-9]/g;
  console.log(regex)
  const validate = str.replace(regex, "").toLowerCase()
  const reverse = validate.split("").reverse().join("")

  

  if (validate == reverse) {
   
    rest.innerText = str +" is a palindrome"
  } else {
    rest.innerText = str +" is not a palindrome"

  }
  

}
