import { OPEN, ACTIVE } from '../constants';

const dropToggler = '.js-drop-toggler';
const dropContainer = '.js-drop-container';
const dropHiddenContent = '.js-drop-hidden';
const filter = '.js-filter';
const transitionTime = 350; //ms; _works.sass - transition of '.works__container'

$(dropToggler).click(e => {
  var parent = $(e.target).parents(dropContainer);
  var hiddenContent = $(parent).find(dropHiddenContent);

  if (!parent.hasClass(OPEN)) {
    parent.addClass(OPEN);
    // $(hiddenContent).addClass(ACTIVE);
    // .fadeIn({ duration: transitionTime, queue: false })
    // .css('display', 'none')
    // .slideDown(transitionTime);
  } else {
    parent.removeClass(OPEN);
    // $(hiddenContent).removeClass(ACTIVE);
    // $(hiddenContent)
    //   // .fadeOut({ duration: transitionTime, queue: false })
    //   .slideUp(transitionTime);
  }
});
