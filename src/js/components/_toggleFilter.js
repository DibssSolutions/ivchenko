import { OPEN } from '../constants';

const dropToggler = '.js-drop-toggler';
const dropContainer = '.js-drop-container';
const dropHiddenContent = '.js-drop-hidden';
const filter = '.js-filter';
const transitionTime = 250; //ms; _works.sass - transition of '.works__container'

$(dropToggler).click(e => {
  var parent = $(e.target).parents(dropContainer);
  var hiddenContent = $(parent).find(dropHiddenContent);

  if (!parent.hasClass(OPEN)) {
    parent.addClass(OPEN);
    $(hiddenContent).slideDown(transitionTime);
    $(filter).css('transform', 'translateY(24px)');
  } else {
    parent.removeClass(OPEN);
    $(hiddenContent).slideUp(transitionTime);
    $(filter).css('transform', 'translateY(0)');
  }
});
