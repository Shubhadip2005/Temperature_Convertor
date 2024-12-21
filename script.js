function convertTemperature(){


    const celsiusInput = document.getElementById("celsius");
    const fahrenheitInput = document.getElementById("fahrenheit");

    console.log("Celsius Input:", celsiusInput.value);
    console.log("Fahrenheit Input:", fahrenheitInput.value);

    if(!isNaN(celsiusInput.value) && celsiusInput.value !== ""){

        const celsiusValue = parseFloat(celsiusInput.value);
        const fahrenheitValue = (celsiusValue * 9/5) + 32;

        fahrenheitInput.value = fahrenheitValue.toFixed(2);
        console.log("Converted to Fahrenheit:", fahrenheitValue.toFixed(2));
    }else if(!isNaN(fahrenheitInput.value) && fahrenheitInput.value !== ""){
        
        const fahrenheitValue = parseFloat(fahrenheitInput.value);
        const celsiusValue = (fahrenheitValue - 32) * 5/9;
       

        celsiusInput.value = celsiusValue.toFixed(2);
        console.log("Converted to Celsius:", celsiusValue.toFixed(2));

    }else{
        alert("Please enter a Valid Number")
    }



}