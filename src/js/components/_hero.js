import { OPEN, BODY, ANIMATE } from '../constants';
import { TimelineMax } from 'gsap';

const bg = $('.js-hero-bg [data-anim="from-left"]');
const spheres = $('.js-hero-content [data-anim="sphere-from-left"]');
const header = $('.js-header .inner-lg [data-anim]');
const titles = $('.js-hero-title [data-anim="text-from-bottom"]');
const splitter = $('.js-hero-splitter [data-anim="from-top"]');
const text = $('.js-hero-text [data-anim="text-from-bottom"]');
const footer = $('.js-hero-footer [data-anim]');
const rows = $('.js-hero [data-rows]');

const tlItems = new TimelineMax({ paused: true });

rows.addClass(ANIMATE);

tlItems
  .to(bg, 1.8, {
    x: 0,
    opacity: 1,
    ease: Power2.easeOut
  })
  .staggerTo(spheres, 2.8, {
    x: 0,
    ease: Power4.easeOut
  }, 0, 1.3)
  .staggerTo(header, 1.1, {
    y: 0,
    opacity: 1,
    ease: Power3.easeOut
  }, 0.00001, 2.8)
  .staggerTo(titles, 1, {
    y: 0,
    opacity: 1,
    ease: Power2.easeInOut
  }, 0.6, 3)
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

setTimeout(() => tlItems.play(), 4000);

