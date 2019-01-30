import { OPEN } from '../constants';

const dropToggler = '.js-drop-toggler';
const dropContainer = '.js-drop-container';
const dropHiddenContent = '.js-drop-hidden';

$(dropToggler).click(e => {

  var parent = $(e.target).parents(dropContainer);
  var hiddenContent = $(parent).find(dropHiddenContent);

  if (!parent.hasClass(OPEN)) {
    parent.addClass(OPEN);
    $(hiddenContent).slideDown(750);
  } else {
    parent.removeClass(OPEN);
    $(hiddenContent).slideUp(750);
  }
});
