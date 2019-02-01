import { OPEN, BODY } from '../constants';
import { TimelineMax } from 'gsap';

// const header = $('.js-header');
// const btn = $('.js-btn-menu');
// const wrap = $('.js-header-menu');

// const items = $('.js-hero [data-anim="from-top"]');
const bg = $('.js-hero-bg [data-anim="from-left"]');
const spheres = $('.js-hero-content [data-anim="sphere-from-left"]');
const header = $('.js-header .inner-lg [data-anim]');
const titles = $('.js-hero-title [data-anim="text-from-bottom"]');
const splitter = $('.js-hero-splitter [data-anim="from-top"]');
console.log(splitter);
const text = $('.js-hero-text [data-anim="text-from-bottom"]');
const footer = $('.js-hero-footer [data-anim]');
// const topEllements = $('.js-header-top');
// const textElements = $('.js-header [data-anim="text-from-bottom"]');

// const tlWrap = new TimelineMax({ paused: true });
$('.js-hero [data-rows]').addClass('is-animate');
const tlItems = new TimelineMax({ paused: true });

tlItems
  .to(bg, 1.6, {
    x: 0,
    opacity: 1,
    ease: Power2.easeOut
  })
  .staggerTo(spheres, 2.5, {
    x: 0,
    opacity: 1,
    ease: Circ.easeOut
  }, 0, 1.3)
  .staggerTo(header, 1.1, {
    y: 0,
    opacity: 1,
    ease: Power3.easeOut
  }, 0.00001, 2.8)
  .staggerTo(titles, 1, {
    y: 0,
    opacity: 1,
    ease: Power4.easeOut
  }, 0.6, 3.4)
  .to(splitter, 1.5, {
    y: 0,
    opacity: 1,
    ease: Power4.easeOut
  }, 4.3)
  .staggerTo( text, 0.5, {
    y: 0,
    opacity: 1,
    ease: Circ.easeOut
  }, 0.3, 5.1)
  .staggerTo( footer, 0.5, {
    y: 0,
    opacity: 1,
    ease: Circ.easeOut
  }, 0.00001, 6.3);

// tlWrap
//   .to(wrap, 0.4, {
//     opacity: 1,
//     visibility: 'visible',
//     ease: Power4.easeInOut
//   })
//   .eventCallback('onComplete', () => tlItems.play(0) )
//   .eventCallback('onReverseComplete', () => TweenMax.set( [items, topEllements, textElements], { clearProps: 'all' }) );

// btn.on('click', () => {
//   if (!btn.hasClass(OPEN)) {
//     btn.addClass(OPEN);
//     tlWrap.play();
//   }
//   else {
//     btn.removeClass(OPEN);
//     tlWrap.reverse();
//     tlItems.pause();
//   }
// });
tlItems.play(0);
