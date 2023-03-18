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

//Les champs du formulaire

const formDataInputs = document.querySelectorAll("input");
const locationCheckbox = document.querySelectorAll(
  '.checkbox-input[type="radio"]'
);
const conditionsCheckbox = document.getElementById("checkbox1");

//Création des messages d'erreurs qui s'affichent lorsque un inputs est incorrect

let errorMsg = {
  first: "Veuillez entrer votre prénom",
  last: "Veuillez entrer votre nom",
  email: "Veuillez entrer un email valide",
  birthdate: "Veuillez entrer votre date de naissance",
  quantity:
    "Veuillez indiquer le nombre de tournoi auxquelles vous avez participé",
  location: "Veuillez cocher le lieu",
  conditions: "Veuillez coché la case pour accepter les conditions",
};
//Envoie du formulaire

const submitBtn = document.querySelector(".btn-submit");

const form = document.querySelector("form");

form.addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();
  validation();
}

//Création fonction validation : pour verification des inputs du formulaire et affichage des erreurs

function validation() {
  let allInputs = true; //Je set la valeur true à mes inputs

  //Création d'une boucle for qui va vérifier si la valeur de mes inputs n'est pas vide

  for (let i = 0; i < formDataInputs.length; i++) {
    if (formDataInputs[i].value === "") {
      let inputNameattr = formDataInputs[i].getAttribute("name"); //Récupération de l'attribut name pour chaque input
      const error = errorMsg[inputNameattr]; //Affichque du message d'erreur récupérer dans l'objet 'errorMsg' qui correspond au name de l'input

      let divDataForm = formDataInputs[i].closest(".formData"); //Ici je récupère la div la plus proche de chaque input
      let errorExisting = divDataForm.querySelector(".errorMsg"); //Récupération de la class du msg d'erreur

      if (errorExisting) {
        errorExisting.remove();
      } // ici je précise que si il y a déjà un message d'erreur alors il faut supprimer le précédant à fin que il n'y en ai que un, et que il ne se rajoute à l'autre

      let errorDiv = document.createElement("div"); //Création de la div pour le msg d'erreur

      divDataForm.appendChild(errorDiv); //Ajout du message à la div
      divDataForm.setAttribute("data-error-visible", "true");
      divDataForm.dataset.error = error; // Application de l'attribue data-error
      errorDiv.classList.add("errorMsg"); //J'attribue une class au msg d'erreur

      allInputs = false; // Si un input est incorrect je lui set la valeur faux
    }

    //Création d'un addEventListener qui va écouter les inputs et supprimer le message d'error dés que la valeur de l'input est modifiée

    formDataInputs[i].addEventListener("input", function () {
      let newDivDataForm = this.closest(".formData"); //div la plus proche de l'input

      let existingError = newDivDataForm.querySelector(".errorMsg"); //recherche du message d'erreur dans la div la plus proche

      if (existingError) {
        existingError.remove(); //Si message d'erreur existant, il faut le supprimer
        newDivDataForm.setAttribute("data-error-visible", "false");
      }
    });

    //Vérification pour voir si un lieu a bien été coché

    for (let i = 0; i < locationCheckbox.length; i++) {
      if (locationCheckbox[i].checked) {
        allInputs = true;
        break;
      }

      if (!locationCheckbox[i].checked) {
        let divDataFormLocation = locationCheckbox[i].closest(".formData");
        let errorExisting = divDataFormLocation.querySelector(".errorMsg");
        let errorDivLocation = document.createElement("div"); 
        divDataFormLocation.appendChild(errorDivLocation); 
        divDataFormLocation.setAttribute("data-error-visible", "true");
        let inputNameattr = locationCheckbox[i].getAttribute("name"); 
        const error = errorMsg[inputNameattr];
        divDataFormLocation.dataset.error = error; 
        errorDivLocation.classList.add("errorMsg"); 

        if (errorExisting) {
          errorExisting.remove();
        }

        allInputs = false;
        
      }
    }

    locationCheckbox[i].addEventListener("input", function () {
      let DivDataForm = this.closest(".formData");

      let existingError = DivDataForm.querySelector(".errorMsg");

      if (existingError) {
        existingError.remove();
        DivDataForm.setAttribute("data-error-visible", "false");
      }
    });

    //Vérification pour voir si la case conditions est bien coché

    if (!conditionsCheckbox.checked) {
      let checkboxInputDiv = conditionsCheckbox.closest(".formData");
      let errorcheckboxDiv = document.createElement("div");

      checkboxInputDiv.setAttribute("data-error-visible", "true");
      let inputNameattr = conditionsCheckbox.getAttribute("name"); 
      const error = errorMsg[inputNameattr];
      checkboxInputDiv.dataset.error = error;
 
      errorcheckboxDiv.classList.add("errorMsg");
      checkboxInputDiv.appendChild(errorcheckboxDiv); 
      allInputs = false;

    }

    //Création d'un addEventListener qui va écouter les inputs et supprimer le message d'error dés que la valeur de l'input est modifiée

    conditionsCheckbox.addEventListener("click", function () {
      let thisDivDataForm = this.closest(".formData");

      let existingError = thisDivDataForm.querySelector(".errorMsg");

      if (conditionsCheckbox.checked) {
        existingError.remove();
        thisDivDataForm.setAttribute("data-error-visible", "false");
      }
    });
  }

  // Ici je verifie si tous les inputs sont true, si pas d'erreur lancement de la fonction validate
  if (allInputs) {
    validate();
  }

  //Création de la fonction validate qui renvoie les fonctions : deleteFormualaire et messageRemerciement

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
