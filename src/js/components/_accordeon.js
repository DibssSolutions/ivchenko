$(document).ready(function() {

  $('.js-accordeon-head').on('click', accordeon);
});
  
function accordeon() {
  let parentContainer = $(this).parents('.js-accordeon-parent');
  let accordeonsHead = parentContainer.find('.js-accordeon-head');
  let accordeonsBody = parentContainer.find('.js-accordeon-body');
  accordeonsHead.not($(this)).removeClass('is-active');
  $(this).toggleClass('is-active');
  accordeonsBody.not($(this).next()).slideUp(300);
  $(this).next().slideToggle(300);
  
}
