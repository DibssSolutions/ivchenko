import { ACTIVE } from '../constants';

$('.js-page-link').each((index, el) => {
  var link = $(el);
  link.on('click', e => {
    e.preventDefault();
    $('.js-loader').addClass(ACTIVE);
    setTimeout(() => (window.location = link[0].href), 1000);
  });
  console.log(link[0].href);
});

if (document.querySelector('.loader')) {
  
}
