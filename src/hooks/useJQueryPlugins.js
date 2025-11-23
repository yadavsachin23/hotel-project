import { useEffect } from 'react';

export function useJQueryPlugins() {
  useEffect(() => {
    if (typeof window.$ === 'undefined') {
      return;
    }

    const $ = window.$;

    // Initialize isotope for menu filtering
    if ($.fn.isotope) {
      const $grid = $('.grid').isotope({
        itemSelector: '.all',
        percentPosition: false,
        masonry: {
          columnWidth: '.all',
        },
      });

      $('.filters_menu li').on('click', function () {
        $('.filters_menu li').removeClass('active');
        $(this).addClass('active');

        const filterValue = $(this).attr('data-filter');
        $grid.isotope({
          filter: filterValue,
        });
      });
    }

    // Initialize nice select
    if ($.fn.niceSelect) {
      $('select').niceSelect();
    }

    // Initialize owl carousel for client testimonials
    if ($.fn.owlCarousel) {
      $('.client_owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        dots: false,
        nav: true,
        navText: [
          '<i class="fa fa-angle-left" aria-hidden="true"></i>',
          '<i class="fa fa-angle-right" aria-hidden="true"></i>',
        ],
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
          0: {
            items: 1,
          },
          768: {
            items: 2,
          },
          1000: {
            items: 2,
          },
        },
      });
    }

    // Cleanup function
    return () => {
      if ($.fn.owlCarousel) {
        $('.client_owl-carousel').trigger('destroy.owl.carousel');
      }
    };
  }, []);
}

