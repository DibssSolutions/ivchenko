import { BODY, DOC, HTML, LOADED, HIDDEN, OVERFLOW_HIDDEN } from '../constants';
const container = $('.js-main-loader');
HTML.addClass(OVERFLOW_HIDDEN);
DOC.ready(() => { 
  BODY.addClass(LOADED);
  setTimeout(() => container.addClass(HIDDEN), 3000);
  setTimeout(() => {
  	container.remove();
  	HTML.removeClass(OVERFLOW_HIDDEN);
  }, 5000);
});
