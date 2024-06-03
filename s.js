function sum(){


    
    // Get the values of the input fields
    let number1 = parseInt(document.getElementById('number1').value);
    let number2 = parseInt(document.getElementById('number2').value);
    
    // Add the two numbers
    let result = number1 + number2;
    
    // Display the result in the result input field
    document.getElementById('result').value = result;
}
