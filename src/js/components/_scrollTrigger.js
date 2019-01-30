import { WIN, ANIMATE } from '../constants';
import { IS_FUNC } from '../utils';

import { STAGGER } from './helpers/_stagger';

export default class SCROLLTRIGGER {

  constructor(prop) {
    this._container = prop.container || $('[data-scroll-trigger]');
    this._onStart = prop.onStart;
    this._offset = prop.offset;
    this._init();
  }

  _init() {
    this._container.each((id,el) => {
      const item = $(el);
      const itemData = item.data('scroll-trigger');
      let itemOffset;
      (itemData === 0)
        ? itemOffset = 0
        : itemOffset = itemData || this._offset || 50;
      
      const show = () => {

        const thisOffset = item.offset().top + itemOffset;
        const windowOffset = WIN.scrollTop() + WIN.outerHeight();

        if (thisOffset <= windowOffset) {

          WIN.off('scroll', show);

          if (IS_FUNC(this._onStart)) this._onStart(item);

          if ( item.hasClass(ANIMATE) ) return;
          item.addClass(ANIMATE);

        }
      };

      show();
      WIN.on('scroll', show);

    });
  }

};

window.scrollTo(window.scrollX, window.scrollY + 1); // triggered scroll after load page
new SCROLLTRIGGER({
  onStart: (item) => {
    const selector = item.find('[data-anim-text-from="bottom"]');
    const animContainers = item.find('[data-anim-text-parent], [data-anim-text-from="bottom"]');
    const animDuration = item.data('anim-duration');
    const animDelay = item.data('anim-delay');
    STAGGER({
      elements: selector,
      duration: animDuration,
      delay: animDelay,
      onComplete: () => {
        animContainers.css('display', 'inline');
      }
    });
  }
});
