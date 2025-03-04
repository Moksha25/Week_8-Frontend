function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._+-]+(\.[a-zA-Z0-9]+)?@bridgelabz\.co(\.[a-zA-Z]{2})?$/;
    
    if (emailPattern.test(email)) {
        console.log(`${email} is a valid email `);
    } else {
        console.log(`${email} is NOT a valid email `);
    }
}

validateEmail("abc@bridgelabz.co");       
validateEmail("abc.xyz@bridgelabz.co.in"); 
validateEmail("abc@bridgelabzcom");          
validateEmail("test@xyz.co"); 