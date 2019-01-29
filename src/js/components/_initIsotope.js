import LazyLoad from 'vanilla-lazyload';
import Isotope from 'isotope-layout';
import imagesLoaded from 'imagesloaded';
import { INIT } from '../constants';

var iso;

var myLazyLoad = new LazyLoad({
  elements_selector: '[data-masonry-lazy]',
  // treshold: 1000,
  callback_finish: () => iso.layout()
});

myLazyLoad.loadAll();

iso = new Isotope('.js-masonry', {
  itemSelector: '.js-masonry-item',
  masonry: {
    columnWidth: '.js-masonry-width',
    gutter: '.js-masonry-gutter'
  }
});

iso.on('layoutComplete', () => $('.js-masonry').addClass(INIT));

$('[data-filter]').click(function() {
  /*
  FILTERING
  */
  var filterValue = $(this).attr('data-filter');
  iso.arrange({ filter: filterValue });
});

/*
  CHANGING FILTER BUTTON CLASS
  */
// $(".filter__buttons")
//   .find(".is-active")
//   .removeClass("is-active");
// $(this).addClass("is-active");
