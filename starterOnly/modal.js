function openNavBar() {
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
const closeBtn = document.querySelector(".close");
const submitBtn = document.querySelector(".btn-submit");
const form = document.getElementById("reserve");
const closeBtnConfirmation = document.getElementById("closeBtnConfirmation");
const confirmationMsg = document.getElementById("confirmationMsg");

// Éléments DOM pour chaque entrée du formulaire avec leur erreur
const first_name = document.getElementById("first_name");
const firstNameError = document.getElementById("firstNameError");

const last_name = document.getElementById("last_name");
const lastNameError = document.getElementById("lastNameError");

const email = document.getElementById("email");
const emailError = document.getElementById("emailError");

const birthdate = document.getElementById("birthdate");
const birthdateError = document.getElementById("birthdateError");

const quantity = document.getElementById("quantity");
const quantityError = document.getElementById("quantityError");

const localisation = document.getElementsByName("localisation");
const localisationError = document.getElementById("localisationError");

const conditions = document.getElementById("checkbox1");
const conditionsError = document.getElementById("conditionsError");

const heroSection = document.querySelector(".hero-section");

// Media queries
let mediaQueryMobile = window.matchMedia("(max-width: 540px)");

// Lancement de l'événement modal
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Lancez le formulaire modal
function launchModal() {
  modalbg.style.display = "block";
  // Si l'écran mobile, Hero-section n'apparaît pas
  if (mediaQueryMobile.matches) {
    heroSection.style.display = "none";
  }
}

// Événement de fermeture de la modale
closeBtn.addEventListener("click", closeModal);
// close modal form
function closeModal() {
  modalbg.style.display = "none";

  if (mediaQueryMobile.matches) {
    heroSection.style.display = "block";
  }

  // Message de fermeture et de confirmation du bouton non affiché
  closeBtnConfirmation.style.display = "none";
  confirmationMsg.style.display = "none";

  form.style.display = "block";
  submitBtn.style.display = "block";
  form.reset();
  first_name.value = "";
}

// Message de fermeture et de confirmation du bouton non affiché
closeBtnConfirmation.style.display = "none";
confirmationMsg.style.display = "none";

// Verification des données entrées avec leur message d'erreur et le style
function checkInputs() {
  let formConfirmation = true;
  // Si la longueur du prénom est inférieure à 2 caractères alors le message d'erreur s'affiche 
  if (first_name.value.length < 2) {
    firstNameError.style.display = "block";
    firstNameError.textContent = "Veuillez entrer 2 caractères minimum";
    firstNameError.style.color = "red";
    firstNameError.style.fontSize = "12px";
    first_name.style.borderColor = "red";
    first_name.style.borderWidth = "2px";
    formConfirmation = false;
  } else {
    firstNameError.style.display = "none";
    first_name.style = "default";
  }

  // Si la longueur du nom est inférieure à 2 caractères alors le message d'erreur s'affiche
  if (last_name.value.length < 2) {
    lastNameError.style.display = "block";
    lastNameError.textContent = "Veuillez entrer 2 caractères minimum";
    lastNameError.style.color = "red";
    lastNameError.style.fontSize = "12px";
    last_name.style.borderColor = "red";
    last_name.style.borderWidth = "2px";
    formConfirmation = false;
  } else {
    lastNameError.style.display = "none";
    last_name.style = "default";
  }

  // Si le courrier électronique ne correspond pas à Regex alors un message d'erreur s'affiche
  let verifyEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (verifyEmail.exec(email.value) === null) {
    emailError.style.display = "block";
    emailError.textContent = "Veuillez renseigner votre adresse mail valide et conforme";
    emailError.style.color = "red";
    emailError.style.fontSize = "12px";
    email.style.borderColor = "red";
    email.style.borderWidth = "2px";
    formConfirmation = false;
  } else {
    emailError.style.display = "none";
    email.style = "default";
  }

  // si la date de naissance n'est pas présente alors un message d'erreur apparaît
  if (!birthdate.value) {
    birthdateError.style.display = "block";
    birthdateError.textContent = "Veuillez entrer votre date de naissance";
    birthdateError.style.color = "red";
    birthdateError.style.fontSize = "12px";
    birthdate.style.borderColor = "red";
    birthdate.style.borderWidth = "2px";
    formConfirmation = false;
  } else {
    birthdateError.style.display = "none";
    birthdate.style = "default";
  }

  // Si la quantité est vide ou sa valeur n'est pas un nombre alors un message d'erreur s'affiche
  if (quantity.value === "" || isNaN(quantity.value)) {
    quantityError.style.display = "block";
    quantityError.textContent = "Veuillez renseigner ce champ. Prière de mettre un nombre";
    quantityError.style.color = "red";
    quantityError.style.fontSize = "12px";
    quantity.style.borderColor = "red";
    quantity.style.borderWidth = "2px";
    formConfirmation = false;
  } else {
    quantityError.style.display = "none";
    quantity.style = "default";
  }

  // Si l'une des options de localisation n'est pas présente alors un message d'erreur s'affiche
  if (
    !(
      localisation[0].checked ||
      localisation[1].checked ||
      localisation[2].checked ||
      localisation[3].checked ||
      localisation[4].checked ||
      localisation[5].checked
    )
  ) {
    localisationError.style.display = "block";
    localisationError.textContent = "Veuillez choisir une option";
    localisationError.style.color = "red";
    localisationError.style.fontSize = "10px";
    formConfirmation = false;
  } else {
    localisationError.style.display = "none";
    localisation.style = "default";
  }

  // Si les conditions d'utilisation ne sont pas acceptées  alors un message d'erreur apparaît
  if (!conditions.checked) {
    conditionsError.style.display = "block";
    conditionsError.textContent =
      "Veuillez vérifier que vous avez accepté les termes et conditions";
    conditionsError.style.color = "red";
    conditionsError.style.fontSize = "10px";
    conditions.style.borderColor = "red";
    conditions.style.borderWidth = "2px";
    formConfirmation = false;
  } else {
    conditionsError.style.display = "none";
    conditions.style = "default";
  }
  return formConfirmation;
}

// Fonction appelée lors de la soumission du formulaire
function validate(event) {

  // Le comportement par défaut de l'événement de soumission est évité
  event.preventDefault();

  // Toutes les entrées doivent être vraies afin que le formulaire puisse être soumis correctement
  // Si oui, le message de confirmation et le bouton de fermeture s'affichent
  if (checkInputs()) {
    form.style.display = "none";
    confirmationMsg.style.fontSize = "30px";
    confirmationMsg.style.textAlign = "center";
    confirmationMsg.style.margin = "20px";

    closeBtnConfirmation.style.display = "block";
    closeBtnConfirmation.style.marginBottom = "20px";

    submitBtn.style.display = "none";
    confirmationMsg.style.display = "flex";
    confirmationMsg.style.flexDirection = "column";
    closeBtnConfirmation.addEventListener("click", closeModal);
    return true;
  }
}

// Écoute d'événement pour soumettre le formulaire quand la Fonction Validate est exécuté
form.addEventListener("submit", validate);
