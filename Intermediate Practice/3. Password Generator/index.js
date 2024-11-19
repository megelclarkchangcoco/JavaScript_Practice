// Function to generate a random password
function generatePassword(length, includeLowecase, includeUppercase, includeNumbers, includeSymbols){
    
    // Character sets for different types of characters
    const lowercaseChars = "abvdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYX";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+:;',./<>~`";

    // Initialize allowed characters and password as empty strings
    let allowedChars = "";
    let password = "";
    
    // Add selected character sets to allowed characters
    allowedChars += includeLowecase ? lowercaseChars : "";
    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";

    // Check if the length is valid
    if(length <= 0){
        return `(password length must be at least 1)`;
    }
    // Check if at least one character set is selected
    if(allowedChars.length === 0){
        return `(at least 1 set of characters needs to be selected)`;
    }

    // Generate the password by randomly selecting characters from allowed characters
    for(let i = 0; i < length; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;
}

// Define the password criteria
const passwordLength = 12;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;

// Generate the password with the specified criteria
const password = generatePassword(passwordLength, 
                                  includeLowercase, 
                                  includeUppercase, 
                                  includeNumbers, 
                                  includeSymbols);

// Output the generated password
console.log(`Generated password: ${password}`);