// Function to toggle between Register and Login forms
function showForm(formType) {
    document.getElementById("registerForm").classList.add("d-none");
    document.getElementById("loginForm").classList.add("d-none");

    if (formType === "register") {
        document.getElementById("registerForm").classList.remove("d-none");
    } else if (formType === "login") {
        document.getElementById("loginForm").classList.remove("d-none");
    }
}

// Function to handle user registration
function register() {
    let fullName = document.getElementById("regFullname").value;
    let email = document.getElementById("regEmail").value;
    let password = document.getElementById("regPassword").value;

    if (fullName === "" || email === "" || password === "") {
        alert("Please fill in all fields.");
        return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let existingUser = users.find(user => user.email === email);
    if (existingUser) {
        alert("Email is already registered.");
        return;
    }

    let newUser = { fullName, email, password };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration successful! You can now log in.");
    showForm("login");
}

// Function to handle user login
function login() {
    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let validUser = users.find(user => user.email === email && user.password === password);
    if (validUser) {
        alert(`Welcome, ${validUser.fullName}! Login successful.`);
    } else {
        alert("Invalid email or password.");
    }
}
