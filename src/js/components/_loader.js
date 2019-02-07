import mainLoader from './_mainLoader';
import secondaryLoader from './_pageTransitions';
import { DOC, HTML, OVERFLOW_HIDDEN } from '../constants';
import OBSERVER from '../communication/_observer';
import EVENT from '../communication/_events';

DOC.ready(() => {
  const hero = document.querySelector('.js-hero');
  const mainLoaderEl = document.querySelector('.js-main-loader');
  const secondaryLoaderEl = document.querySelector('.js-loader');

  if (hero) {
    if (mainLoaderEl) {
      mainLoader();
      setTimeout(() => OBSERVER.ON_FIRE(EVENT.MAIN_LOADER_COMPLETE), 4000);
    } else {
      OBSERVER.ON_FIRE(EVENT.MAIN_LOADER_COMPLETE);
    }
  }

  if (secondaryLoaderEl) {
    HTML.addClass(OVERFLOW_HIDDEN);
    setTimeout(() => {
      HTML.removeClass(OVERFLOW_HIDDEN);
    }, 2000);
    setTimeout(() => OBSERVER.ON_FIRE(EVENT.LOAD_COMPLETE), 1100);
  } else {
    OBSERVER.ON_FIRE(EVENT.LOAD_COMPLETE);
  }
});
