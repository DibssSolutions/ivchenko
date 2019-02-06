import { ACTIVE } from '../constants';

$('.js-floating-group').each((index, el) => {
  const group = $(el);
  const input = group.find('.js-floating-input');
  const label = group.find('.js-floating-label');

  input.on('focus', () => group.addClass(ACTIVE));
  input.on('blur', () => {
    if (!input.val()) group.removeClass(ACTIVE);
  });
});
