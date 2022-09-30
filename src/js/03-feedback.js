import throttle from 'lodash.throttle';

//=================== Глобальные переменные  =========================
const STORAGEKEY = 'feedback-form-state'; // имя ключа для localStorage
const feedbackMessage = {}; // глобальный объект для localStorage

//ссылка на форму
const onClickForm = document.querySelector('.feedback-form');

// ===================================================================

// проверка, есть ли записи в localStorage
if (localStorage.getItem(STORAGEKEY)) {
  const feedback = JSON.parse(localStorage.getItem(STORAGEKEY));

  for (const elem in feedback) {
    onClickForm.elements[elem].value = feedback[elem];
  }
  //   onClickForm.elements.email.value = feedback['email'];
  //   onClickForm.elements.message.value = feedback['message'];
}

onClickForm.addEventListener('input', throttle(getInputText, 500));
onClickForm.addEventListener('submit', onSubmitButton);

// =================== Function declaration ==========================

// действия при input
function getInputText(event) {
  feedbackMessage[event.target.name] = event.target.value;
  localStorage.setItem(STORAGEKEY, JSON.stringify(feedbackMessage));
}

// действия при нажатии кнопки Submit
function onSubmitButton(event) {
  event.preventDefault();
  onClickForm.reset();

  console.log(JSON.parse(localStorage.getItem(STORAGEKEY)));
  localStorage.removeItem(STORAGEKEY);
}
// ===================================================================
