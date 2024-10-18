export const changeLogAndRegisterButtonsContent = () => {
    const loginButton = document.querySelector(".login-button");
    const registerButton = document.querySelector(".register-button");

    if (!loginButton || !registerButton)
        console.error('Login or register button not found.');

    window.innerWidth >= 883
        ? (loginButton.innerHTML = `<i class="fa-solid fa-right-to-bracket"></i>
                                    Iniciar sesión`,
            registerButton.innerHTML = `<i class="fa-regular fa-user"></i>
                                        Registrarse`)
        : (loginButton.innerHTML = '<i class="fa-solid fa-right-to-bracket"></i>',
            registerButton.innerHTML = '<i class="fa-regular fa-user"></i>'
        );
}

window.addEventListener('resize', changeLogAndRegisterButtonsContent);