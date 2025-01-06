function appendToDisplay(value) {
    let display = document.querySelector('#display');
    if (display.textContent === '0') {
        display.textContent = value;
    } else {
        display.textContent += value;
    }
}

function clearDisplay() {
    let display = document.querySelector('#display');
    display.textContent= '0';
}

function calculate() {
    let display = document.querySelector('#display');
    try{
        display.textContent = eval(display.textContent);
    }catch(error) {
        display.textContent = 'Error';
    }
       
}

function calculatePercent(){
    let display = document.querySelector('#display');
    try{
        display.textContent = eval(display.textContent)/100;
    } catch(error){
        display.textContent = 'Error';
    }
   
}
function backClean(){
    let display = document.querySelector('#display');
    display.textContent = display.textContent.slice(0, -1);
    if(display.textContent === ''){
        display.textContent = '0';
    }
}
