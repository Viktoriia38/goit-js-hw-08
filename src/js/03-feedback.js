const storageKey = 'feedback-form-state';
const formData = {};
const form = document.querySelector('.feedback-form');
const emailEl = document.querySelector('input');
const textEl = document.querySelector('textArea');

dataLocalStorage();

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
  const savedMessage = localStorage.getItem(storageKey);

  if (savedMessage) {
    let dataObject = JSON.parse(savedMessage);
    emailEl.value = dataObject.email || '';
    textEl.value = dataObject.message || '';
    formData.email = dataObject.email;
    formData.message = dataObject.message;
  }
}
