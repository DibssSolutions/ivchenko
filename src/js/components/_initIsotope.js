import LazyLoad from 'vanilla-lazyload';
import Isotope from 'isotope-layout';
import imagesLoaded from 'imagesloaded';
import { INIT, ACTIVE, ANIMATE } from '../constants';

var iso;

var myLazyLoad = new LazyLoad({
  elements_selector: '[data-masonry-lazy]',
  // treshold: 1000,
  callback_finish: () => iso.layout()
});

myLazyLoad.loadAll();

const masonry = '.js-masonry';

iso = new Isotope(masonry, {
  itemSelector: '.js-masonry-item',
  stamp: '.js-masonry-stamp',
  masonry: {
    columnWidth: '.js-masonry-width',
    gutter: '.js-masonry-gutter'
  },
  filter: '*'
});

iso.on('layoutComplete', () => $(masonry).addClass(INIT));

iso.on('arrangeComplete', function(filteredItems) {
  [...filteredItems].forEach((el, index) => {
    if (index < 2) {
      const container = el.element;
      const animatedElement = container.querySelector('[data-anim-from]');
      animatedElement.classList.add(ANIMATE);
    }
  });
});
//   // const filteredElements = $(filteredItems).find('[data-anim-from="bottom"]');
//   $(filteredItems).each((index, el) => {
//     $()
//   });
//   // console.log(filteredElements);
//   // $(filteredElements).addClass(ANIMATE);
// });

$('[data-filter]').click(function() {
  /*
  FILTERING
  */
  var filterValue = $(this).attr('data-filter');
  var categoryText = $(this).text();
  // Arrange
  iso.arrange({ filter: filterValue });
  // Change Text
  $('.js-filter-category-text').text(categoryText);
  // Active Class
  $('.js-filter-btn').each((index, el) => {
    $(el).removeClass(ACTIVE);
  });
  $(this).addClass(ACTIVE);
  // Make all items visible
  // $('[data-anim-from]').addClass(ANIMATE);
});

/*
  CHANGING FILTER BUTTON CLASS
  */
// $(".filter__buttons")
//   .find(".is-active")
//   .removeClass("is-active");
// $(this).addClass("is-active");
