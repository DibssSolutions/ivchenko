import LazyLoad from '../lib/lazyload.amd.js';
import Isotope from 'isotope-layout';
import imagesLoaded from 'imagesloaded';
import { INIT, ACTIVE, ANIMATE } from '../constants';


const masonry = '.js-filter';
if (document.querySelector(masonry)) {
  var iso;

  var myLazyLoad = new LazyLoad({
    elements_selector: '[data-masonry-lazy]',
    callback_load: () => {
      iso.layout();
      $(masonry).addClass(INIT);
    }
  });

  myLazyLoad.loadAll();
  
  iso = new Isotope(masonry, {
    itemSelector: '.js-masonry-item',
    stamp: '.js-masonry-stamp',
    masonry: {
      columnWidth: '.js-masonry-width'
    },
    filter: '*'
  });

  iso.on('layoutComplete', () => {
    $(masonry).addClass(INIT);
    const lastElPosition = $('.js-masonry-item:last-child').position().left;
    if (lastElPosition > 0) {
      $(masonry).addClass('btn-to-left');
    } else {
      $(masonry).removeClass('btn-to-left');
    }
  });

  iso.on('arrangeComplete', function(filteredItems) {
    [...filteredItems].forEach((el, index) => {
      if (index < 2) {
        const container = el.element;
        const animatedElement = container.querySelector('[data-anim]');
        animatedElement.classList.add(ANIMATE);
      }
    });
  });

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
  });
}
