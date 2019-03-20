import {ACTIVE, OPEN, DISABLED, BODY} from '../constants';
import { STAGGER } from './helpers/_stagger';

export default (() => {

  class Tabs {

    constructor(options) {
      this.cache = {};
      this.options = options || {};
      this.activeContainerTL;
      this.clearFlag = false;
      this.clickFlag = true;
      this.init();
    }

    init() {
      this.initializeCache();
      this.initializeEvents();
      this.mobDrop();
    }

    initializeCache() {
      const {main} = this.options;
      this.cache.main = main;
      this.cache.controls = main.find('[data-tabs-control]');
      this.cache.containers = main.find('[data-tabs-container]');
      this.cache.current = main.find('[data-tabs-current]');
    }

    initializeEvents() {
      this.setActiveOnLoad();
      this.setActiveOnClick();
    }

    setActiveOnLoad() {
      const {controls, containers} = this.cache;
      for (let i = 0; i < controls.length; i++) {
        const control = $(controls[i]);
        const container = this.getTabContainer(control, containers);

        if (this.checkTabState(control, container)) {
          control.addClass(DISABLED);
          continue;
        }
        this.setActiveTab(control, container);
        break;
      }
    }

    setActiveOnClick() {
      const {controls, containers} = this.cache;
      controls.each((i, control) => {
        control = $(control);
        const container = this.getTabContainer(control, containers);

        control.on('click', e => {
          e.preventDefault();
          if (!this.clickFlag) return;
          if (this.checkTabState(control, container)|| control.hasClass(ACTIVE)) return;
          controls.removeClass(ACTIVE);
          containers.removeClass(OPEN);
          this.setActiveTab(control, container);
          let selector = container.find('[data-anim]');
          const animDelay = container.data('delay-anim');
          const animDuration = container.data('duration-anim');
          const animEase = container.data('ease-anim');
          STAGGER({
            elements: selector,
            duration: animDuration,
            delay: animDelay,
            ease: animEase,
            onStart: tl => {
              if (this.clearFlag) {
                this.activeContainerTL.set(selector,{clearProps:'all'});
                this.clearFlag = false;
                this.clickFlag = false;
              }
            },
            onComplete: tl => {
              this.activeContainerTL = tl;
              this.clearFlag = true;
              this.clickFlag = true;
            }
          });
        });
      });
    }

    //utils
    checkTabState(control, container) {
      return control.hasClass(DISABLED) || control.attr('disabled') || !container.length;
    }

    getTabContainer(control, containers) {
      return containers.filter(`[data-tabs-container="${control.data('tabs-control')}"]`);
    }

    setActiveTab(control, container) {
      const content = control.html();
      this.cache.main.attr('data-tabs', control.data('tabs-control'));
      this.cache.current.html(content);
      control.addClass(ACTIVE);
      container.addClass(OPEN);
    }

    mobDrop() {
      this.cache.current.on('click', () => {
        (!this.cache.main.hasClass(OPEN))
          ? this.cache.main.addClass(OPEN)
          : this.cache.main.removeClass(OPEN);
      });
      BODY.on('click touchend', e => {
        if ($(e.target).closest(this.cache.main).length || !this.cache.main.hasClass(OPEN)) return;
        this.cache.main.removeClass(OPEN);
      });
    }

  };

  $('[data-tabs]').each((i, main) => new Tabs({ main: $(main) }) );

})();
