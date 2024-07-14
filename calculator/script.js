
function execute(value) {
    let label = document.getElementsByClassName('lbl')[0];
    
    
    if (label.innerHTML.length < 9 || (label.innerHTML.length < 10 && value === '.')) {
        if (label.innerHTML === "0" && value !== '.') {
            label.innerHTML = value;
        } else {
            label.innerHTML += value;
        }
    }


    if (label.innerHTML.length === 7) {
        label.style.fontSize = "60px";
    } else if (label.innerHTML.length > 7) {
        label.style.fontSize = "50px";
    } else {
        label.style.fontSize = "60px"; 
    }
}


function empty() {
    let label = document.getElementsByClassName('lbl')[0];
    label.innerHTML = "0"; 
    label.style.fontSize = "60px"; 
}


function equal() {
    let label = document.getElementsByClassName('lbl')[0];
    let expression = label.innerHTML;

    try {
   
        expression = expression.replace(/X/g, '*');
        let result = eval(expression);
        
   
        result = result.toString();
        if (result.length > 9) {
            result = parseFloat(result).toPrecision(9);
        }

        label.innerHTML = result;
        label.style.fontSize = "60px"; 
    } catch (e) {
        label.innerHTML = "Error";
    }
}


function inc_Dec() {
    let label = document.getElementsByClassName('lbl')[0];
    let currentValue = label.innerHTML;
    

    if (!isNaN(currentValue)) {
       
        currentValue = parseFloat(currentValue) * -1;
        label.innerHTML = currentValue;
    }
}
