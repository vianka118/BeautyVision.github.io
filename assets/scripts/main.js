document.addEventListener("DOMContentLoaded", function () {
    const loginButton = document.getElementById("loginButton");
    const modalLogin = document.getElementById("modal-login");
    const modalRegister = document.getElementById("modal-register");
    const showLoginButton = document.getElementById("show-login-button");
    const showRegisterButton = document.getElementById("show-register-button");
    const closeModalButtons = document.querySelectorAll(".close-modal");

    const profileContainer = document.getElementById("profile-container");
    const userEmailSpan = document.getElementById("user-email");
    const profileImage = document.getElementById("profile-image");
    const dropdownButton = document.getElementById("dropdown-button");
    const dropdownMenu = document.getElementById("dropdown-menu");

    const savedToken = localStorage.getItem("authToken");
    const savedEmail = localStorage.getItem("userEmail");

    if (savedToken && savedEmail) {
        setUserLoggedIn(savedEmail);
    }

    loginButton.addEventListener("click", function () {
        modalLogin.style.display = "block";
    });

    document.getElementById("login-form").addEventListener("submit", function (event) {
        event.preventDefault();
        const email = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        const fakeToken = "usuarioAutenticado123";
        const randomImage = `https://i.pravatar.cc/150?u=${Math.random()}`;

        localStorage.setItem("authToken", fakeToken);
        localStorage.setItem("userEmail", email);
        localStorage.setItem("profileImage", randomImage);

        modalLogin.style.display = "none";
        setUserLoggedIn(email);
    });

    showRegisterButton.addEventListener("click", function (event) {
        event.preventDefault();
        modalLogin.style.display = "none";
        modalRegister.style.display = "block";
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

        if (!profileContainer.contains(event.target)) {
            dropdownMenu.classList.remove("active");
        }
    });

    function setUserLoggedIn(email) {
        loginButton.style.display = "none";
        profileContainer.style.display = "flex";
        userEmailSpan.textContent = email;
        
        const profileImgSrc = localStorage.getItem("profileImage") || `https://i.pravatar.cc/150?u=${Math.random()}`;
        profileImage.src = profileImgSrc;

        dropdownButton.addEventListener("click", function () {
            dropdownMenu.classList.toggle("active");
        });

        document.getElementById("logoutButton").addEventListener("click", function () {
            localStorage.removeItem("authToken");
            localStorage.removeItem("userEmail");
            localStorage.removeItem("profileImage");

            profileContainer.style.display = "none";
            loginButton.style.display = "block";
            dropdownMenu.classList.remove("active");
        });
    }
});

