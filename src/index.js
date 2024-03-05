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
    emailError.textContent = 'You need to enter an email address.';
  } else if (emailInput.validity.typeMismatch) {
    emailError.textContent = 'Entered value needs to be an email address.';
  }
}
function showZipError() {
  if (zipInput.validity.valueMissing) {
    zipError.textContent = 'You need to enter a zip code.';
  }
}

function checkPasswordMatch() {
  if (passwordInput.value === confirmPasswordInput.value) {
    passwordError.textContent = '';
    passwordConfirmationError.textContent = '';
    confirmPasswordInput.style.border = 'solid green';
  } else {
    //   passwordError.textContent = '';
    passwordConfirmationError.textContent = 'Passwords do not match.';
    confirmPasswordInput.style.border = 'solid red';
  }
}

function showPasswordError() {
  if (passwordInput.validity.valueMissing) {
    passwordError.textContent = 'You need to enter a password';
  } else if (passwordInput.validity.tooShort) {
    passwordError.textContent = `Your password should be at least ${passwordInput.minLength} characters; you entered ${passwordInput.value.length}.`;
  } else if (passwordInput.value !== confirmPasswordInput.value) {
    passwordError.textContent = 'Passwords do not match!';
  }
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
  if (passwordInput.value !== confirmPasswordInput.value) {
    showPasswordError();
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

zipInput.addEventListener('input', (e) => {
  if (zipInput.validity.valid) {
    zipError.textContent = '';
    zipError.className = 'error';
  } else {
    showZipError();
  }
});

passwordInput.addEventListener('input', (e) => {
  if (passwordInput.validity.valid && passwordInput.value === confirmPasswordInput.value) {
    passwordError.textContent = '';
    passwordError.className = 'error';
  } else if (passwordInput.validity.valid && passwordInput.value !== confirmPasswordInput.value) {
    passwordError.textContent = 'Password is in the correct format but does not match.';
  } else {
    showPasswordError();
  }
});

passwordInput.addEventListener('input', checkPasswordMatch);
confirmPasswordInput.addEventListener('input', checkPasswordMatch);
