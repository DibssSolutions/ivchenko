import { BODY, DOC, LOADED, HIDDEN } from '../constants';
const container = $('.js-main-loader');
DOC.ready(() => { 
  BODY.addClass(LOADED);
  setTimeout(() => container.addClass(HIDDEN), 3000);
  setTimeout(() => container.remove(), 5000);
});
