const form = document.querySelector('.feedback-form');
const emailEl = document.querySelector('input');
const textEl = document.querySelector('textArea');
const storageKey = 'feedback-form-state';
const formData = {};

// dataLocalStorage();

form.addEventListener('submit', onSubmitForm);
form.addEventListener('input', _.throttle(onFormInput, 500));

function onFormInput(event) {
  formData[event.target.name] = event.target.value;
  let dataString = JSON.stringify(formData);
  localStorage.setItem(storageKey, dataString);
}

function onSubmitForm(event) {
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem(storageKey);
  console.log(formData);
  formData.email = '';
  formData.message = '';
}

function dataLocalStorage() {
  if (savedMessage) {
    const savedMessage = localStorage.getItem(storageKey);
    let data = JSON.parse(savedMessage);
    emailEl.value = data.email;
    textEl.value = data.message;
    formData.email = data.email;
    formData.message = data.message;
  }
}
