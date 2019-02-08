import { TweenLite } from 'gsap';
import SCROLLTRIGGER from './_scrollTrigger';
import { mediaWidth } from '../utils';

if ($('.js-contacts-sphere')[0]) {
  const sphere = $('.js-contacts-sphere');
  const top = sphere.offset().top;
  const bottom = $('.js-contacts-sphere-bottom-position').offset().top;
  const height = sphere.height() / 2;
  const yTransform = bottom - top - height + 30;

  const sphereAnim = new TimelineMax({ paused: true });
  sphereAnim.to(sphere, 3, {
    y: yTransform,
    ease: Power4.easeOut
  });

  new SCROLLTRIGGER({
    container: $('[data-contacts-sphere-trigger]'),
    onStart: () => {
      if (mediaWidth(900)) {
        setTimeout(() => sphereAnim.play(), 1500);
      } else {
        sphereAnim.play();
      }
    }
  });
}
