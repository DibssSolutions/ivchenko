import mainLoader from './_mainLoader';
import secondaryLoader from './_pageTransitions';
import { DOC, HTML } from '../constants';


DOC.ready(() => {
  const mainPage = document.querySelector('.js-main-page');
  if (mainPage) {
    mainLoader();
  } else {
    console.log('load');
    secondaryLoader();
  }
});
