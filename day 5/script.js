function checkPasswordStrength(password) {
    if (password.length < 6) {
        return "Weak";
    } else {
        let hasLetter = /[a-zA-Z]/.test(password);
        let hasDigit = /[0-9]/.test(password);
        if (hasLetter && hasDigit) {
            return "Strong";
        } else {
            return "Medium";
        }
    }
}

function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
}

function validateForm(event) {
    event.preventDefault(); // Prevent form submission
    
    const password = document.getElementById("pass").value;
    const confirmPassword = document.getElementById("cpass").value;
    const email = document.getElementById("email").value;
    
    const passwordStrength = checkPasswordStrength(password);
    document.getElementById("password-strength").innerText = "Password Strength: " + passwordStrength;
    
    const isEmailValid = validateEmail(email);
    if (!isEmailValid) {
        document.getElementById("email-validation").innerText = "Invalid Email Address";
    } else {
        document.getElementById("email-validation").innerText = "";
    }
    
    const passwordsMatch = password === confirmPassword;
    if (!passwordsMatch) {
        document.getElementById("password-match").innerText = "Passwords do not match";
    } else {
        document.getElementById("password-match").innerText = "";
    }
    
     if (passwordStrength === "Weak" || !isEmailValid || !passwordsMatch) {
        return false;
    }
    
    return true;
}