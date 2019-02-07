import { ACTIVE, OVERFLOW_HIDDEN, HTML } from '../constants';

$('.js-page-link').each((index, el) => {
  var link = $(el);
  link.on('click', e => {
    e.preventDefault();
    $('.js-loader').addClass(ACTIVE);
    setTimeout(() => (window.location = link[0].href), 700);
  });
});

export default function secondaryLoader() {
  HTML.addClass(OVERFLOW_HIDDEN);
  setTimeout(() => {
    $('.js-loader').removeClass(ACTIVE);
    HTML.removeClass(OVERFLOW_HIDDEN);

  }, 300);
}
