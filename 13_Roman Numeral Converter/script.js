const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");
const form = document.getElementById('form');

const convertRomano = (num) => {
  let temp=''
  const refer = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
   const romans = ['M','CM','D','CD','C','XC','L','XL','X','IX',
      'V','IV','I'];

  
  const result = [];
  
    for (let i = 0; i < refer.length; i++) {
      while (refer[i] <= num) {
       temp+= romans[i];
       num -= refer[i];
      }

    }
    result.push(temp)
    result.join('')
    output.innerText = result
  
}



const checkInput = () => {
  const inputInt = parseInt(numberInput.value);
  if (!numberInput.value || isNaN(inputInt)) {
    output.innerHTML = "Please enter a valid number"
    output.classList.add('alert');
    return;
  }else if ((numberInput.value || inputInt)<1) {
    output.innerText = "Please enter a number greater than or equal to 1";
    output.classList.add('alert');
    return;
  }else if ((numberInput.value || inputInt) >3999) {
    output.innerText = "Please enter a number less than or equal to 3999";
    output.classList.add('alert');
    return;
  }else{
    clearOutput();
    convertRomano(numberInput.value)
  }
 
};

const actualizarUI = () => {
  output.classList.remove('hidden'); 
  checkInput();
};


const clearOutput = () => {
  output.innerText = "";
  output.classList.remove('alert');
};

convertBtn.addEventListener('click', () => {

  actualizarUI(); 
  
});


numberInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    actualizarUI(); 
  }
});