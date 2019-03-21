import { ACTIVE } from '../constants';

$('.js-form').on('submit', e => {
  e.preventDefault();
  var data = {
    name: $('#name').val(),
    email: $('#email').val(),
    message: $('#message').val()
  };
  $.ajax({
    type: 'POST',
    url: '../send-email.php',
    data: data,
    success: function() {
      $('.js-form-success').addClass(ACTIVE);
    }
  });
});
