import mainLoader from './_mainLoader';
import secondaryLoader from './_pageTransitions';
import { DOC, HTML, OVERFLOW_HIDDEN } from '../constants';
import OBSERVER from '../communication/_observer';
import EVENT from '../communication/_events';

DOC.ready(() => {
  const hero = document.querySelector('.js-hero');
  const mainLoaderEl = document.querySelector('.js-main-loader');
  const secondaryLoaderEl = document.querySelector('.js-loader');
  const myStorage = window.sessionStorage;
  const visit = myStorage.getItem('siteVisites');

  if (mainLoaderEl) {
    if (visit) {
      $(mainLoaderEl).remove();
      OBSERVER.ON_FIRE(EVENT.MAIN_PAGE_REVISITED);
    } else {
      mainLoader();
      myStorage.setItem('siteVisites', 'visited');
      setTimeout(() => OBSERVER.ON_FIRE(EVENT.MAIN_LOADER_COMPLETE), 4000);
    }
  }
  else {
    OBSERVER.ON_FIRE(EVENT.MAIN_LOADER_COMPLETE);
    myStorage.setItem('siteVisites', 'visited');
  }

  if (secondaryLoaderEl) {
    HTML.addClass(OVERFLOW_HIDDEN);
    setTimeout(() => {
      HTML.removeClass(OVERFLOW_HIDDEN);
    }, 700);
    setTimeout(() => OBSERVER.ON_FIRE(EVENT.LOAD_COMPLETE), 500);
  } else {
    OBSERVER.ON_FIRE(EVENT.LOAD_COMPLETE);
  }
});
