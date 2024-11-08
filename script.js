document.addEventListener("DOMContentLoaded", function () {
    const loginButton = document.getElementById("loginButton");
    const modalLogin = document.getElementById("modal-login");
    const modalRegister = document.getElementById("modal-register");
    const showLoginButton = document.getElementById("show-login-button");
    const showRegisterButton = document.getElementById("show-register-button");
    const closeModalButtons = document.querySelectorAll(".close-modal");


    loginButton.addEventListener("click", function () {
        modalLogin.style.display = "block";
    });


    showRegisterButton.addEventListener("click", function (event) {
        event.preventDefault();
        modalLogin.style.display = "none";
        modalRegister.style.display = "block";
    });

  
    showLoginButton.addEventListener("click", function (event) {
        event.preventDefault();
        modalRegister.style.display = "none";
        modalLogin.style.display = "block";
    });

    closeModalButtons.forEach(button => {
        button.addEventListener("click", function () {
            modalLogin.style.display = "none";
            modalRegister.style.display = "none";
        });
    });


    window.addEventListener("click", function (event) {
        if (event.target === modalLogin) {
            modalLogin.style.display = "none";
        }
        if (event.target === modalRegister) {
            modalRegister.style.display = "none";
        }
    });
});
