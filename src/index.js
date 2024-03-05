const emailInput = document.querySelector('#email');
const zipInput = document.querySelector('#zip');
const passwordInput = document.querySelector('#password');
const confirmPasswordInput = document.querySelector('#password-confirmation');
const form = document.querySelector('form');

const emailError = document.querySelector('#email-error');
const zipError = document.querySelector('#zip-error');
const passwordError = document.querySelector('#password-error');
const passwordConfirmationError = document.querySelector(
  '#password-confirmation-error',
);

function showEmailError() {
  if (emailInput.validity.valueMissing) {
    // If the field is empty,
    // display the following error message.
    emailError.textContent = 'You need to enter an email address.';
  } else if (emailInput.validity.typeMismatch) {
    // If the field doesn't contain an email address,
    // display the following error message.
    emailError.textContent = 'Entered value needs to be an email address.';
  }
}
function showZipError() {
  if (zipInput.validity.valueMissing) {
    zipError.textContent = 'You need to enter a zip code.';
  }
}
function showPasswordError() {
  if (passwordInput.validity.valueMissing) {
    passwordError.textContent = 'You need to enter a password';
  } else if (passwordInput.validity.tooShort) {
    passwordError.textContent = `Your password should be at least ${passwordInput.minLength} characters; you entered ${passwordInput.value.length}.`;
  }
}

function checkPasswordMatch() {
  if (passwordInput.value !== confirmPasswordInput.value) {
    passwordError.textContent = 'Passwords do not match';
    passwordConfirmationError.textContent = 'Passwords do not match.';
    return false;
  }
  passwordError.textContent = '';
  passwordConfirmationError.textContent = '';
  return true;
}

form.addEventListener('submit', (e) => {
  if (!emailInput.validity.valid) {
    showEmailError();
    e.preventDefault();
  }
  if (!zipInput.validity.valid) {
    showZipError();
    e.preventDefault();
  }
  if (!passwordInput.validity.valid) {
    showPasswordError();
    e.preventDefault();
  }
  if (checkPasswordMatch() === false) {
    e.preventDefault();
  }
});

emailInput.addEventListener('input', (e) => {
  if (emailInput.validity.valid) {
    emailError.textContent = '';
    emailError.className = 'error';
  } else {
    showEmailError();
  }
});

passwordInput.addEventListener('input', (e) => {
  checkPasswordMatch();
});

confirmPasswordInput.addEventListener('input', (e) => {
  checkPasswordMatch();
});
