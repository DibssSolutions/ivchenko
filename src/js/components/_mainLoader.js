import { BODY, DOC, HTML, LOADED, HIDDEN, OVERFLOW_HIDDEN } from '../constants';
import OBSERVER from '../communication/_observer';
import EVENT from '../communication/_events';

export default function mainLoader() {
  const container = $('.js-main-loader');
  HTML.addClass(OVERFLOW_HIDDEN);
  BODY.addClass(LOADED);
  setTimeout(() => container.addClass(HIDDEN), 3000);
  setTimeout(() => {
    container.remove();
    HTML.removeClass(OVERFLOW_HIDDEN);
  }, 5000);
}
