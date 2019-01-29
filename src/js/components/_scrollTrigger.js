import { WIN, ANIMATE } from '../constants';
import { IS_FUNC } from '../utils';

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

          if ( item.hasClass(ANIMATE) ) return;
          item.addClass(ANIMATE);

          if (IS_FUNC(this._onStart)) this._onStart();
        }
      };

      show();
      WIN.on('scroll', show);

    });
  }

};

new SCROLLTRIGGER({
  onStart: () => {
    console.log('trigger start on section');
  }
});
