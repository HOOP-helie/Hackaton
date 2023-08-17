submitBtn.addEventListener("click", function (e) {
    // Reset default values
    e.preventDefault();
    errorMessage.classList.add("hidden");
    // Valid Email  -> Display Modal
    if (ValidateEmail(emailInput.value)) {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        showModal();
        emailInput.value = "";
        emailInput.blur();
    } else {
        // email invalide: apparition du message d'erreur
        // Set time ouf pour si l'utilsateur a rentré une mauvaise adresse alors que le message d'erreur existe deja
        setTimeout(function () {
            errorMessage.classList.remove("hidden");
        }, 100);
    }
});

//Ferme le modal : clic, bouton X ou touche Echap
closeModalBtn.addEventListener("click", closeModal);
modal.addEventListener("click", closeModal);
document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeModal();
});
