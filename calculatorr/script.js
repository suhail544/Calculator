let calculation = ``; // Stores the current calculation string

const getInput = (i) => {
    calculation += i; // Append input to the calculation string
    document.querySelector('.render').innerText = calculation; // Update display
}

const evaluation = () => {
    try {
        let evaluate = eval(calculation); // Evaluate the calculation string
        document.querySelector('.render').innerText = evaluate; // Display result
        calculation = ``; // Reset calculation string
    } catch (divisionByZero) {
        alert('ERROR!'); // Handle errors like division by zero
    }
}

const backSpace = () => {
    calculation = calculation.slice(0, -1); // Remove the last character
    document.querySelector('.render').innerText = calculation; // Update display
}

const clearRender = () => {
    calculation = ``; // Clear the calculation string
    document.querySelector('.render').innerText = ''; // Clear the display
};

// keyboard input
document.body.addEventListener('keydown', (e) => {
    if (e.key === '0') {
        getInput('0');
    } else if (e.key === '1') {
        getInput('1');
    } else if (e.key === '2') {
        getInput('2');
    } else if (e.key === '3') {
        getInput('3');
    } else if (e.key === '4') {
        getInput('4');
    } else if (e.key === '5') {
        getInput('5');
    } else if (e.key === '6') {
        getInput('6');
    } else if (e.key === '7') {
        getInput('7');
    } else if (e.key === '8') {
        getInput('8');
    } else if (e.key === '9') {
        getInput('9');
    } else if (e.key === '+') {
        getInput('+');
    } else if (e.key === '-') {
        getInput('-');
    } else if (e.key === '*') {
        getInput('*');
    } else if (e.key === '/') {
        getInput('/');
    } else if (e.key === 'Backspace') {
        backSpace();
    } else if (e.key === 'Enter') {
        evaluation();
    } else if (e.key === '(') {
        getInput('(');
    } else if (e.key === ')') {
        getInput(')');
    } else {
        console.log(e.key + ' IS INVALID KEY'); // Log invalid keys
    }
});