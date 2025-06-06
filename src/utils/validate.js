

const checkValidData = (email, password) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const isValidEmail = emailRegex.test(email);
    const isValidPassword = passwordRegex.test(password);

    if (!isValidEmail) return "Email is not valid"
    if (!isValidPassword) return "Password is not valid"
    return null;
}

export default checkValidData;

