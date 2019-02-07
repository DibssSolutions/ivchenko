import mainLoader from './_mainLoader';
import secondaryLoader from './_pageTransitions';
import { DOC, HTML, OVERFLOW_HIDDEN } from '../constants';
import OBSERVER from '../communication/_observer';
import EVENT from '../communication/_events';



DOC.ready(() => {
  const mainPage = document.querySelector('.js-main-page');
  if (mainPage) {
    mainLoader();
  } else {
    HTML.addClass(OVERFLOW_HIDDEN);
    setTimeout(() => {
      HTML.removeClass(OVERFLOW_HIDDEN);
    }, 2000);
  }
});
