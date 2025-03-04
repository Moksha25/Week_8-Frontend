function validatePincode(pincode) {
    const pinPattern = /^[1-9]\d{5}$/;
    if (pinPattern.test(pincode)) {
        console.log(`${pincode} is a valid PIN code `);
    } else {
        console.log(`${pincode} is NOT a valid PIN code `);
    }
}

validatePincode("400088");
validatePincode("A400088");
validatePincode("@400088"); 
validatePincode("000088");  
validatePincode("12345");   
validatePincode("1234567");
validatePincode("40A088");  
