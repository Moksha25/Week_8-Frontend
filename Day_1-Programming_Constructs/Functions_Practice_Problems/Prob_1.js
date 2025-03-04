function temperatureConversion(option, value) {
    switch (option) {
        case "CtoF":
            if (value < 0 || value > 100) {
                console.log("Error: Temperature out of range (0°C - 100°C)");
            } else {
                let degF = (value * 9/5) + 32;
                console.log(`${value}°C = ${degF.toFixed(2)}°F`);
            }
            break;

        case "FtoC":
            if (value < 32 || value > 212) {
                console.log("Error: Temperature out of range (32°F - 212°F)");
            } else {
                let degC = (value - 32) * 5/9;
                console.log(`${value}°F = ${degC.toFixed(2)}°C`);
            }
            break;

        default:
            console.log("Invalid Option! Use 'CtoF' or 'FtoC'");
    }
}

temperatureConversion("CtoF", 25);  
temperatureConversion("FtoC", 100); 
temperatureConversion("CtoF", -10);