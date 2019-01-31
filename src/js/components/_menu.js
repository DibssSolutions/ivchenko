import { OPEN } from '../constants';
import { TimelineMax } from 'gsap';

const header = $('.js-header');
const btnMenu = $('.js-btn-menu');
const menuWrap = $('.js-header-menu');
const timelineOpen = new TimelineMax({ paused: true }).addLabel('startStagger');


timelineOpen
  .to(menuWrap, 0.5, {
    y: 0
  });

btnMenu.on('click', () => {
  if (!btnMenu.hasClass(OPEN)) {
    btnMenu.addClass(OPEN);
    timelineOpen.play();
  }
  else {
    btnMenu.removeClass(OPEN);
  }
});
