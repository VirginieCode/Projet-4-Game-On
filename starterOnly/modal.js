function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// Close Modal query selector
const modalClose = document.querySelector(".close");

//Les champs du formulaire
const firstName = document.querySelector(".formData:nth-child(1) input");
const lastName = document.querySelector(".formData:nth-child(2) input");
const email = document.querySelector(".formData:nth-child(3) input");
const birthDate = document.querySelector(".formData:nth-child(4) input");
const participationNombreChamp = document.querySelector(
  ".formData:nth-child(5) input"
);
const textControl = document.querySelector(".text-control");
const maxParticipation = participationNombreChamp.getAttribute("max");
const checkboxCondition = document.querySelector(
  ".checkbox2-label:nth-child(1) input"
);
const input = document.querySelector("input");

//Regex
var emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
var birthDateRegex = /^\d{4}-\d{2}-\d{2}$/;

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
modalClose.addEventListener("click", stopModal);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//Close modal
function stopModal() {
  modalbg.style.display = "none";
}

//Mes critères de validation pour chaque champ :

function firstNameValidation() {
  if (firstName.value.length < firstName.getAttribute("minlength")) {
   
    return false
  } else {
    
    return true
  }
}

function lastNameValidation() {
  lastName.setAttribute("minlength", "2");
  if (lastName.value.length < lastName.getAttribute("minlength")) {
    return false
  } else {
    return true
  }
}

function emailValidation() {
  if (email.value.match(emailRegex)) {
    return true
  } else {
    return false
  }
}

function birthDateValidation() {
  if (birthDate.value.match(birthDateRegex)) {
    return true
  } else {
    return false
  }
}

function participationNumber() {
  if (parseInt(participationNombreChamp.value) < maxParticipation) {
    return true
  } else {
    return false
  }
}

function locationValidation() {
  if (document.getElementById("location1").checked) {
    return true
  } else if (document.getElementById("location2").checked) {
    return true
  } else if (document.getElementById("location3").checked) {
    return true
  } else if (document.getElementById("location4").checked) {
    return true
  } else if (document.getElementById("location5").checked) {
    return true
  } else if (document.getElementById("location6").checked) {
     return true
  } else {
    return false
  }
}

//Création de la constante inputsValidity qui va déterminer si un inputs est valide



//Envoie du formulaire

const submitBtn = document.querySelector(".btn-submit");

const form = document.querySelector("form");

form.addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  firstNameValidation();
  lastNameValidation();
  emailValidation();
  birthDateValidation();
  participationNumber();
  locationValidation();
  validation();
}

//Verification des champs du formulaire et affichage des erreurs

//const test = document.querySelector(".formData");

function validation() {
  //Vérification si prénom correct

 /* const Forminputs = document.querySelectorAll('input');
  Forminputs.forEach(input => console.log(input));*/

  if (firstNameValidation() === false) {
    const firstnNameError = document.querySelector(".formData:nth-child(1)");
    firstnNameError.setAttribute("data-error-visible", "true");

    firstnNameError.dataset.error =
      "Veuillez entrer votre prénom (minimum 2 caractères)";
  } else {
    const firstnNameError = document.querySelector(".formData:nth-child(1)");
    firstnNameError.setAttribute("data-error-visible", "false");
  }

  //Vérification si nom correct

  if (lastNameValidation() === false) {
    const lastNameError = document.querySelector(".formData:nth-child(2)");
    lastNameError.setAttribute("data-error-visible", "true");

    lastNameError.dataset.error =
      "Veuillez entrer votre nom (minimum 2 caractères)";
  } else {
    const lastNameError = document.querySelector(".formData:nth-child(2)");
    lastNameError.setAttribute("data-error-visible", "false");
  }

  //Vérification si email correct

  if (emailValidation() === false) {
    const emailError = document.querySelector(".formData:nth-child(3)");
    emailError.setAttribute("data-error-visible", "true");

    emailError.dataset.error = "Veuillez entrer une adresse email valide";
  } else {
    const emailError = document.querySelector(".formData:nth-child(3)");
    emailError.setAttribute("data-error-visible", "false");
  }

  //Vérification si date de naissance correct

  if (birthDateValidation() === false) {
    const dateError = document.querySelector(".formData:nth-child(4)");
    dateError.setAttribute("data-error-visible", "true");

    dateError.dataset.error = "Veuillez entrer votre date de naissance";
  } else {
    const dateError = document.querySelector(".formData:nth-child(4)");
    dateError.setAttribute("data-error-visible", "false");
  }

  //Vérification si nbr de participation correct

  if (participationNumber () === false) {
    const participationError = document.querySelector(".formData:nth-child(5)");
    participationError.setAttribute("data-error-visible", "true");

    participationError.dataset.error =
      "Veuillez entrer votre nombre de participation (chiffre entre 0 et 99)";
  } else {
    const participationError = document.querySelector(".formData:nth-child(5)");
    participationError.setAttribute("data-error-visible", "false");
  }

  if (locationValidation () === false) {
    const locationError = document.querySelector(".text-label");

   locationError.style.color = "red";
   /*const locationErrorDiv = document.querySelector(".formData:nth-child(6)");

    locationErrorDiv.dataset.error = "Veuillez cocher une option"; */
  }
  if (
    firstNameValidation () &&
    lastNameValidation () &&
    emailValidation () &&
    birthDateValidation () &&
    participationNumber() &&
    locationValidation() === true
  ) {
    return validate();
  }

   //Création de la fonction validate() comprenant le delete formulaire et message de remerciement

  function validate() {
    deleteFormualaire();
    messageRemerciement();
  }

  //Création fonction pour suppression du formulaire

  function deleteFormualaire() {
    const removeForm = document.querySelector("form");
    removeForm.remove();
  }

  // Remplacement du formulaire par un message de remerciement

  function messageRemerciement() {
    const content = document.querySelector(".content");

    const bodyMessage = document.createElement("div");

    content.appendChild(bodyMessage);

    const texteMessage = document.createTextNode(
      "Merci pour votre inscription"
    );
    bodyMessage.appendChild(texteMessage);

    const buttonClose = document.createElement("button");

    content.appendChild(buttonClose);

    const closeMessage = document.createTextNode("Fermer");
    buttonClose.appendChild(closeMessage);

    bodyMessage.classList.add("thanksMessage");
    buttonClose.classList.add("btnCloseModal");

    buttonClose.addEventListener("click", close);

    function close() {
      stopModal();
      window.location.reload();
    }
  }

}
