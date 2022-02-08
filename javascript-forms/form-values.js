var $contactForm = document.querySelector('form');
$contactForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  var formObj = {};
  var email = $contactForm.elements.email.value;
  var name = $contactForm.elements.name.value;
  var message = $contactForm.elements.message.value;
  formObj.name = name;
  formObj.email = email;
  formObj.message = message;
  console.log(formObj);
  $contactForm.reset();
}
