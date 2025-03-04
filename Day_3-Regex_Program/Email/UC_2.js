function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@bridgelabz\.[a-zA-Z]{2,}$/;
    if (emailPattern.test(email)) {
        console.log(`${email} is a valid email `);
    } else {
        console.log(`${email} is NOT a valid email `);
    }
}

validateEmail("test@bridgelabz.co");   
validateEmail("user.name@bridgelabz.com"); 
validateEmail("test@xyz.com");         
validateEmail("test@bridgelabz"); 