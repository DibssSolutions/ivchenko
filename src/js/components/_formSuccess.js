import { ACTIVE } from '../constants';

$('.js-form').on('submit', e => {
  e.preventDefault();
  $('.js-form-success').addClass(ACTIVE);
});
