import { OPEN, BODY } from '../constants';
import { TimelineMax } from 'gsap';

const header = $('.js-header');
// const btn = $('.js-btn-menu');
// const wrap = $('.js-header-menu');

const items = $('.js-hero [data-anim="from-top"]');
const bg = $('.js-bg [data-anim]');
const spheres = $('js-content [data-anim="sphere-from-left"]')
const topEllements = $('.js-header-top');
const textElements = $('.js-header [data-anim="text-from-bottom"]');

const tlWrap = new TimelineMax({ paused: true });
const tlItems = new TimelineMax({ paused: true });

tlItems
  .to(topEllements, 0.7, {
    y: 0,
    opacity: 1,
    ease: Power4.easeOut
  })
  .to(textElements, 1.2, {
    y: 0,
    opacity: 1,
    ease: Power4.easeOut
  }, 0.5)
  .staggerTo( items, 1.3, {
    y: 0,
    opacity: 1,
    ease: Circ.easeOut
  }, 0.1, 0.9);

tlWrap
  .to(wrap, 0.4, {
    opacity: 1,
    visibility: 'visible',
    ease: Power4.easeInOut
  })
  .eventCallback('onComplete', () => tlItems.play(0) )
  .eventCallback('onReverseComplete', () => TweenMax.set( [items, topEllements, textElements], { clearProps: 'all' }) );

btn.on('click', () => {
  if (!btn.hasClass(OPEN)) {
    btn.addClass(OPEN);
    tlWrap.play();
  }
  else {
    btn.removeClass(OPEN);
    tlWrap.reverse();
    tlItems.pause();
  }
});
