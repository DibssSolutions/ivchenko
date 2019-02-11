import { ACTIVE, OVERFLOW_HIDDEN, HTML, LOADED, BODY } from '../constants';

$('.js-page-link').each((index, el) => {
  var link = $(el);
  link.on('click', e => {
    if (link.hasClass('js-current-link')) {
      // return false;
      console.log(`Current link is ${window.href}`);
    }
    e.preventDefault();
    $('.js-loader').addClass(ACTIVE);
    setTimeout(() => (window.location = link[0].href), 500);
  });
});
