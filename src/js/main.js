document.addEventListener("DOMContentLoaded", function() {
  if (window.location.hash === "#go-away") {
    document.body.classList.add('overflow');
  }
  document.querySelector('[href="#go-away"]').addEventListener('click',function(){
    document.body.classList.add('overflow');
  });

  document.querySelector('#come-back').addEventListener('click', function(){
    document.body.classList.remove('overflow');
  });

  document.querySelector('.subscription__button').addEventListener('click', function(event){
    event.preventDefault();
    document.querySelector('.subscription').classList.add('subscription_status_success');
    let email = document.querySelector('.subscription__input').value;
    console.log(email);
    // здесь отправка значения на сервер
  });

  document.querySelectorAll('.button-question').forEach(element => {
    element.addEventListener('click', function(event){
      document.querySelector('.question-why').classList.add('question-why_status_success');
      let answer = element.value;
      console.log(answer);
      // здесь отправка значения на сервер
    });
  });
});