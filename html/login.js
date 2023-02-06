const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;
    fetch("uzytkownicy.json")
        .then(response => response.json())
        .then(data => {
            if (username in data["uzytkownicy"][0]  && password === data["uzytkownicy"][0][username]) {
                location.href= "poZalogowaniu.html";
            } else {
                loginErrorMsg.style.opacity = 1;
                //alert("Błędny token/hasło");

            }
        })
    /*
    if (username === "user" && password === "web_dev") {
        location.href= "poZalogowaniu.html";
    } else {
        loginErrorMsg.style.opacity = 1;
        //alert("Błędny token/hasło");

    }
    */

})