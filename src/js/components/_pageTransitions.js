import { ACTIVE, OVERFLOW_HIDDEN, HTML, LOADED, BODY } from '../constants';

$('.js-page-link').each((index, el) => {
  var link = $(el);
  link.on('click', e => {
    e.preventDefault();
    $('.js-loader').addClass(ACTIVE);
    setTimeout(() => (window.location = link[0].href), 700);
  });
});
