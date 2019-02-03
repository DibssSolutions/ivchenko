import { OPEN, HTML, HTMLBODY, WIN, OVERFLOW_HIDDEN } from '../constants';
import { TimelineMax } from 'gsap';

const btn = $('.js-btn-menu');
const wrap = $('.js-header-menu');

const items = $('.js-header-menu [data-anim="from-top"]');
const topEllements = $('.js-header-top');
const bottomEllements = $('.js-header-footer');
const textElements = $('.js-header [data-anim="text-from-bottom"]');
const actveLine = $('.js-header [data-anim-inner="line-from-left"]');

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
  .staggerTo( items, 1.2, {
    y: 0,
    opacity: 1,
    ease: Circ.easeOut
  }, 0.1, 0.9)
  .to(actveLine, 0.7, {
  	x: 0,
    ease: Circ.easeOut
  }, 1.8)
  .to(bottomEllements, 1.2, {
  	y: 0,
  	opacity: 1,
    ease: Circ.easeOut
  }, 2);

tlWrap
  .to(wrap, 0.4, {
    opacity: 1,
    visibility: 'visible',
    ease: Power4.easeInOut
  })
  .eventCallback('onComplete', () => { 
    tlItems.play(0); 
    HTML.addClass(OVERFLOW_HIDDEN); 
  } )
  .eventCallback('onReverseComplete', () => {
    TweenMax.set( [items, topEllements, textElements, bottomEllements], { clearProps: 'all' }); 
  });

let winOffset;
btn.on('click', () => {
  if (!btn.hasClass(OPEN)) {
    winOffset = WIN.scrollTop();
    btn.addClass(OPEN);
    tlWrap.play();
  }
  else {
    btn.removeClass(OPEN);
    tlWrap.reverse();
    tlItems.pause();
    HTML.removeClass(OVERFLOW_HIDDEN);
    HTMLBODY.scrollTop(winOffset);
  }
});
